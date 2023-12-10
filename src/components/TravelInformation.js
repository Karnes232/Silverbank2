import React from "react";
import Composition from "./Composition";
import image1 from "../images/image1-desk.webp";
import image2 from "../images/image2-desk.webp";
import image3 from "../images/image3-desk.webp";
import image4 from "../images/image4-desk.webp";
import image5 from "../images/image5-desk.webp";
import image6 from "../images/image6-desk.webp";
import docIcon from "../images/icons8-papers-64.png";

const TravelInformation = () => {
  return (
    <section className="section-info">
      <div className="u-center-text u-margin-bottom-medium">
        <h2 className="heading-secondary">Travel Information</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Getting There
          </h3>
          <p className="paragraph">
            The closest airport to where we will arrive and disembark in Sosua,
            Dominican Republic, is Puerto Plata. You may also consider taking a
            flight into Santiago, Dominican Republic. A current passport that is
            also valid for the whole length of your stay is required for travel.
            Non-citizens of the United States or Canada should check to see
            whether they require any other documents in addition to a current
            passport in order to enter the Dominican Republic.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            What to Bring
          </h3>
          <p className="paragraph">
            For your comfort during the trip, we highly recommend bringing a
            mask, fins, snorkel, and a light wetsuit to stay warm in the water,
            as the average temperature is around 78 degrees. Additionally, a
            sweatshirt or light rain jacket may be useful for cooler evenings or
            potential rain, though most of the time will be spent in swimwear or
            light casual clothing. Don't forget to pack plenty of sunscreen and
            seasickness medication, just in case of rough seas.{" "}
            <i>
              It's important to note that drones are not allowed on the Silver
              Bank.
            </i>
          </p>
        </div>
        <div className="col-1-of-2 margin-top-15">
          <Composition image1={image1} image2={image2} image3={image3} />
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <Composition image1={image4} image2={image5} image3={image6} />
        </div>
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Is there Wi-Fi or a cell signal on the boat?
          </h3>
          <p className="paragraph">
            Once the boat leaves Sosua, there will not be any Wi-Fi or cell
            signal until the boat returns to Sosua.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Travel Insurance?
          </h3>
          <p className="paragraph">
            It is strongly advised that you obtain trip cancellation insurance.
            We strongly recommend purchasing travel insurance shortly after
            booking, as Grand Bay of the Sea cannot be held responsible for any
            financial losses resulting from circumstances beyond our control.
            These circumstances may include, but are not limited to, severe
            weather conditions, natural disasters, changes made by local
            authorities, or disruptions related to Covid-19.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Terms and Conditions
          </h3>
          <p className="paragraph">
            To confirm a reservation, a deposit of 50% of the full payment is
            required, which is non-refundable. Payment in full must be made 90
            days prior to the departure date. If payments are not received at
            the designated times, Grand Bay of the Sea reserves the right to
            cancel the reservation and all monies paid will be forfeited. It is
            highly recommended that trip cancellation insurance is purchased.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Required Forms
          </h3>
          <div className="forms">
            <p className="paragraph">
              <a
                className="dropboxLink"
                href="https://www.dropbox.com/s/k3napi4eu7naqa7/silverBankLiability.pdf?dl=0"
                target="_blank"
              >
                <div className="form">
                  <p className="form__title">Liability Release</p>
                  <img className="form__icon" src={docIcon} alt="" />
                </div>
              </a>
            </p>
            <p className="paragraph">
              <a
                className="dropboxLink"
                href="https://www.dropbox.com/s/gws9gvx7g82r029/SilverBankInformation.pdf?dl=0"
                target="_blank"
              >
                <div className="form">
                  <p className="form__title">Silver Bank Information</p>
                  <img className="form__icon" src={docIcon} alt="" />
                </div>
              </a>
            </p>
          </div>
        </div>
        <div className="col-1-of-2 margin-top-15">
          <Composition image1={image1} image2={image2} image3={image3} />
        </div>
      </div>
    </section>
  );
};

export default TravelInformation;
