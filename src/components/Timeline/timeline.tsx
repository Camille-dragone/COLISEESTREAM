import { useState } from "react";
import "./timeline.css";

function Timeline() {
	const historyItems = [
		{
			id: 1,
			year: "70-72",
			event:
				"Vespasien lance le projet du Colisée sur l’ancien lac de la Domus Aurea.",
		},
		{
			id: 2,
			year: "72",
			event: "Début de la construction du Colisée.",
		},
		{
			id: 3,
			year: "80",
			event: "Inauguration du Colisée par Titus.",
		},
		{
			id: 4,
			year: "81-96",
			event: "Achèvement des travaux par Domitien.",
		},
	];
	const [activeId, setActiveId] = useState<number | null>(1);

	return (
		<div className="timeline-header">
			<h2></h2>
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
