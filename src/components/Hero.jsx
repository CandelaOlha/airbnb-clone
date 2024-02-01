import "../styles/Hero.css";
import photoGrid from "../../public/assets/photo-grid.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <img src={photoGrid} alt="" className="hero-photo-grid" />
      <h1 className="hero-title">Online experiences</h1>
      <p className="hero-description">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
