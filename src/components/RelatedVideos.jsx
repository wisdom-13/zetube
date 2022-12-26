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
        <ul>
          {videos.map(video => <VideosCard key={video.id} video={video} type='list' />)}
        </ul>
      )}
    </>
  );
}