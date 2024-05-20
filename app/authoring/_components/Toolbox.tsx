import React, { useState, useEffect } from 'react';

interface ImageToolboxDialogProps {
  images: { imageUrl: string; soundUrl: string }[];
  open: boolean;
  onClose: () => void;
  onSelectImage: (image: string) => void;
}

const ImageToolboxDialog: React.FC<ImageToolboxDialogProps> = ({ images, open, onClose, onSelectImage }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedSound, setSelectedSound] = useState<HTMLAudioElement | null>(null);

  const handleSelectImageInternal = (image: { imageUrl: string; soundUrl: string }) => {
    setSelectedImage(image.imageUrl);
    onSelectImage(image.imageUrl);
    setSelectedSound(new Audio(image.soundUrl));
    onClose(); // Close the dialog after selecting an image
  };

  const playSound = () => {
    if (selectedSound) {
      selectedSound.play();
    }
  };

  const handleMouseEnter = () => {
    if (selectedSound) {
      selectedSound.play();
    }
  };

  const handleMouseLeave = () => {
    if (selectedSound) {
      selectedSound.pause();
      selectedSound.currentTime = 0; // Reset sound to start
    }
  };

  useEffect(() => {
    if (selectedSound) {
      selectedSound.addEventListener('ended', () => {
        setSelectedSound(null); // Reset selected sound when it ends
        selectedSound.currentTime = 0; // Reset sound to start
      });
    }

    return () => {
      if (selectedSound) {
        selectedSound.removeEventListener('ended', () => setSelectedSound(null)); // Clean up event listener
        selectedSound.pause(); // Pause the sound when the component unmounts
      }
    };
  }, [selectedSound]);

  return (
    <div style={{ display: open ? 'block' : 'none' }}>
      <div className="image-toolbox-dialog">
        <div className="image-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.imageUrl}
              alt={`img-${index}`}
              className="image-thumbnail"
              style={{ width: '100px', cursor: 'pointer' }}
              onClick={() => handleSelectImageInternal(image)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
      {selectedImage && (
        <div>
          <h3>Selected Image:</h3>
          <img src={selectedImage} alt="Selected" style={{ width: '150px' }} />
          <button onClick={playSound}>Play Sound</button>
        </div>
      )}
    </div>
  );
};

export default ImageToolboxDialog;

