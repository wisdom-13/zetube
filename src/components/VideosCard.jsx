import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';


export default function VideosCard({ video, type }) {

  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  const navigate = useNavigate();
  const link = `/videos/watch/${video.id}`
  const isList = type === 'list';

  return (
    <li
      className={isList ? 'flex gap-1 p-2' : ''}
      onClick={() => navigate(link, { state: { video } })}>
      <img className={isList ? 'w-60 mr-2' : 'w-full'} alt='{title}' src={thumbnails.medium.url}></img>
      <div>
        <h3 className='font-semibold my-2 line-clamp-2'>{title}</h3>
        <h5 className='text-sm opacity-80'>{channelTitle} / </h5>
        <h5 className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</h5>
      </div>
    </li>
  );
}