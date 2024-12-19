import React from "react";

interface ModalProps {
    isOpen: boolean;
    message: string;
    buttons: {
        label: string;
        onClick: () => void;
    }[];
    onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, message, buttons, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
            <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
                <h3 id="modal-title" className="text-lg font-semibold">
                    {message}
                </h3>
                <div className="mt-4 flex justify-between">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className="rounded-md bg-blue-500 px-4 py-2 text-white"
                            onClick={() => {
                                button.onClick();
                                if (onClose) onClose();
                            }}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;
