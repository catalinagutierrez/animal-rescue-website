import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? ".inverted" : ""} ${
      isGoogleSignIn ? "wd-google-sign-in" : ""
    } wd-custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
