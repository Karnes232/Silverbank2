import React from "react";
import image4 from "../images/image4.webp";
import image7 from "../images/image7.webp";

const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img
            srcSet={image4}
            sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
            alt="Whale Watching"
            className="popup__img"
            src={image4}
          />
          <img
            srcSet={image7}
            sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
            alt="Whale Watching"
            className="popup__img"
            src={image7}
          />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary popup__right-heading">
            Start booking now
          </h2>

          <p className="popup__text">
            We will board in the late afternoon, departing the dock around 6pm.
            Dinner will be provided on board, introductions to staff and other
            guests. Staff will provide a brief safety orientation.
          </p>

          <p className="popup__text">
            Early in the morning we will be arriving at the Silver Bank in hopes
            to catch the sunrise with the humpback whales welcoming us.
            Breakfast will be provided, and then what everyone has been waiting
            for our first trip in the tender boat to be able to see the whales
            up close and personal. Lunch will be served on the boat, and again
            we will have the tender boat make another trip out to swim with the
            whales for the afternoon.{" "}
          </p>

          <p className="popup__text">
            After Dinner is served we will cruise throughout the night to arrive
            in the morning at Sousa.
          </p>

          <a href="#contact" className="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
