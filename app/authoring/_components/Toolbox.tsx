import React, { useState } from 'react';

interface ImageToolboxDialogProps {
  images: { imageUrl: string, soundUrl: string }[];
  open: boolean;
  onClose: () => void;
  onSelectImage: (image: string) => void;
}

type ImageDataType = {
  imageUrl: string,
  soundUrl: string
}

const ImageToolboxDialog: React.FC<ImageToolboxDialogProps> = ({ images, open, onClose, onSelectImage }) => {
  const [selectedImage, setSelectedImage] = useState<ImageDataType | undefined>(undefined);
  const [imagePosition, setImagePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleSelectImageInternal = (image: { imageUrl: string, soundUrl: string }) => {
    setSelectedImage(image);
    onSelectImage(image.imageUrl);
  };

  const handleSelectedImageHover = () => {
    // Play the associated sound
    console.log("Playing audio....");
    // TODO: change to dynamic audio
    // const audio = new Audio(selectedImage.soundUrl);
    const audio = new Audio('https://cdn.pixabay.com/audio/2022/03/10/audio_5adfa08633.mp3');
    audio.play();
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setIsDragging(true);
    const { clientX, clientY } = e;
    setImagePosition({ x: clientX, y: clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging) {
      const { clientX, clientY } = e;
      setImagePosition({ x: clientX, y: clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        display: open ? 'block' : 'none',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'black',
        padding: '20px',
        borderRadius: '15px',
        zIndex: 1000,
      }}
    >
      <div
        className="image-toolbox-dialog"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="image-container" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.imageUrl}
              alt={`img-${index}`}
              className="image-thumbnail"
              style={{ width: '100px', cursor: 'pointer', borderRadius: '10px' }}
              onClick={() => handleSelectImageInternal(image)}
              onMouseDown={handleMouseDown}
            />
          ))}
        </div>
        <button onClick={onClose} style={{ marginTop: '10px', padding: '5px 10px', borderRadius: '5px', display: 'block', color: 'white' }}>
          Close
        </button>
      </div>
      {selectedImage && (
        <div>
          <h3 style={{ color: 'white' }}>Selected Image:</h3>
          <img src={selectedImage.imageUrl} alt="Selected" style={{ width: '150px', borderRadius: '10px' }} onMouseEnter={() => handleSelectedImageHover()}/>
        </div>
      )}
    </div>
  );
};

export default ImageToolboxDialog;
