import React from "react";
import Composition from "./Composition";
import image1 from "../images/image1-desk.webp";
import image2 from "../images/image2-desk.webp";
import image3 from "../images/image3-desk.webp";
import image4 from "../images/image4-desk.webp";
import image5 from "../images/image5-desk.webp";
import image6 from "../images/image6-desk.webp";

const About = () => {
  return (
    <section id="about" className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">The chance of a lifetime.</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            The Silver Bank
          </h3>
          <p className="paragraph">
            Located approximately 90 kilometers north of the Dominican Republic
            is the Sanctuary for the Marine Mammals of the Dominican Republic.
            Every year between the months of January and April, the North
            Atlantic humpback whale comes to the waters of the Dominican
            Republic to court, mate and give birth. It has been estimated that
            over 3,000 pass through the Silver Bank each winter.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Well being able to see these beautiful mammals on the surface from
            the boat will thrill and excite every visitor, its the opportunity
            to swim next to them is such a rare chance that very few places in
            the world permit.
          </p>
        </div>
        <div className="col-1-of-2">
          <Composition image1={image1} image2={image2} image3={image3} />
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <Composition image1={image4} image2={image5} image3={image6} />
        </div>
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Snorkeling with humpback whales
          </h3>
          <p className="paragraph">
            The in water encounters with the humpback whales are always a
            passive approach. Well we are in the water we simply just float and
            watch, allowing the curiosity of the whale to bring them to us. We
            have to earn their trust and remember that we are just visitors.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            A chance to be face to face with a humpback whale
          </h3>
          <p className="paragraph">
            During the months of January through March, we make weekly trips to
            the Silver Bank. This area is legendary for its close in water
            encounters with the humpback whales. Swimming with whales is an
            activity for the whole family, it's a trip that will leave you
            talking about it for years to come.
          </p>

          <a href="#tours" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
