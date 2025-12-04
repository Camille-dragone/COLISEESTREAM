import { useParams } from "react-router-dom";
import { coliseumEvents, type ColiseumEvent } from "../data/ColiseumEvents";
import {
	gladiators as allGladiators,
	chariotTeams as allChariotTeams,
	type Gladiator,
	type ChariotTeam,
} from "../data/ColiseumData";
import "./EventDetailPage.css";

const EventDetailPage: React.FC = () => {
	const { eventId } = useParams<{ eventId: string }>();

	const event = coliseumEvents.find((e) => e.id === eventId);

	if (!event) {
		return <main className="event-detail-page">Évènement introuvable.</main>;
	}

	const eventGladiators: Gladiator[] =
		event.gladiatorIds
			?.map((id) => allGladiators.find((g) => g.id === id))
			.filter((g): g is Gladiator => Boolean(g)) ?? [];

	const eventTeams: ChariotTeam[] =
		event.chariotTeamIds
			?.map((id) => allChariotTeams.find((t) => t.id === id))
			.filter((t): t is ChariotTeam => Boolean(t)) ?? [];

	const isUpcoming = event.status === "UPCOMING";
	const isPast = event.status === "PAST";

	return (
		<main className="event-detail-page">
			<header>
				<h1>{event.title}</h1>
				<h2>{event.subtitle}</h2>
				<p className="event-description">{event.description}</p>

				{event.imgSrc && (
					<img
						src={event.imgSrc}
						alt="Affiche de l'évènement"
						className="event-detail-image"
					/>
				)}
			</header>

			{eventTeams.length > 0 && (
				<section className="event-section">
					<h3>Équipes de char</h3>
					<div className="team-grid">
						{eventTeams.map((team) => (
							<article className="team-card" key={team.id}>
								<header className="team-card-header">
									<h4>{team.name}</h4>
									<p className="team-city">
										{team.city} · Couleur : {team.factionColor}
									</p>
								</header>
								<p className="team-slogan">« {team.slogan} »</p>
								<p className="team-horses">
									Chevaux principaux : <strong>{team.mainHorses}</strong>
								</p>
								{team.members && team.members.length > 0 && (
									<ul className="team-members">
										{team.members.map((m) => (
											<li key={m.id}>
												<strong>{m.role}</strong> – {m.name} (
												{m.yearsExperience} ans d&apos;exp.)
											</li>
										))}
									</ul>
								)}
							</article>
						))}
					</div>
				</section>
			)}

			{eventGladiators.length > 0 && (
				<section className="event-section">
					<h3>Gladiateurs</h3>
					<div className="gladiator-grid">
						{eventGladiators.map((g) => (
							<article className="gladiator-card" key={g.id}>
								<header className="gladiator-card-header">
									<h4>{g.name}</h4>
									<p className="gladiator-nickname">« {g.nickname} »</p>
								</header>
								<ul className="gladiator-infos">
									<li>
										Âge : <strong>{g.age} ans</strong>
									</li>
									<li>
										Ville d&apos;origine : <strong>{g.originCity}</strong>
									</li>
									<li>
										Style : <strong>{g.style}</strong>
									</li>
									<li>
										Taille : <strong>{g.heightCm} cm</strong>
									</li>
								</ul>
								<p className="gladiator-motto">« {g.motto} »</p>
							</article>
						))}
					</div>
				</section>
			)}

			{isUpcoming && (
				<UpcomingEventDetail
					eventId={event.id}
					minPrice={event.minPrice}
					maxPrice={event.maxPrice}
				/>
			)}

			{isPast && (
				<PastEventDetail
					event={event}
					gladiators={eventGladiators}
					teams={eventTeams}
				/>
			)}
		</main>
	);
};

export default EventDetailPage;

interface UpcomingProps {
	eventId: string;
	minPrice?: number;
	maxPrice?: number;
}

const UpcomingEventDetail: React.FC<UpcomingProps> = ({
	minPrice,
	maxPrice,
}) => {
	return (
		<section className="event-section upcoming">
			<h3>Billetterie</h3>
			{minPrice && maxPrice && (
				<p>
					Places disponibles de <strong>{minPrice}</strong> à{" "}
					<strong>{maxPrice}</strong> deniers.
				</p>
			)}
			<button type="button" className="ticket-button">
				Réserver des places
			</button>
		</section>
	);
};

interface PastProps {
	event: ColiseumEvent;
	gladiators: Gladiator[];
	teams: ChariotTeam[];
}

const PastEventDetail: React.FC<PastProps> = ({ event, gladiators, teams }) => {
	const result = event.result;

	if (!result) {
		return (
			<section className="event-section results">
				<h3>Résultats</h3>
				<p>Résultats détaillés à venir.</p>
			</section>
		);
	}

	let winnerName = "";
	let loserName = "";

	if (result.winnerGladiatorId) {
		const winner = gladiators.find((g) => g.id === result.winnerGladiatorId);
		const loser = result.loserGladiatorId
			? gladiators.find((g) => g.id === result.loserGladiatorId)
			: undefined;
		winnerName = winner ? winner.name : "";
		loserName = loser ? loser.name : "";
	} else if (result.winnerTeamId) {
		const winner = teams.find((t) => t.id === result.winnerTeamId);
		const loser = result.loserTeamId
			? teams.find((t) => t.id === result.loserTeamId)
			: undefined;
		winnerName = winner ? winner.name : "";
		loserName = loser ? loser.name : "";
	}

	return (
		<section className="event-section results">
			<h3>Résultats</h3>

			{winnerName && (
				<p>
					<strong>Vainqueur :</strong> {winnerName}
					{loserName && (
						<>
							{" "}
							<br />
							<strong>Face à :</strong> {loserName}
						</>
					)}
				</p>
			)}

			{result.score && (
				<p>
					<strong>Score :</strong> {result.score}
				</p>
			)}

			{typeof result.durationMinutes === "number" && (
				<p>
					<strong>Durée :</strong> {result.durationMinutes} minutes
				</p>
			)}

			<p className="result-recap">{result.recap}</p>
		</section>
	);
};
