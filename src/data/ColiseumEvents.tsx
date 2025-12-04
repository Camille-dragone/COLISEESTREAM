// src/data/ColiseumEvents.ts

import Event1 from "../assets/EventAvenir1.png";
import Event2 from "../assets/Event2-removebg-preview.png";
import Event3 from "../assets/Event3-removebg-preview.png";
import Event4 from "../assets/Event4-removebg-preview.png";
import Event5 from "../assets/Event5-removebg-preview.png";
import Event6 from "../assets/Event6-removebg-preview.png";

export type EventKind = "CHARIOT_RACE" | "GLADIATOR_FIGHT";
export type EventStatus = "UPCOMING" | "PAST";

export interface ColiseumEvent {
	id: string;
	kind: EventKind;
	title: string;
	subtitle: string;
	description: string;
	status: EventStatus;
	imgSrc: string; // 👈 l’image de l’évènement
	minPrice?: number;
	maxPrice?: number;
	gladiatorIds?: number[];
	chariotTeamIds?: number[];
}

export const coliseumEvents: ColiseumEvent[] = [
	// ÉVÈNEMENTS À VENIR
	{
		id: "race-fulgur-aurora",
		kind: "CHARIOT_RACE",
		status: "UPCOMING",
		title: "Grand Prix du Tonnerre",
		subtitle: "Fulgur Roma vs Aurora Capua",
		description:
			"Course de char haute vitesse entre l'équipe Fulgur Roma et Aurora Capua, sous le regard attentif de l’Empereur.",
		imgSrc: Event1,
		minPrice: 25,
		maxPrice: 120,
		chariotTeamIds: [1, 2],
	},
	{
		id: "fight-marcus-titus",
		kind: "GLADIATOR_FIGHT",
		status: "UPCOMING",
		title: "Duel des Lames d’Elite",
		subtitle: "Marcus Valerius vs Titus Flavius",
		description:
			"Deux gladiateurs stars de l’arène se retrouvent pour un duel stratégique entre force brute et agilité.",
		imgSrc: Event4,
		minPrice: 22,
		maxPrice: 110,
		gladiatorIds: [1, 2],
	},
	{
		id: "race-mare-ventus",
		kind: "CHARIOT_RACE",
		status: "UPCOMING",
		title: "Course des Vents Marins",
		subtitle: "Mare Nostrum vs Ventus Carthago",
		description:
			"Les chevaux de la mer affrontent les maîtres du vent dans une course où chaque virage peut être fatal.",
		imgSrc: Event2,
		minPrice: 18,
		maxPrice: 90,
		chariotTeamIds: [5, 3],
	},

	// ÉVÈNEMENTS PASSÉS
	{
		id: "fight-gnaeus-lucius",
		kind: "GLADIATOR_FIGHT",
		status: "PAST",
		title: "Choc des Stratèges",
		subtitle: "Gnaeus Varro vs Lucius Drusus",
		description:
			"Un combat intense où la précision de Gnaeus Varro a rencontré la puissance écrasante de Lucius Drusus.",
		imgSrc: Event5,
		gladiatorIds: [3, 4],
	},
	{
		id: "race-tempestas-glacies",
		kind: "CHARIOT_RACE",
		status: "PAST",
		title: "La Nuit de la Tempête Gelée",
		subtitle: "Tempestas Orientis vs Glacies Nordica",
		description:
			"Une course nocturne spectaculaire entre la fureur de l’est et le calme glacial du nord.",
		imgSrc: Event3,
		chariotTeamIds: [6, 4],
	},
	{
		id: "fight-decimus-severus",
		kind: "GLADIATOR_FIGHT",
		status: "PAST",
		title: "Le Boucher contre le Phénix",
		subtitle: "Decimus Nero vs Severus Felix",
		description:
			"Un duel brutal où la résistance légendaire du Phénix a été mise à l’épreuve par la violence de Decimus Nero.",
		imgSrc: Event6,
		gladiatorIds: [6, 7],
	},
];
