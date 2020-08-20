import React from "react";
/* Constants */
import { LOCATION, EMAIL, MOBILE_NUMBER } from "../../db/myAboutMe";

const ContactView = () => {
  return (
    <div>
      <h2>Contact</h2>
      {/* location */}
      <div>
        <img src="portfolio_2.0_assets/icons/location.png" />
        <span>{LOCATION}</span>
      </div>

      {/* email */}
      <div>
        <img src="portfolio_2.0_assets/icons/email.png" />
        <span>{EMAIL}</span>
      </div>

      {/* mobile number */}
      <div>
        <img src="portfolio_2.0_assets/icons/mobile_phone.png" />
        <span>{MOBILE_NUMBER}</span>
      </div>
    </div>
  );
};

export default ContactView;
