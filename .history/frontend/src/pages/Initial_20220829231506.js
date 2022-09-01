import React from "react";

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
        <source src={} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default Initial;
