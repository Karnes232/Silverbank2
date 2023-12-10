import React, { useEffect, useState } from "react";
import video from "../images/grandbay.mp4";

import videoSmall from "../images/grandbay-small.mp4";

const Packages = () => {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <section className="section-package u-margin-bottom-medium" id="tours">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop playsInline>
          {width > 600 ? (
            <source src={video} type="video/mp4" />
          ) : (
            <source src={videoSmall} type="video/mp4" />
          )}
          Your device does not support playing 'video/mp4' videos
        </video>
      </div>
    </section>
  );
};

export default Packages;
