import casque1 from "../assets/casque1.png";
import casque2 from "../assets/casque2.png";
import casque3 from "../assets/casque3.png";
import bouclier1 from "../assets/bouclier1.png";
import bouclier2 from "../assets/bouclier2.png";
import bouclier3 from "../assets/bouclier3.png";
import armure1 from "../assets/armure1.png";
import armure2 from "../assets/armure2.png";
import armure3 from "../assets/armure3.png";
import arme1 from "../assets/arme1.png";
import arme2 from "../assets/arme2.png";
import arme3 from "../assets/arme3.png";
import './Store.css';

export default function Store() {
  const categories = [
    {
      id: 'armement',
      title: 'Armement',
      images: [
        { src: arme1, price: 'XI denarii' },
        { src: arme2, price: 'XII denarii' },
        { src: arme3, price: 'XIII denarii' }
      ]
    },
    {
      id: 'boucliers',
      title: 'Boucliers',
      images: [
        { src: bouclier1, price: 'XXIII Denarii' },
        { src: bouclier2, price: 'XXVI Denarii' },
        { src: bouclier3, price: 'XXIX Denarii' }
      ]
    },
    {
      id: 'casques',
      title: 'Casques',
      images: [
        { src: casque1, price: 'XVIII Denarii' },
        { src: casque2, price: 'XIX Denarii' },
        { src: casque3, price: 'XX Denarii' }
      ]
    },
    {
      id: 'armures',
      title: 'Armures',
      images: [
        { src: armure1, price: 'XXXV Denarii' },
        { src: armure2, price: 'XXXIX Denarii' },
        { src: armure3, price: 'XLIV Denarii' }
      ]
    }
  ];

  return (
    <div className="store-container">
      <section className="hero">
        <h2>Potentiam arenae domum reporta.</h2>
        <p>Devenez l'héros de l'arène.</p>
      </section>

      <section className="categories-bg-wrapper">
        <div className="categories-bg">
          {categories.map(cat => (
            <article key={cat.id}>
              <h3>{cat.title}</h3>
              <div className="category-images">
                {cat.images.map((imgObj, idx) => (
                  <div key={idx} className="product">
                    <img src={imgObj.src} alt={`${cat.title} ${idx + 1}`} />
                    <p className="price">{imgObj.price}</p>
                    <button className="product-button">Ajouter au panier</button>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
