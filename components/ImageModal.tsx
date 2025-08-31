
import React from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, altText }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white text-4xl"
        onClick={onClose}
      >
        &times;
      </button>
      <div 
        className="relative max-w-4xl max-h-[90vh] bg-black"
        onClick={e => e.stopPropagation()} // Prevent closing modal when clicking on the image
      >
        <img src={imageUrl} alt={altText} className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default ImageModal;