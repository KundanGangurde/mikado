"use client";
import React, { useState, useRef, useEffect } from "react";

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener("loadeddata", () => {
      video.play(); // play the video once it's loaded
    });
  }, [videoRef]);

  const handleMouseOver = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handleMouseOut = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  return (
    <video
      src={src}
      muted
      loop
      ref={videoRef}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        position: "relative",
        width: "20%",
        marginLeft: "20px",
        clipPath: "url(#svgPath01)",
        zIndex: -1,
      }}
    />
  );
};

function Header() {
  return (
    <>
      <div>
        <VideoPlayer src="https://videos.ctfassets.net/9uhkiji6mhey/5aPyBNQQ3mGEpUwoYagcWF/3fd91496cde7c0310f098657e02a6dbb/Thumbnail_-_Video_-_Portrait_-_Big-NEW.mp4" />
      </div>
      <h1> Video Description</h1>
      <div>
        <VideoPlayer src="https://videos.ctfassets.net/9uhkiji6mhey/7pAXlJdKv3hvY4OAf5YWzz/7f0fa564c5a37c44b6551f786b15e1c3/3_____Portrait_-_Big.mp4" />
      </div>
      <h1> Video Description</h1>
    </>
  );
}

export default Header;
