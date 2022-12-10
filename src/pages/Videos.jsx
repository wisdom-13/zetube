import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoDetail from './VideosDetail';
import axios from 'axios';

export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data: videos } = useQuery(
    ['videos', keyword], async () => {
      return axios
        .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
        .then((res) => res.data.items)
    });
  return (
    <>
      {/* <h3>검색어 : {keyword}</h3>

      <Link to='/videos/watch/jfweoifjwoefj'>
        Vidoes1
      </Link>
      <br></br>
      <Link to='/videos/watch/fewfwfwef'>
        Vidoes2
      </Link> */}

      {isLoading && <p>Loading...</p>}
      {error && <p>error</p>}
      {videos && <ul>
        {videos.map(video => <VideoDetail key={video.id} video={video} />)}
      </ul>}
    </>
  );
}