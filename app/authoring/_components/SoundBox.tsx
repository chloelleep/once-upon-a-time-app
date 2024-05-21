import React from 'react';

interface SoundToolboxDialogProps {
  sounds: { soundUrl: string }[];
  onSelectSound: (sound: string) => void;
}

const SoundToolboxDialog: React.FC<SoundToolboxDialogProps> = ({ sounds, onSelectSound }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {sounds.map((sound, index) => (
        <button
          key={index}
          onClick={() => onSelectSound(sound.soundUrl)}
          style={{ marginBottom: '10px', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
        >
          Sound {index + 1}
        </button>
      ))}
    </div>
  );
};

export default SoundToolboxDialog;
