import { Link } from "react-router-dom";
import "./EventComponent.css";

interface EventComponentProps {
	imgSrc: string;
	eventId: string;
}

const EventComponent: React.FC<EventComponentProps> = ({ imgSrc, eventId }) => {
	return (
		<Link to={`/events/${eventId}`} className="event-card">
			<img
				src={imgSrc}
				alt="Affiche de l'évènement"
				className="event-card-img"
			/>
		</Link>
	);
};

export default EventComponent;
