"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Pagination, QuizResult, Playlist } from '../../../types';
import { useAuthStore } from '../../../store/useAuthStore';
import * as XLSX from 'xlsx';
import ViewPlaylistModal from '@/Components/ViewPlaylistModal';
import AddPlaylistModal from '@/Components/AddPlaylistModal';
import EditPlaylistModal from '@/Components/EditPlaylistModal';
import DeleteConfirmModal from '@/Components/DeleteConfirmModal';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  return `${day} ${month}, ${year} ${time}`;
};

const formatDateForExcel = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [quizzes, setQuizzes] = useState<QuizResult[]>([]);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'users' | 'quiz' | 'playlists'>('users');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  const [viewPlaylistModal, setViewPlaylistModal] = useState<Playlist | null>(null);
  const [editPlaylistModal, setEditPlaylistModal] = useState<Playlist | null>(null);
  const [addPlaylistModal, setAddPlaylistModal] = useState<boolean>(false);
  const [deletePlaylistId, setDeletePlaylistId] = useState<string | null>(null);

  const [isDeleting, setIsDeleting] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
      setCurrentPage(1); 
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchData = async (page: number, type: 'users' | 'quiz' | 'playlists', search: string) => {
    setLoading(true);
    setError(null);
    setPagination(null);

    try {
      let endpoint = '/api/users';
      if (type === 'quiz') endpoint = '/api/quiz';
      if (type === 'playlists') endpoint = '/api/playlist';

      let url = `${endpoint}?page=${page}&limit=10`;

      if (type === 'quiz' && search) {
        url += `&playlist_id=${encodeURIComponent(search)}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        if (type === 'users') {
          setUsers(data.data || []);
        } else if (type === 'quiz') {
          setQuizzes(data.data || []);
        } else if (type === 'playlists') {
          setPlaylists(data.data || []);
        }
        setPagination(data.pagination || null);
      } else {
        setError(data.error || `Failed to fetch ${type}`);
        if (response.status === 401) {
          logout();
          router.push('/login');
        }
      }
    } catch (err) {
      setError('Connection to server failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage, activeTab, debouncedSearchQuery);
  }, [currentPage, activeTab, debouncedSearchQuery, router, logout]);

  const handlePageChange = (newPage: number) => {
    if (pagination && newPage >= 1 && newPage <= pagination.totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleTabChange = (tab: 'users' | 'quiz' | 'playlists') => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchQuery('');
    setPagination(null);
  };

  const handleDeletePlaylist = async () => {
    if (!deletePlaylistId) return;

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/playlist/${deletePlaylistId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        showToast('Playlist deleted successfully', 'success');
        setDeletePlaylistId(null);
        fetchData(currentPage, activeTab, debouncedSearchQuery);
      } else {
        showToast(data.error || 'Failed to delete playlist', 'error');
      }
    } catch (error) {
      console.error('Delete failed:', error);
      showToast('Failed to delete playlist. Please try again.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleAddPlaylist = async (newPlaylist: Omit<Playlist, 'id' | 'created_at' | 'updated_at'>, imageFile?: File) => {
    setIsCreating(true);
    try {
      console.log('Frontend - Preparing playlist data:', {
        title: newPlaylist.title,
        songs: newPlaylist.songs,
        platform_links: newPlaylist.platform_links,
        hasImageFile: !!imageFile,
        cover_image: newPlaylist.cover_image
      });

      const formData = new FormData();

      if (imageFile) {
        console.log('Frontend - Adding image file:', imageFile.name, imageFile.type, imageFile.size);
        formData.append('image', imageFile);
      }

      formData.append('title', newPlaylist.title);
      formData.append('songs', JSON.stringify(newPlaylist.songs));
      formData.append('platform_links', JSON.stringify(newPlaylist.platform_links));

      console.log('Frontend - FormData contents:');
      console.log('  title:', newPlaylist.title);
      console.log('  songs JSON:', JSON.stringify(newPlaylist.songs));
      console.log('  platform_links JSON:', JSON.stringify(newPlaylist.platform_links));

      if (!imageFile && newPlaylist.cover_image) {
        formData.append('cover_image', newPlaylist.cover_image);
        console.log('  cover_image URL:', newPlaylist.cover_image);
      }

      console.log('Frontend - Sending POST request to /api/playlist');
      const response = await fetch('/api/playlist', {
        method: 'POST',
        body: formData,
      });

      console.log('Frontend - Response status:', response.status);
      const data = await response.json();
      console.log('Frontend - Response data:', data);

      if (data.success) {
        showToast('Playlist created successfully', 'success');
        setAddPlaylistModal(false);
        fetchData(currentPage, activeTab, debouncedSearchQuery);
      } else {
        console.error('Frontend - Create failed with error:', data.error);
        showToast(data.error || 'Failed to create playlist', 'error');
      }
    } catch (error) {
      console.error('Frontend - Create failed with exception:', error);
      showToast('Failed to create playlist. Please try again.', 'error');
    } finally {
      setIsCreating(false);
    }
  };

  const handleUpdatePlaylist = async (updatedPlaylist: Playlist, imageFile?: File) => {
    setIsUpdating(true);
    try {
      const formData = new FormData();

      if (imageFile) {
        formData.append('image', imageFile);
      }

      formData.append('title', updatedPlaylist.title);
      formData.append('songs', JSON.stringify(updatedPlaylist.songs));
      formData.append('platform_links', JSON.stringify(updatedPlaylist.platform_links));

      if (!imageFile && updatedPlaylist.cover_image) {
        formData.append('cover_image', updatedPlaylist.cover_image);
      }

      const response = await fetch(`/api/playlist/${updatedPlaylist.id}`, {
        method: 'PUT',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        showToast('Playlist updated successfully', 'success');
        setEditPlaylistModal(null);
        fetchData(currentPage, activeTab, debouncedSearchQuery);
      } else {
        showToast(data.error || 'Failed to update playlist', 'error');
      }
    } catch (error) {
      console.error('Update failed:', error);
      showToast('Failed to update playlist. Please try again.', 'error');
    } finally {
      setIsUpdating(false);
    }
  };

  const exportToExcel = async () => {
    try {
      if (activeTab === 'users') {
        const response = await fetch(`/api/users?page=1&limit=10000`);
        const data = await response.json();

        if (data.success && data.data) {
          const exportData = data.data.map((user: User) => ({
            'ID': user.id,
            'Email Address': user.email,
            'IP Address': user.ip_address || 'N/A',
            'Join Date': formatDateForExcel(user.created_at)
          }));

          const worksheet = XLSX.utils.json_to_sheet(exportData);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');

          const date = new Date().toISOString().split('T')[0];
          XLSX.writeFile(workbook, `users_${date}.xlsx`);
        }
      } else if (activeTab === 'quiz') {
        let url = `/api/quiz?page=1&limit=10000`;
        if (debouncedSearchQuery) {
          url += `&playlist_id=${encodeURIComponent(debouncedSearchQuery)}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (data.success && data.data) {
          const exportData = data.data.map((quiz: QuizResult) => ({
            'ID': quiz.id,
            'Question 1': quiz.question1,
            'Question 2': quiz.question2,
            'Question 3': quiz.question3,
            'Question 4': quiz.question4,
            'Playlist ID': quiz.playlist_id,
            'IP Address': quiz.ip_address || 'N/A',
            'Date': formatDateForExcel(quiz.created_at)
          }));

          const worksheet = XLSX.utils.json_to_sheet(exportData);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Quiz Results');

          const date = new Date().toISOString().split('T')[0];
          const filename = debouncedSearchQuery
            ? `quiz_results_${debouncedSearchQuery}_${date}.xlsx`
            : `quiz_results_${date}.xlsx`;
          XLSX.writeFile(workbook, filename);
        }
      } else if (activeTab === 'playlists') {
        const response = await fetch(`/api/playlist?page=1&limit=10000`);
        const data = await response.json();

        if (data.success && data.data) {
          const exportData = data.data.map((playlist: Playlist) => ({
            'ID': playlist.id,
            'Title': playlist.title,
            'Songs Count': playlist.songs.length,
            'Created Date': playlist.created_at ? formatDateForExcel(playlist.created_at) : 'N/A'
          }));

          const worksheet = XLSX.utils.json_to_sheet(exportData);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Playlists');

          const date = new Date().toISOString().split('T')[0];
          XLSX.writeFile(workbook, `playlists_${date}.xlsx`);
        }
      }
    } catch (error) {
      console.error('Export failed:', error);
      alert('Failed to export data. Please try again.');
    }
  };

  return (
    <div className="dashboard-content skeleton-fade-in">
      <div className="admin-header-box">
        <h2>Admin Dashboard</h2>
        <p>Manage users and monitor quiz engagement.</p>
      </div>

      <div className="admin-dashboard-actions">
        <div className="admin-tabs">
          <button
            className={`admin-tab-btn ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => handleTabChange('users')}
          >
            Users
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
            onClick={() => handleTabChange('quiz')}
          >
            Quiz Results
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'playlists' ? 'active' : ''}`}
            onClick={() => handleTabChange('playlists')}
          >
            Playlists
          </button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {activeTab === 'quiz' && (
            <div className="admin-search-wrapper">
              <input
                type="text"
                placeholder="Search by Playlist ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="admin-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="admin-search-clear"
                >
                  ×
                </button>
              )}
            </div>
          )}

          {activeTab === 'playlists' && (
            <button
              onClick={() => setAddPlaylistModal(true)}
              className="admin-export-btn"
              style={{ backgroundColor: '#10b981', borderColor: '#10b981' }}
              title="Add New Playlist"
            >
              + Add Playlist
            </button>
          )}

          {activeTab !== 'playlists' && (
            <button
              onClick={exportToExcel}
              disabled={loading || (activeTab === 'users' ? users.length === 0 : quizzes.length === 0)}
              className="admin-export-btn"
              title={`Export ${activeTab === 'users' ? 'Users' : 'Quiz Results'} to Excel`}
            >
              Export to Excel
            </button>
          )}
        </div>
      </div>
      
      {loading ? (
        <div className="admin-table-wrapper">
          <div className="skeleton-table">
            <div className="skeleton-header skeleton-shimmer"></div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="skeleton-row skeleton-shimmer"></div>
            ))}
          </div>
        </div>
      ) : error ? (
        <div className="admin-error-state">
          <p className="admin-error-text">{error}</p>
        </div>
      ) : (
        <div className="admin-table-wrapper">
          {activeTab === 'users' && (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email Address</th>
                  <th>IP Address</th>
                  <th>Join Date</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="admin-table-row">
                    <td className="admin-id-col">#{user.id}</td>
                    <td className="admin-email-col">{user.email}</td>
                    <td className="admin-date-col">{user.ip_address || 'N/A'}</td>
                    <td className="admin-date-col">
                      {formatDate(user.created_at)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'quiz' && (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Q1</th>
                  <th>Q2</th>
                  <th>Q3</th>
                  <th>Q4</th>
                  <th>Playlist</th>
                  <th>IP Address</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {quizzes.map((quiz) => (
                  <tr key={quiz.id} className="admin-table-row">
                    <td className="admin-id-col">#{quiz.id}</td>
                    <td>{quiz.question1}</td>
                    <td>{quiz.question2}</td>
                    <td>{quiz.question3}</td>
                    <td>{quiz.question4}</td>
                    <td>{quiz.playlist_id}</td>
                    <td className="admin-date-col">{quiz.ip_address || 'N/A'}</td>
                    <td className="admin-date-col">
                      {formatDate(quiz.created_at)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'playlists' && (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Songs</th>
                  <th>Created Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {playlists.map((playlist) => (
                  <tr key={playlist.id} className="admin-table-row">
                    <td className="admin-id-col">#{playlist.id}</td>
                    <td className="admin-email-col">{playlist.title}</td>
                    <td className="admin-date-col">{playlist.songs.length}</td>
                    <td className="admin-date-col">
                      {playlist.created_at ? formatDate(playlist.created_at) : 'N/A'}
                    </td>
                    <td className="admin-actions-col">
                      <button
                        onClick={() => setViewPlaylistModal(playlist)}
                        className="admin-action-btn view-btn"
                        title="View Playlist"
                      >
                        View
                      </button>
                      <button
                        onClick={() => setEditPlaylistModal(playlist)}
                        className="admin-action-btn edit-btn"
                        title="Edit Playlist"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setDeletePlaylistId(playlist.id)}
                        className="admin-action-btn delete-btn"
                        title="Delete Playlist"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {((activeTab === 'users' && users.length === 0) ||
            (activeTab === 'quiz' && quizzes.length === 0) ||
            (activeTab === 'playlists' && playlists.length === 0)) && (
            <div className="admin-empty-state">
              <p>No results found.</p>
            </div>
          )}
        </div>
      )}

      {pagination && pagination.totalPages > 1 && (
        <div className="admin-pagination">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || loading}
            className="pagination-btn"
          >
            Previous
          </button>
          
          <div className="pagination-numbers">
            {Array.from({ length: Math.min(pagination.totalPages, 7) }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                disabled={loading}
                className={`pagination-number ${currentPage === pageNum ? 'active' : ''}`}
              >
                {pageNum}
              </button>
            ))}
            {pagination.totalPages > 7 && <span className="pagination-ellipsis">...</span>}
          </div>

          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pagination.totalPages || loading}
            className="pagination-btn"
          >
            Next
          </button>
        </div>
      )}

      <ViewPlaylistModal 
        playlist={viewPlaylistModal} 
        onClose={() => setViewPlaylistModal(null)} 
      />

      {addPlaylistModal && (
        <AddPlaylistModal
          onSave={handleAddPlaylist}
          onClose={() => setAddPlaylistModal(false)}
          isLoading={isCreating}
        />
      )}

      {editPlaylistModal && (
        <EditPlaylistModal
          playlist={editPlaylistModal}
          onSave={handleUpdatePlaylist}
          onClose={() => setEditPlaylistModal(null)}
          isLoading={isUpdating}
        />
      )}

      <DeleteConfirmModal 
        playlistId={deletePlaylistId}
        onConfirm={handleDeletePlaylist}
        onClose={() => setDeletePlaylistId(null)}
        isLoading={isDeleting}
      />

      {toast && (
        <div className={`admin-toast ${toast.type === 'success' ? 'admin-toast-success' : 'admin-toast-error'}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}

