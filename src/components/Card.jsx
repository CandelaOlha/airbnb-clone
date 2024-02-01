import "../styles/Card.css";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const Card = ({ item }) => {
  const { coverImg, stats, location, title, price, openSpots } = item;
  let badgeText;

  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <article className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={`../../public/assets/${coverImg}`}
        alt=""
        className="card-image"
      />
      <div className="card-text-container">
        <div className="card-ranking">
          <FaStar className="card-star" />
          <p>
            {stats.rating}{" "}
            <span className="card-reviews">({stats.reviewCount}) </span>
            <span className="card-location">{location}</span>
          </p>
        </div>
        <h2 className="card-description">{title}</h2>
        <p className="card-price">
          <b>From ${price}</b> / person
        </p>
      </div>
    </article>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
