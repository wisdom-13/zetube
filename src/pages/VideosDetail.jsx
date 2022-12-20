import React from 'react';
import { formatAgo } from '../util/date';


export default function VideoDetail({ video }) {

  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li>
      <img className='w-full' src={thumbnails.medium.url}></img>
      <p>
        <h3 className='font-semibold my-2 line-clamp-2'>{title}</h3>
        <h5 className='text-sm opacity-80'>{channelTitle}</h5>
        <h5 className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</h5>
      </p>
    </li>
  );
}