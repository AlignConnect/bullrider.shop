// components/VideoPlayer.js

import React, { useState } from 'react';

const VideoPlayer = ({ videoId, thumbnail }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        setIsPlaying(true);
    };

    return (
        <div>
            {isPlaying ? (
                <iframe
                    width="100%"
                    height="500"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            ) : (
                <img
                    src={thumbnail}
                    alt="click to play youtube video"
                    style={{ cursor: 'pointer', width: "100%" }}
                    onClick={handleClick}
                    className='py-7'
                />
            )}
        </div>
    );
};

export default VideoPlayer;
