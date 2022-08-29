import { useState } from "react";

import "./ShareAction.css";

import { ReactComponent as Facebook } from "./images/icon-facebook.svg";
import { ReactComponent as Twitter } from "./images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "./images/icon-pinterest.svg";
import MobileAction from "./MobileAction";

export default function ShareAction({screenSize}) {
  const [isMobile, setIsMobile] = useState(false);

  if (screenSize <= 1260) {
    setIsMobile(true);
  }

  return (
    <>
      {!isMobile && (
        <div className="share__action">
          <p className="share__action--text">Share</p>
          <button className="share__action--fb">
            <Facebook />
          </button>
          <button className="share__action--tw">
            <Twitter />
          </button>
          <button className="share__action--pt">
            <Pinterest />
          </button>
        </div>
      )}
      {isMobile && <MobileAction />}
    </>
  );
}
