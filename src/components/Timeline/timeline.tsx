import { useState } from "react";
import "./timeline.css";

function Timeline() {
	const historyItems = [
		{
			id: 1,
			year: "I",
			event: "Tout se passe ici, vous êtes au bon endroit.",
		},
		{
			id: 2,
			year: "II",
			event: "Je choisis mon événement parmi ceux proposés.",
		},
		{
			id: 3,
			year: "III",
			event: "Je sélectionne ma place selon mes préférences.",
		},
		{
			id: 4,
			year: "IV",
			event:
				"Je procède au paiement sur place en amenant l'appoint nécessaire.",
		},
	];
	const [activeId, setActiveId] = useState<number | null>(1);

	return (
		<div className="timeline-header">
			<h2>Comment réserver une place au Colisée </h2>
			<div className="timeline-container">
				<div className="timeline-line"></div>
				<div className="timeline-points">
					{historyItems.map((item) => (
						<div key={item.id} className="timeline-point-wrapper">
							<button
								type="button"
								className={`timeline-point ${activeId === item.id ? "active" : ""}`}
								onClick={() =>
									setActiveId(activeId === item.id ? null : item.id)
								}
							></button>
							{activeId === item.id && (
								<div className="timeline-description">
									<div className="timeline-year">{item.year}</div>
									<div className="timeline-event">{item.event}</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Timeline;
