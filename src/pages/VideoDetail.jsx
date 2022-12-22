import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function VideoDetail() {

  const { videoId } = useParams();
  const { state: { video } } = useLocation();

  return (
    <div>
      VideoDetail: {videoId}
      <iframe type="text/html" width="100%" height="400px"
        title="youtube video player"
        src="https://www.youtube.com/embed/"
        frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}