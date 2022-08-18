import "./MobileAction.css"

///SVG FILES
import { ReactComponent as UserShare } from "./images/icon-share.svg";

import { ReactComponent as Facebook } from "./images/icon-facebook.svg";
import { ReactComponent as Twitter } from "./images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "./images/icon-pinterest.svg";

export default function MobileAction() {
  return (
    <div className="mobile__action">
      <p className="mobile__action--text">Share</p>
      <button className="mobile__action--fb">
        <Facebook />
      </button>
      <button className="mobile__action--tw">
        <Twitter />
      </button>
      <button className="mobile__action--pt">
        <Pinterest />
      </button>
      <button id="mblShr" className="mobile__action--share">
        <UserShare />
      </button>
    </div>
  );
}
