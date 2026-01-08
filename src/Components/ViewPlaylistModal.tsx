import React from 'react';
import { Playlist } from '../types';

interface ViewPlaylistModalProps {
  playlist: Playlist | null;
  onClose: () => void;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  return `${day} ${month}, ${year} ${time}`;
};

export default function ViewPlaylistModal({ playlist, onClose }: ViewPlaylistModalProps) {
  if (!playlist) return null;

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-header">
          <h3>View Playlist</h3>
          <button onClick={onClose} className="admin-modal-close">×</button>
        </div>
        <div className="admin-modal-body">
          <div className="admin-modal-field">
            <strong>ID:</strong> {playlist.id}
          </div>
          <div className="admin-modal-field">
            <strong>Title:</strong> {playlist.title}
          </div>
          <div className="admin-modal-field">
            <strong>Cover Image:</strong>
            {playlist.cover_image && (
              <img
                src={playlist.cover_image}
                alt={playlist.title}
                style={{ maxWidth: '200px', marginTop: '10px', borderRadius: '4px' }}
              />
            )}
          </div>
          <div className="admin-modal-field">
            <strong>Songs ({playlist.songs.length}):</strong>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              {playlist.songs.map((song, index) => (
                <li key={index}>{song.name} - {song.duration}</li>
              ))}
            </ul>
          </div>
          <div className="admin-modal-field">
            <strong>Platform Links:</strong>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              {playlist.platform_links.spotify && (
                <li>Spotify: <a href={playlist.platform_links.spotify} target="_blank" rel="noopener noreferrer">{playlist.platform_links.spotify}</a></li>
              )}
              {playlist.platform_links.gaana && (
                <li>Gaana: <a href={playlist.platform_links.gaana} target="_blank" rel="noopener noreferrer">{playlist.platform_links.gaana}</a></li>
              )}
              {playlist.platform_links.jiosaavn && (
                <li>JioSaavn: <a href={playlist.platform_links.jiosaavn} target="_blank" rel="noopener noreferrer">{playlist.platform_links.jiosaavn}</a></li>
              )}
              {playlist.platform_links.amazon && (
                <li>Amazon Music: <a href={playlist.platform_links.amazon} target="_blank" rel="noopener noreferrer">{playlist.platform_links.amazon}</a></li>
              )}
            </ul>
          </div>
          {playlist.created_at && (
            <div className="admin-modal-field">
              <strong>Created:</strong> {formatDate(playlist.created_at)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
