import React from 'react';

interface DeleteConfirmModalProps {
  playlistId: string | null;
  onConfirm: () => void;
  onClose: () => void;
  isLoading: boolean;
}

export default function DeleteConfirmModal({ playlistId, onConfirm, onClose, isLoading }: DeleteConfirmModalProps) {
  if (!playlistId) return null;

  return (
    <div className="admin-modal-overlay" onClick={!isLoading ? onClose : undefined}>
      <div className="admin-modal admin-modal-small" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-header">
          <h3>Confirm Delete</h3>
          <button onClick={onClose} className="admin-modal-close" disabled={isLoading}>×</button>
        </div>
        <div className="admin-modal-body">
          <p>Are you sure you want to delete this playlist? This action cannot be undone.</p>
        </div>
        <div className="admin-modal-footer">
          <button onClick={onClose} className="admin-modal-btn cancel-btn" disabled={isLoading}>
            Cancel
          </button>
          <button onClick={onConfirm} className="admin-modal-btn delete-btn" disabled={isLoading}>
            {isLoading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}
