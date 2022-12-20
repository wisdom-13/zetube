import React from 'react';
import { Link } from 'react-router-dom';
import { formatAgo } from '../util/date';


export default function VideosCard({ video }) {

  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const link = `/videos/watch/${video.id}`

  return (
    <Link to={link}>
      <li>
        <img className='w-full' src={thumbnails.medium.url}></img>
        <p>
          <h3 className='font-semibold my-2 line-clamp-2'>{title}</h3>
          <h5 className='text-sm opacity-80'>{channelTitle} / </h5>
          <h5 className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</h5>
        </p>
      </li>
    </Link>
  );
}