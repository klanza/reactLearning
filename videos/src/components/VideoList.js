import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  console.log(videos);
  const renderedList = videos.map(video => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });
  return (
    <div className="video-list ui relaxed divided list">{renderedList}</div>
  );
};

export default VideoList;
