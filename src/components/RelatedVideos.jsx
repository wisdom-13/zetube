import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideosCard from './VideosCard';

export default function RelatedVideos({ id }) {

  const { youtube } = useYoutubeApi();
  const { error, isLoading, data: videos } = useQuery(['related', id], () => youtube.relatedVideos(id));

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>error</p>}

      {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {videos.map(video => <VideosCard key={video.id} video={video} />)}
        </ul>
      )}
    </>
  );
}