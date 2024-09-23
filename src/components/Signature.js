import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const Signature = () => {
  return (
    <>
      <div className="signature">
        <StaticImage
          src="../images/signature.png"
          alt="James Karnes"
          className="signature__image"
        />
      </div>
    </>
  );
};

export default Signature;
