import "../styles/Card.css";
import cardImage from "../assets/katie-zaferes.png";
import { FaStar } from "react-icons/fa";

const Card = () => {
  return (
    <article className="card">
      <img src={cardImage} alt="Katie Zaferes" className="card-image" />
      <div className="card-text-container">
        <div className="card-ranking">
          <FaStar className="card-star" />
          <p>
            5.0 <span className="card-reviews">(6) </span>
            <span className="card-country">USA</span>
          </p>
        </div>
        <h2 className="card-description">Life lessons with Katie Zaferes</h2>
        <p className="card-price">
          <b>From $136</b> / person
        </p>
      </div>
    </article>
  );
};

export default Card;
