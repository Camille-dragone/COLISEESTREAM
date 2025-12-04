export type GladiatorStyle =
	| "Murmillo"
	| "Retiarius"
	| "Thraex"
	| "Secutor"
	| "Hoplomaque";

export interface Gladiator {
	id: number;
	name: string;
	nickname: string;
	age: number;
	rank: number; // 1 = meilleur classement
	originCity: string;
	heightCm: number;
	style: GladiatorStyle;
	motto: string;
}

export type ChariotRole =
	| "Auriga"
	| "Stratèges"
	| "Soigneur"
	| "Maître d'écurie";

export interface ChariotMember {
	id: number;
	name: string;
	role: ChariotRole;
	yearsExperience: number;
}

export interface ChariotTeam {
	id: number;
	name: string;
	factionColor: string;
	city: string;
	ranking: number;
	slogan: string;
	mainHorses: string;
	members: ChariotMember[];
}

export const gladiators: Gladiator[] = [
	{
		id: 1,
		name: "Marcus Valerius",
		nickname: "Le Mur",
		age: 28,
		rank: 1,
		originCity: "Rome",
		heightCm: 188,
		style: "Murmillo",
		motto: "Je suis le mur entre toi et la mort.",
	},
	{
		id: 2,
		name: "Titus Flavius",
		nickname: "L’Ombre",
		age: 24,
		rank: 2,
		originCity: "Capoue",
		heightCm: 180,
		style: "Retiarius",
		motto: "Tu ne peux pas frapper ce que tu ne vois pas.",
	},
	{
		id: 3,
		name: "Gnaeus Varro",
		nickname: "Le Lynx",
		age: 26,
		rank: 3,
		originCity: "Pompei",
		heightCm: 176,
		style: "Thraex",
		motto: "Mes yeux voient ta chute avant toi.",
	},
	{
		id: 4,
		name: "Lucius Drusus",
		nickname: "Tonnerre",
		age: 30,
		rank: 4,
		originCity: "Carthage",
		heightCm: 192,
		style: "Secutor",
		motto: "Chaque pas est un coup de tonnerre.",
	},
	{
		id: 5,
		name: "Cassia Aelia",
		nickname: "La Vipère",
		age: 22,
		rank: 5,
		originCity: "Athènes",
		heightCm: 170,
		style: "Thraex",
		motto: "Je frappe vite, je frappe juste.",
	},
	{
		id: 6,
		name: "Decimus Nero",
		nickname: "Le Boucher",
		age: 33,
		rank: 6,
		originCity: "Lugdunum",
		heightCm: 185,
		style: "Murmillo",
		motto: "Le sable se souvient de mon nom.",
	},
	{
		id: 7,
		name: "Severus Felix",
		nickname: "Le Phoenix",
		age: 27,
		rank: 7,
		originCity: "Alexandrie",
		heightCm: 182,
		style: "Hoplomaque",
		motto: "Je me relève toujours.",
	},
	{
		id: 8,
		name: "Publius Cassian",
		nickname: "L’Ouragan",
		age: 25,
		rank: 8,
		originCity: "Antioche",
		heightCm: 190,
		style: "Secutor",
		motto: "En un souffle, tout disparaît.",
	},
	{
		id: 9,
		name: "Aurelia Maxima",
		nickname: "L’Aigle",
		age: 23,
		rank: 9,
		originCity: "Sparte",
		heightCm: 174,
		style: "Hoplomaque",
		motto: "Je domine l’arène d’un regard.",
	},
	{
		id: 10,
		name: "Julius Corvinus",
		nickname: "Corbeau",
		age: 29,
		rank: 10,
		originCity: "Ravenne",
		heightCm: 178,
		style: "Retiarius",
		motto: "Je guette ta dernière erreur.",
	},
];

export const chariotTeams: ChariotTeam[] = [
	{
		id: 1,
		name: "Fulgur Roma",
		factionColor: "Rouge",
		city: "Rome",
		ranking: 1,
		slogan: "Quand nous passons, le tonnerre suit.",
		mainHorses: "Aquila, Ignis, Fulmen, Ventus",
		members: [
			{
				id: 1,
				name: "Gaius Marcellus",
				role: "Auriga",
				yearsExperience: 8,
			},
			{
				id: 2,
				name: "Servius Longinus",
				role: "Stratèges",
				yearsExperience: 6,
			},
			{
				id: 3,
				name: "Livia Tertia",
				role: "Soigneur",
				yearsExperience: 5,
			},
			{
				id: 4,
				name: "Hostilius Dracon",
				role: "Maître d'écurie",
				yearsExperience: 9,
			},
		],
	},
	{
		id: 2,
		name: "Aurora Capua",
		factionColor: "Or",
		city: "Capoue",
		ranking: 2,
		slogan: "L’aube appartient aux plus rapides.",
		mainHorses: "Sol, Flamma, Orbis, Lux",
		members: [
			{
				id: 5,
				name: "Tullius Crassus",
				role: "Auriga",
				yearsExperience: 7,
			},
			{
				id: 6,
				name: "Quintus Milo",
				role: "Stratèges",
				yearsExperience: 5,
			},
			{
				id: 7,
				name: "Aelia Prisca",
				role: "Soigneur",
				yearsExperience: 4,
			},
			{
				id: 8,
				name: "Caius Felicior",
				role: "Maître d'écurie",
				yearsExperience: 6,
			},
		],
	},
	{
		id: 3,
		name: "Ventus Carthago",
		factionColor: "Vert",
		city: "Carthage",
		ranking: 3,
		slogan: "Le vent ne nous rattrape jamais.",
		mainHorses: "Nox, Umbra, Auster, Boreas",
		members: [
			{
				id: 9,
				name: "Hanno Barca",
				role: "Auriga",
				yearsExperience: 6,
			},
			{
				id: 10,
				name: "Malchus Zosimos",
				role: "Stratèges",
				yearsExperience: 7,
			},
			{
				id: 11,
				name: "Sophonisba Lina",
				role: "Soigneur",
				yearsExperience: 3,
			},
			{
				id: 12,
				name: "Azarbal Rufus",
				role: "Maître d'écurie",
				yearsExperience: 8,
			},
		],
	},
	{
		id: 4,
		name: "Glacies Nordica",
		factionColor: "Blanc",
		city: "Ravenne",
		ranking: 4,
		slogan: "Calmes comme la glace, rapides comme la foudre.",
		mainHorses: "Glacius, Nix, Boreal, Alba",
		members: [
			{
				id: 13,
				name: "Lucius Helvus",
				role: "Auriga",
				yearsExperience: 4,
			},
			{
				id: 14,
				name: "Vitus Severian",
				role: "Stratèges",
				yearsExperience: 5,
			},
			{
				id: 15,
				name: "Claudia Mira",
				role: "Soigneur",
				yearsExperience: 4,
			},
			{
				id: 16,
				name: "Frontinus Varro",
				role: "Maître d'écurie",
				yearsExperience: 7,
			},
		],
	},
	{
		id: 5,
		name: "Mare Nostrum",
		factionColor: "Bleu",
		city: "Alexandrie",
		ranking: 5,
		slogan: "Nos roues tracent le rivage de la victoire.",
		mainHorses: "Mare, Unda, Nereus, Stella",
		members: [
			{
				id: 17,
				name: "Caius Nautius",
				role: "Auriga",
				yearsExperience: 3,
			},
			{
				id: 18,
				name: "Ptolemaios Menes",
				role: "Stratèges",
				yearsExperience: 6,
			},
			{
				id: 19,
				name: "Isis Callista",
				role: "Soigneur",
				yearsExperience: 5,
			},
			{
				id: 20,
				name: "Heron Atticus",
				role: "Maître d'écurie",
				yearsExperience: 6,
			},
		],
	},
	{
		id: 6,
		name: "Tempestas Orientis",
		factionColor: "Violet",
		city: "Antioche",
		ranking: 6,
		slogan: "La tempête vient de l’est.",
		mainHorses: "Ira, Fulgur, Nimbus, Astrum",
		members: [
			{
				id: 21,
				name: "Domitius Syrius",
				role: "Auriga",
				yearsExperience: 2,
			},
			{
				id: 22,
				name: "Marcellus Diodor",
				role: "Stratèges",
				yearsExperience: 4,
			},
			{
				id: 23,
				name: "Helena Phoebe",
				role: "Soigneur",
				yearsExperience: 3,
			},
			{
				id: 24,
				name: "Antiochus Leandros",
				role: "Maître d'écurie",
				yearsExperience: 5,
			},
		],
	},
];
