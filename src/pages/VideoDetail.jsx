import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {

  const { state: { video } } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section>
      <article>
        <iframe type="text/html" width="100%" height="400px"
          title="youtube video player"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0" allowFullScreen></iframe>
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle}></ChannelInfo>
          <pre>{description}</pre>
        </div>
      </article>
      <section>
        <RelatedVideos id={video.id}></RelatedVideos>
      </section>
    </section>

  )
}