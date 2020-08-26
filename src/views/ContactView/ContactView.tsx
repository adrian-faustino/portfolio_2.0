import React from "react";
/* Styles */
import "./ContactView.css";
/* Constants */
import { LOCATION, EMAIL, MOBILE_NUMBER } from "../../db/myAboutMe";
/* npm */
import CopyToClipboard from "react-copy-to-clipboard";

const ContactView = () => {
  return (
    <section className="ContactView__main-wrapper">
      <h2 className="ContactView__section-title section-title">Contact</h2>

      <address className="ContactView__info-container">
        {/* location */}
        <a
          className="text-basic hover-white-bg"
          href="https://www.google.com/maps/place/Toronto,+ON/@43.7181557,-79.5181423,11z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843"
          target="_tab"
          rel="noopener noreferrer"
        >
          <img
            src="portfolio_2.0_assets/icons/location.png"
            alt="location logo"
          />
          <span>{LOCATION}</span>
        </a>

        {/* email */}
        <a
          className="text-basic hover-white-bg"
          href={`mailto:${EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="portfolio_2.0_assets/icons/email.png" alt="email logo" />
          <span>{EMAIL}</span>
        </a>

        {/* mobile number */}
        <CopyToClipboard text={MOBILE_NUMBER}>
          <div className="hover-white-bg cursor-pointer ContactView__clipboard-area">
            <img
              src="portfolio_2.0_assets/icons/mobile_phone.png"
              alt="mobile phone logo"
            />
            <span>
              {MOBILE_NUMBER}{" "}
              <span className="ContactView__copy-clipboard-txt">
                Copy to clipboard
              </span>
            </span>
          </div>
        </CopyToClipboard>
      </address>
    </section>
  );
};

export default ContactView;
