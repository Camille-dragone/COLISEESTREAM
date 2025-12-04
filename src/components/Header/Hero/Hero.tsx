import HeroImage from "../../../assets/colisee4.png";
import "./Hero.css";

function Hero() {
  return (
<div className="hero-wrapper">
  <section className="hero-section">
    <div className="hero-content">
      <h1>Mon titre</h1>
      <p>Ma description</p>
    </div>
    <img src={HeroImage} alt="Héros" className="hero-img" />
  </section>
</div>

  );
}

export default Hero;
