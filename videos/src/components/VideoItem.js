import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div className="video-item">
      <img src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
