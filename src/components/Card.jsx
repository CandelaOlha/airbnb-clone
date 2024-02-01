import "../styles/Card.css";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const Card = ({
  img,
  imgAlt,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots,
}) => {
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
        src={`../../public/assets/${img}`}
        alt={imgAlt}
        className="card-image"
      />
      <div className="card-text-container">
        <div className="card-ranking">
          <FaStar className="card-star" />
          <p>
            {rating} <span className="card-reviews">({reviewCount}) </span>
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
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  rating: PropTypes.string,
  reviewCount: PropTypes.number,
  location: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  openSpots: PropTypes.number,
};

export default Card;
