import HeroImage from "../../../assets/colisee4.png";
import Romain1 from "../../../assets/romain1.png";
import Romain2 from "../../../assets/romain2.png";  
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-wrapper">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Colisseum</h1>
          {/* <p>Ma description</p> */}
        </div>

        <div className="hero-images">
          <img src={HeroImage} className="hero-img colisee-parallax" />
          <img src={Romain1} alt="Petit héros gauche" className="hero-img-small left" />
          <img src={Romain2} alt="Petit héros droite" className="hero-img-small right" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
