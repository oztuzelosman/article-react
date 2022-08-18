import "./Card.css";
import User from "./User";

export default function Card({ width}) {
  return (
    <div className="card">
      <div className="card__image">
        <img
          className="card__image--drawer"
          src={require("./images/drawers.jpg")}
          alt=""
        />
      </div>
      <div className="card__text">
        <h2 className="card__text--heading">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <div className="card__text--description">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </div>
        <User width={width}/>
      </div>
    </div>
  );
}
