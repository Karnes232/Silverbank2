import React from "react"
import video from "../images/grandbay.mp4"

const TravelInfoVideo = () => {
  return (
    <section class="section-travel-info u-margin-bottom-medium" id="tours">
      <div class="bg-video">
        <video
          className="bg-video__content"
          autoPlay
          muted
          loop
          playsInline
          src={video}
        >
          <source src={video} type="video/mp4" />
          Your device does not support playing 'video/mp4' videos
        </video>
      </div>
    </section>
  )
}

export default TravelInfoVideo
