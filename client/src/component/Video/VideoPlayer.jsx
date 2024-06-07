import React from 'react';

function VideoPlayer({ videoUrl }) {
  return (
    <div>
      <video controls style={{ width: '400px' }}>
        <source src={videoUrl} type="video/mp4" />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
    </div>
  );
}

export default VideoPlayer;
