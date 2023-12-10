import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);
  return (
    <section id="contact" className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            {message ? (
              <h2>Thank you for your message!</h2>
            ) : (
              <h2>Contact us</h2>
            )}
            <div className="u-margin-bottom-medium">
              {message ? (
                <h2 className="heading-secondary">
                  Thank you for your message!
                </h2>
              ) : (
                <h2 className="heading-secondary">Contact us</h2>
              )}
            </div>
            <form
              name="contact"
              method="POST"
              action="/"
              data-netlify="true"
              className="form"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form__group">
                <input
                  name="name"
                  type="text"
                  className="form__input"
                  placeholder="Full Name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>

              <div className="form__group">
                <input
                  id="email"
                  name="email"
                  className="form__input"
                  placeholder="Email address"
                  type="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>

              <div className="form__group">
                <textarea
                  id="message"
                  name="message"
                  className="form__input"
                  placeholder="Send us a message"
                  required
                />
                <label htmlFor="message" className="form__label">
                  Send us a message
                </label>
              </div>

              <div className="form__group">
                <select
                  name="tourSelect"
                  id="tourSelect"
                  className="form__input"
                >
                  <option value="2 Night">Two Night Tour</option>
                  <option value="3 Night">Three Night Tour</option>
                </select>
              </div>
              <div className="form__group form__button">
                <button
                  type="submit"
                  className="btn btn--green"
                  onClick={() => setMessage(true)}
                >
                  Next step &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
