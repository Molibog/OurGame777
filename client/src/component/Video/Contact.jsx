import React from 'react';
import VideoPlayer from './VideoPlayer';

function Contact() {
  const videoUrl = '../../public/Elbrus.mp4';

  return (
    <div>
      <h1 className="shadow p-3 mb-5 bg-body-tertiary rounded"> Схема проезда</h1>
      <h2 className="text-shadow">Фактический адрес: г.Урюпинск, пр. Лиговский д.140</h2>
      <VideoPlayer videoUrl={videoUrl} />
    </div>
  );
}

export default Contact;
