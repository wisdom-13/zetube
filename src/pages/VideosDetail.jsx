import React from 'react';
import { formatAgo } from '../util/date';


export default function VideoDetail({ video }) {

  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li>
      <img src={thumbnails.medium.url}></img>
      <p>
        <h3>{title}</h3>
        <h5>{channelTitle}</h5>
        <h5>{formatAgo(publishedAt, 'ko')}</h5>
      </p>
    </li>
  );
}