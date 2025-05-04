import React from "react";
import { ReactComponent as CloseIcon } from "../../../assets/x.svg";
import "./Top.css";

const Top = () => {
  return (
    <div className="top">
      <div className="content">
        <p>
          Sign up and get 20% off to your first order.{" "}
          <span id="top-tag">
            <a href="/">Sign Up Now</a>
          </span>
        </p>
        <div id="top-quit-symbol">
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export default Top;
