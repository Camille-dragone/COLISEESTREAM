import { useParams } from "react-router";
import { coliseumEvents } from "../data/ColiseumEvents";
import { gladiators, chariotTeams } from "../data/ColiseumData";
import "./EventDetailPage.css";

const EventDetailPage: React.FC = () => {
	const { eventId } = useParams<{ eventId: string }>();

	const event = coliseumEvents.find((e) => e.id === eventId);

	if (!event) {
		return <main className="event-detail-page">Évènement introuvable.</main>;
	}

	const eventGladiators =
		event.gladiatorIds
			?.map((id) => gladiators.find((g) => g.id === id))
			.filter(Boolean) ?? [];

	const eventTeams =
		event.chariotTeamIds
			?.map((id) => chariotTeams.find((t) => t.id === id))
			.filter(Boolean) ?? [];

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
					<ul>
						{eventTeams.map((team) => (
							<li key={team!.id}>
								<strong>{team!.name}</strong> – {team!.city}
							</li>
						))}
					</ul>
				</section>
			)}

			{eventGladiators.length > 0 && (
				<section className="event-section">
					<h3>Gladiateurs</h3>
					<ul>
						{eventGladiators.map((g) => (
							<li key={g!.id}>
								<strong>{g!.name}</strong> — {g!.nickname}
							</li>
						))}
					</ul>
				</section>
			)}

			{isUpcoming && (
				<UpcomingEventDetail
					eventId={event.id}
					minPrice={event.minPrice}
					maxPrice={event.maxPrice}
				/>
			)}

			{isPast && <PastEventDetail eventId={event.id} />}
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
	eventId: string;
}

const PastEventDetail: React.FC<PastProps> = () => {
	return (
		<section className="event-section results">
			<h3>Résultats</h3>
			<p>Résultats détaillés à renseigner pour cet évènement.</p>
		</section>
	);
};
