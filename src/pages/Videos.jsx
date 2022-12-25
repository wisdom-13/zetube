import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideosCard from '../components/VideosCard';
// import { search } from '../api/youtube';
// import FakeYoutube from '../api/fakeYoutubeClient';
// import Youtube from '../api/youtube';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const { isLoading, error, data: videos } = useQuery(
    ['videos', keyword], () => youtube.search(keyword));
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