import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail({ video }) {
  // const { videoId } = useParams();
  return (
    // <div>VideoDetail : {videoId}</div>
    <div>{video.snippet.title}</div>
  );
}