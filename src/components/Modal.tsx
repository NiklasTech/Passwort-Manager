import React, { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  if (!isOpen && !isClosing) return null;

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md transition-opacity duration-300 z-50 ${
        isClosing ? "animate-fadeOut" : "animate-fadeIn"
      }`}
      onClick={closeModal}
    >
      <div
        className={`bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl w-96 transition-all transform ${
          isClosing ? "animate-modalOut" : "animate-modalIn"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header ohne ❌ */}
        {title && (
          <h2 className="text-lg font-semibold text-gray-900 text-center">
            {title}
          </h2>
        )}

        {/* Inhalt */}
        <div className="text-gray-700">{children}</div>

        {/* Footer */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={closeModal}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
