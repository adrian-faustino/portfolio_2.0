import React from "react";
/* Constants */
import { LOCATION, EMAIL, MOBILE_NUMBER } from "../../db/myAboutMe";

const ContactView = () => {
  return (
    <div>
      {/* location */}
      <div>
        <span>{LOCATION}</span>
      </div>

      {/* email */}
      <div>
        <span>{EMAIL}</span>
      </div>

      {/* mobile number */}
      <div>
        <span>{MOBILE_NUMBER}</span>
      </div>
    </div>
  );
};

export default ContactView;
