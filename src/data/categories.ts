import navale1 from "../assets/navale1.png";
import navale2 from "../assets/navale2.png";
import navale3 from "../assets/navale3.png";
import navale4 from "../assets/navale4.png";
import gladia1 from "../assets/gladia1.png";
import gladia2 from "../assets/gladia2.png";
import gladia3 from "../assets/gladia3.png";
import gladia4 from "../assets/gladia4.png";
import char1 from "../assets/char1.png";
import char2 from "../assets/char2.png";
import char3 from "../assets/char3.png";
import char4 from "../assets/char4.png";

export type ImageItem = {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
};

export type Category = {
  id: number;
  name: string;
  images: ImageItem[];
};

export const categories: Category[] = [
  {
    id: 1,
    name: "Gladiator",
    images: [
      { 
        id: 1, 
        title: "Spartacus", 
        description: "Spartacus, leader rebelle des gladiateurs, affrontant les légions romaines dans une lutte pour la liberté. Pour voir le replay du match allez sur cette URL[www.replay-gladiator.com](#).", 
        imageUrl: gladia1 
      },
      { 
        id: 2, 
        title: "Crixus", 
        description: "Crixus, champion gaulois, combat avec bravoure et stratégie pour ses compagnons. Pour voir le replay du match allez sur cette URL [www.replay-gladiator.com](#).", 
        imageUrl: gladia2 
      },
      { 
        id: 3, 
        title: "Commodus", 
        description: "Commodus, empereur gladiateur autoproclamé, cherche à imposer sa gloire dans l'arène. Pour voir le replay du match allez sur cette URL[www.replay-gladiator.com](#).", 
        imageUrl: gladia3 
      },
      { 
        id: 4, 
        title: "Flamma", 
        description: "Flamma, gladiateur légendaire et invaincu, inspire crainte et admiration. Pour voir le replay du match allez sur cette URL [www.replay-gladiator.com](#).", 
        imageUrl: gladia4 
      },
    ],
  },
  {
    id: 2,
    name: "Naumachia",
    images: [
      { 
        id: 5, 
        title: "Proelium Classis", 
        description: "Bataille navale spectaculaire où les flottes romaines s'affrontent dans des manœuvres audacieuses. Pour voir le replay du match allez sur cette URL [www.replay-naumachia.com](#).", 
        imageUrl: navale1 
      },
      { 
        id: 6, 
        title: "Naves et Gloria", 
        description: "Les navires romains se déplacent en formation serrée, cherchant à écraser l'ennemi. Pour voir le replay du match allez sur cette URL [www.replay-naumachia.com](#).", 
        imageUrl: navale2 
      },
      { 
        id: 7, 
        title: "Bellum Maritimum", 
        description: "Combat épique sur les vagues, avec des navires qui s'entrechoquent et des catapultes en action. Pour voir le replay du match allez sur cette URL [www.replay-naumachia.com](#).", 
        imageUrl: navale3 
      },
      { 
        id: 8, 
        title: "Aegis et Ferrum", 
        description: "Stratégie et puissance des flottes romaines se confrontent dans un duel sanglant sur la mer. Pour voir le replay du match allez sur cette URL [www.replay-naumachia.com](#).", 
        imageUrl: navale4 
      },
    ],
  },
  {
    id: 3,
    name: "Ludi Circenses",
    images: [
      { 
        id: 9, 
        title: "Auriga Ignis", 
        description: "Aurige rapide dans les courses de chars, défiant le vent et la gravité pour remporter la victoire. Pour voir le replay du match allez sur cette URL [www.replay-circenses.com](#).", 
        imageUrl: char1 
      },
      { 
        id: 10, 
        title: "Ventus Celer", 
        description: "Maîtrise de la vitesse et du vent, chaque virage est calculé pour devancer ses rivaux. Pour voir le replay du match allez sur cette URL [www.replay-circenses.com](#).", 
        imageUrl: char2 
      },
      { 
        id: 11, 
        title: "Equus Noctis", 
        description: "Cheval noir légendaire, rapide et puissant, au centre de toutes les attentions. Pour voir le replay du match allez sur URL [www.replay-circenses.com](#).", 
        imageUrl: char3 
      },
      { 
        id: 12, 
        title: "Ferrum Fortis", 
        description: "Force et puissance sur la piste, chaque course est un combat acharné pour la gloire. Pour voir le replay du match allez sur cette URL [www.replay-circenses.com](#).", 
        imageUrl: char4 
      },
    ],
  },
];
