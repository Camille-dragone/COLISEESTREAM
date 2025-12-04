import Event1 from "../assets/EventAvenir1.png";
import Event2 from "../assets/Event2-removebg-preview.png";
import Event3 from "../assets/Event3-removebg-preview.png";
import Event4 from "../assets/Event4-removebg-preview.png";
import Event5 from "../assets/Event5-removebg-preview.png";
import Event6 from "../assets/Event6-removebg-preview.png";

export type EventKind = "CHARIOT_RACE" | "GLADIATOR_FIGHT";
export type EventStatus = "UPCOMING" | "PAST";

export interface EventResult {
	winnerGladiatorId?: number;
	loserGladiatorId?: number;
	winnerTeamId?: number;
	loserTeamId?: number;
	score?: string;
	durationMinutes?: number;
	recap: string;
}

export interface ColiseumEvent {
	id: string;
	kind: EventKind;
	title: string;
	subtitle: string;
	description: string;
	status: EventStatus;
	imgSrc: string;
	minPrice?: number;
	maxPrice?: number;
	gladiatorIds?: number[];
	chariotTeamIds?: number[];
	result?: EventResult;
}

export const coliseumEvents: ColiseumEvent[] = [
	//  À VENIR
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

	//  PASSÉS
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
		result: {
			winnerGladiatorId: 4,
			loserGladiatorId: 3,
			score: "Victoire par KO au 2ᵉ round",
			durationMinutes: 8,
			recap:
				"Lucius Drusus a pris l’ascendant dès le premier échange et a terminé le combat par un coup de bouclier dévastateur.",
		},
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
		result: {
			winnerTeamId: 6,
			loserTeamId: 4,
			score: "5 tours à 4",
			durationMinutes: 15,
			recap:
				"Tempestas Orientis a remonté deux longueurs dans le dernier tour grâce à une trajectoire parfaite dans le virage final.",
		},
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
		result: {
			winnerGladiatorId: 7,
			loserGladiatorId: 6,
			score: "Victoire aux points après 3 rounds",
			durationMinutes: 12,
			recap:
				"Severus Felix a encaissé les assauts de Decimus Nero avant de reprendre le contrôle du combat et de convaincre la foule et l’éditeur.",
		},
	},
];
