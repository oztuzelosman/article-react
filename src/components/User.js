import { useState, useEffect, useRef} from "react";

//Styles and SVGs
import "./User.css";
import { ReactComponent as UserShare } from "./images/icon-share.svg";

import ShareAction from "./ShareAction";
//import MobileAction from "./MobileAction";

export default function User() {
  const [showShare, setShowShare] = useState(false);
  const screenSize = useRef();

  const isClicked = () => {
    showShare ? setShowShare(false) : setShowShare(true)
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      screenSize.current = window.innerWidth;
    });
    return () => {
      window.removeEventListener("resize", () => {
        screenSize.current = window.innerWidth;
      })
    }
  }, []); 

  return (
    <div
    className="card__text--user"
    style={{ display: "flex", flexDirection: "row" }}
    >
    <img
    className="card__text--user-image"
    src={require("./images/avatar-michelle.jpg")}
    alt=""
    />

    <div className="card__text--user-description">
    <p className="card__text--user-name">Michelle Appleton</p>
    <p className="card__text--user-date">28 Jun 2020</p>
    </div>

    <button
    id="shareBtn"
    className="card__text--user-share"
    onClick={() => {
      isClicked();
    }}
    >
    <UserShare />
    </button>

    <>{showShare && <ShareAction screenSize={screenSize}/>}</>

    </div>
  );
}
