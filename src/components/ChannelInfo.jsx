import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ id, name }) {

  const { youtube } = useYoutubeApi();
  const { error, isLoading, data: url } = useQuery(['channel', id], () => youtube.channelImageURL(id));

  return (
    <div>
      {url && <img src={url} alt={name}></img>}
      <p>{name}</p>
    </div>
  );
}