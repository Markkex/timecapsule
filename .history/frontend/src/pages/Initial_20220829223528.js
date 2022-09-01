import React from "react";
import Video from "../assets/videos/160929_160_London_LondonEyeTimeLapseNight_1080p.mp4";

const Initial = () => {
  return (
    <div className="initial">
      <video
        autoPlay={true}
        loop={true}
        controls={false}
        playsInline
        muted
        id="myVideo"
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default Initial;
