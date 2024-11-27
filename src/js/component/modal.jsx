import React from "react";

export const Modal = ({ show, title, message, onConfirm, onCancel }) => {
    if (!show) return null; // Si `show` es falso, no renderiza el modal

    return (
        <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">{title}</h1>
                        <button 
                            type="button" 
                            className="btn-close" 
                            onClick={onCancel} 
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        {message}
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick={onConfirm}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
