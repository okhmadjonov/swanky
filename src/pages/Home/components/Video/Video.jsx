import React from "react";
import "./video.scss";
import { GrPlayFill } from "react-icons/gr";
import { useRef, useState } from "react";
import home_video from "../../../../assets/images/Video/home_video.mp4";
const Video = () => {
  const [isplay, setisplay] = useState(false);
  const audioRef = useRef(null);
  const handleClick = () => {
    audioRef.current.play();
  };

  return (
    <div className="video__player">
      <div className="video__container">
        <div className="videoBlock">
          <video
            ref={audioRef}
            controls={isplay}
            onPlay={() => setisplay((prev) => true)}
            onPause={() => setisplay((prev) => false)}
            className="video"
            src={home_video}></video>
          {!isplay && (
            <div className="playVideoWrapper" onClick={handleClick}>
              <div className="playVideoCircle"></div>
              <GrPlayFill className="playVideoBtn" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
