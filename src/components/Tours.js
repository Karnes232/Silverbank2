import React from "react"

const Tours = () => {
  return (
    <section className="section-tours u-margin-bottom-big" id="section-tours">
      <div className="row">
        <div className="col-1-of-2">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>

              <div className="card__details">
                <ul>
                  <li>2 Nights</li>
                  <li>1 Full Day at the Silverbank</li>
                  <li>Drinks and Meals</li>
                </ul>
                <p className="card__details-text u-margin-bottom-small">
                  Each trip is an all-inclusive 2 night experience. You will
                  board the boat in Sosua, Dominican Republic.
                </p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$1250</p>
                  <p className="card__price-only">per person</p>
                  <p className="card__price-disclaimer">
                    {" "}
                    A $350 pp fuel surcharge & port expenses fee not included{" "}
                    <br />
                    in price are to be paid on board in cash.
                  </p>
                </div>

                <a href="#popup" className="btn btn--white">
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>

              <div className="card__details">
                <ul>
                  <li>3 Nights</li>
                  <li>2 Full Days at the Silverbank</li>
                  <li>Drinks and Meals</li>
                </ul>
                <p className="card__details-text u-margin-bottom-small">
                  Each trip is an all-inclusive 3 night experience. You will
                  board the boat in Sosua, Dominican Republic.
                </p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$1750</p>
                  <p className="card__price-only">per person</p>
                  <p className="card__price-disclaimer">
                    {" "}
                    A $400 pp fuel surcharge & port expenses fee not included{" "}
                    <br />
                    in price are to be paid on board in cash.
                  </p>
                </div>
                <a href="#popup" className="btn btn--white">
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tours
