import React from "react";
/* Styles */
import "./LandingView.css";

const LandingView = () => {
  // scroll to next section
  const handleScrollToView = () => {
    /* alt+f relation: scroll to view */
    // 1.04 === 4vh
    window.scrollTo(0, window.innerHeight * 1.04);
  };

  return (
    <div className="LandingView__main-container index__no-select-on-drag">
      <div onClick={handleScrollToView} className="LandingView__logo-container">
        <img
          className="LandingView__logo"
          src="/portfolio_2.0_assets/images/myLogo.png"
          alt="Adrian Faustino logo"
        />
      </div>
    </div>
  );
};

export default LandingView;
