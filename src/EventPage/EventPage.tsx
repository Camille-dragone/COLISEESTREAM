import EventComponent from "../components/EventComponent/EventComponent";
import "./EventPage.css";

import Event1 from "../assets/EventAvenir1.png";
import Event2 from "../assets/Event2-removebg-preview.png";
import Event3 from "../assets/Event3-removebg-preview.png";
import Event4 from "../assets/Event4-removebg-preview.png";
import Event5 from "../assets/Event5-removebg-preview.png";
import Event6 from "../assets/Event6-removebg-preview.png";

const EventPage = () => {
	return (
		<div className="event-page">
			<div className="backEvent">
				<h2>EVENEMENTS</h2>
			</div>

			<h3>Evenements à venir</h3>
			<div className="flexEvent">
				<EventComponent imgSrc={Event1} eventId="race-fulgur-aurora" />
				<EventComponent imgSrc={Event4} eventId="fight-marcus-titus" />
				<EventComponent imgSrc={Event2} eventId="race-mare-ventus" />
			</div>

			<h3>Evenements passés</h3>
			<div className="flexEvent">
				<EventComponent imgSrc={Event5} eventId="fight-gnaeus-lucius" />
				<EventComponent imgSrc={Event3} eventId="race-tempestas-glacies" />
				<EventComponent imgSrc={Event6} eventId="fight-decimus-severus" />
			</div>
		</div>
	);
};

export default EventPage;
