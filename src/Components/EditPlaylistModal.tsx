'use client';
import React, { useState } from 'react';
import { Playlist } from '../types';

interface EditPlaylistModalProps {
  playlist: Playlist;
  onSave: (playlist: Playlist, imageFile?: File) => void;
  onClose: () => void;
  isLoading: boolean;
}

export default function EditPlaylistModal({ playlist, onSave, onClose, isLoading }: EditPlaylistModalProps) {
  const [formData, setFormData] = useState<Playlist>(playlist);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(playlist.cover_image);
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});
  const [touched, setTouched] = useState<{[key: string]: boolean}>({});

  const validateField = (fieldName: string, value: any): string => {
    switch (fieldName) {
      case 'title':
        return !value?.trim() ? 'Title is required' : '';
      case 'songs':
        const validSongs = formData.songs.filter(song => song.name.trim() && song.duration.trim());
        return validSongs.length < 2 ? 'At least 2 complete songs are required' : '';
      case 'spotify':
        return !formData.platform_links.spotify?.trim() ? 'Spotify link is required' : '';
      case 'gaana':
        return !formData.platform_links.gaana?.trim() ? 'Gaana link is required' : '';
      case 'jiosaavn':
        return !formData.platform_links.jiosaavn?.trim() ? 'JioSaavn link is required' : '';
      case 'amazon':
        return !formData.platform_links.amazon?.trim() ? 'Amazon Music link is required' : '';
      default:
        return '';
    }
  };

  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {};
    
    errors.title = validateField('title', formData.title);
    errors.songs = validateField('songs', formData.songs);
    errors.spotify = validateField('spotify', formData.platform_links.spotify);
    errors.gaana = validateField('gaana', formData.platform_links.gaana);
    errors.jiosaavn = validateField('jiosaavn', formData.platform_links.jiosaavn);
    errors.amazon = validateField('amazon', formData.platform_links.amazon);

    Object.keys(errors).forEach(key => {
      if (!errors[key]) delete errors[key];
    });

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBlur = (fieldName: string) => {
    setTouched({ ...touched, [fieldName]: true });
    const error = validateField(fieldName, fieldName === 'songs' ? formData.songs :
                                 fieldName === 'title' ? formData.title :
                                 formData.platform_links[fieldName as keyof typeof formData.platform_links]);
    setFieldErrors({ ...fieldErrors, [fieldName]: error });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoading && validateForm()) {
      onSave(formData, imageFile || undefined);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSongChange = (index: number, field: 'name' | 'duration', value: string) => {
    const newSongs = [...formData.songs];
    newSongs[index] = { ...newSongs[index], [field]: value };
    setFormData({ ...formData, songs: newSongs });
    if (touched.songs) {
      const error = validateField('songs', newSongs);
      setFieldErrors({ ...fieldErrors, songs: error });
    }
  };

  const addSong = () => {
    setFormData({
      ...formData,
      songs: [...formData.songs, { name: '', duration: '' }]
    });
  };

  const removeSong = (index: number) => {
    const newSongs = formData.songs.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      songs: newSongs
    });
    if (touched.songs) {
      const error = validateField('songs', newSongs);
      setFieldErrors({ ...fieldErrors, songs: error });
    }
  };

  return (
    <div className="admin-modal-overlay" onClick={!isLoading ? onClose : undefined}>
      <div className="admin-modal admin-modal-large" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-header">
          <h3>Edit Playlist</h3>
          <button onClick={onClose} className="admin-modal-close" disabled={isLoading}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="admin-modal-body">
            <div className="admin-form-group">
              <label>Title: <span className="required-asterisk">*</span></label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                onBlur={() => handleBlur('title')}
                disabled={isLoading}
              />
              {fieldErrors.title && <span className="field-error">{fieldErrors.title}</span>}
            </div>

            <div className="admin-form-group">
              <label>Cover Image:</label>
              {imagePreview && (
                <div style={{ marginBottom: '10px' }}>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '4px', objectFit: 'cover' }}
                  />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ marginBottom: '10px' }}
                disabled={isLoading}
              />
              <small style={{ display: 'block', color: '#888', marginTop: '5px' }}>
                Upload a new image to replace the current cover
              </small>
            </div>

            <div className="admin-form-group">
              <label>Songs: <span className="required-asterisk">*</span> <small style={{ fontWeight: 'normal', opacity: 0.7 }}>(Minimum 2 required)</small></label>
              {formData.songs.map((song, index) => (
                <div key={index} className="admin-song-row">
                  <input
                    type="text"
                    placeholder="Song name"
                    value={song.name}
                    onChange={(e) => handleSongChange(index, 'name', e.target.value)}
                    onBlur={() => handleBlur('songs')}
                    disabled={isLoading}
                  />
                  <input
                    type="text"
                    placeholder="Duration"
                    value={song.duration}
                    onChange={(e) => handleSongChange(index, 'duration', e.target.value)}
                    onBlur={() => handleBlur('songs')}
                    disabled={isLoading}
                  />
                  <button type="button" onClick={() => removeSong(index)} className="admin-remove-btn" disabled={isLoading}>
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={addSong} className="admin-add-btn" disabled={isLoading}>
                + Add Song
              </button>
              {fieldErrors.songs && <span className="field-error" style={{ marginTop: '10px', display: 'block' }}>{fieldErrors.songs}</span>}
            </div>

            <div className="admin-form-group">
              <label>Spotify Link: <span className="required-asterisk">*</span></label>
              <input
                type="url"
                value={formData.platform_links.spotify || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  platform_links: { ...formData.platform_links, spotify: e.target.value }
                })}
                onBlur={() => handleBlur('spotify')}
                disabled={isLoading}
              />
              {fieldErrors.spotify && <span className="field-error">{fieldErrors.spotify}</span>}
            </div>

            <div className="admin-form-group">
              <label>Gaana Link: <span className="required-asterisk">*</span></label>
              <input
                type="url"
                value={formData.platform_links.gaana || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  platform_links: { ...formData.platform_links, gaana: e.target.value }
                })}
                onBlur={() => handleBlur('gaana')}
                disabled={isLoading}
              />
              {fieldErrors.gaana && <span className="field-error">{fieldErrors.gaana}</span>}
            </div>

            <div className="admin-form-group">
              <label>JioSaavn Link: <span className="required-asterisk">*</span></label>
              <input
                type="url"
                value={formData.platform_links.jiosaavn || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  platform_links: { ...formData.platform_links, jiosaavn: e.target.value }
                })}
                onBlur={() => handleBlur('jiosaavn')}
                disabled={isLoading}
              />
              {fieldErrors.jiosaavn && <span className="field-error">{fieldErrors.jiosaavn}</span>}
            </div>

            <div className="admin-form-group">
              <label>Amazon Music Link: <span className="required-asterisk">*</span></label>
              <input
                type="url"
                value={formData.platform_links.amazon || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  platform_links: { ...formData.platform_links, amazon: e.target.value }
                })}
                onBlur={() => handleBlur('amazon')}
                disabled={isLoading}
              />
              {fieldErrors.amazon && <span className="field-error">{fieldErrors.amazon}</span>}
            </div>
          </div>

          <div className="admin-modal-footer">
            <button type="button" onClick={onClose} className="admin-modal-btn cancel-btn" disabled={isLoading}>
              Cancel
            </button>
            <button type="submit" className="admin-modal-btn save-btn" disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
