import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail({ video }) {
  // const { videoId } = useParams();
  return (
    // <div>VideoDetail : {videoId}</div>
    <div>
      <img src={video.snippet.thumbnails.high.url}></img>
      <h3>{video.snippet.title}</h3>
      <h5>{video.snippet.channelTitle}</h5>
      <h5>{video.snippet.publishedAt}</h5>
    </div>
  );
}