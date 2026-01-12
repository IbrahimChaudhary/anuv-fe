'use client';

import { useState, useEffect } from 'react';

const VideoPlayerSecond
 = () => {
  const [videoExists, setVideoExists] = useState(false);

  useEffect(() => {
    // Check if video file exists in public folder
    fetch('/video/secondvideo.mp4', { method: 'HEAD' })
      .then((res) => {
        if (res.ok) setVideoExists(true);
      })
      .catch(() => setVideoExists(false));
  }, []);

  return (
    <>
      {videoExists ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
          style={{width: "100%", height: "100%"}}
        >
          <source src="/video/secondvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img className="top-img" src="/images/DSCF0273.JPG" alt="Banner" />
      )}
    </>
  );
};

export default VideoPlayerSecond;
