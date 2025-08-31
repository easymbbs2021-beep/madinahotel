
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import ImageModal from '../components/ImageModal';

const GalleryPage: React.FC = () => {
    const [modalImage, setModalImage] = useState<{ src: string, alt: string } | null>(null);

    const openModal = (image: { src: string, alt: string }) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-display text-white">Our Gallery</h1>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">A glimpse into the world of Madina Hotel—from our kitchen to your plate, and the ambiance that brings it all together.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {GALLERY_IMAGES.map((image) => (
                    <div 
                        key={image.id} 
                        className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg shadow-black/30"
                        onClick={() => openModal({ src: image.src, alt: image.alt })}
                    >
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                            <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{image.alt}</p>
                        </div>
                    </div>
                ))}
            </div>

            {modalImage && (
                <ImageModal 
                    isOpen={!!modalImage} 
                    onClose={closeModal} 
                    imageUrl={modalImage.src}
                    altText={modalImage.alt}
                />
            )}
        </div>
    );
};

export default GalleryPage;