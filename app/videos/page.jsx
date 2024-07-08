// app/video/page.js
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const VideoPage = () => {
  const router = useRouter();
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('url');
    if (url) {
      setVideoUrl(url);
    }
  }, []);

  return (
    <div>
      <h1>Video Page</h1>
      {videoUrl ? (
        <video controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default VideoPage;
