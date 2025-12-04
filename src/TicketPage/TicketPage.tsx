import { useParams } from "react-router-dom";
import { useState } from "react";
import { coliseumEvents } from "../data/ColiseumEvents";
import ColiseumPlan from "../assets/coliseum-plan.png";
import "./TicketPage.css";

type ZoneKey = "podium" | "ima" | "media" | "fosse";

const TicketPage: React.FC = () => {
	const { eventId } = useParams<{ eventId: string }>();

	const event = coliseumEvents.find((e) => e.id === eventId);

	const [selectedZone, setSelectedZone] = useState<ZoneKey>("ima");
	const [quantity, setQuantity] = useState<number>(1);

	if (!event) {
		return <main className="ticket-page">Évènement introuvable.</main>;
	}

	const baseMin = event.minPrice ?? 20;
	const baseMax = event.maxPrice ?? baseMin * 2;

	const zonePrices: Record<ZoneKey, number> = {
		podium: Math.round(baseMax * 1.3),
		ima: baseMax,
		media: baseMin,
		fosse: Math.round(baseMin * 0.6),
	};

	const total = zonePrices[selectedZone] * quantity;

	const zoneLabel = (zone: ZoneKey): string => {
		switch (zone) {
			case "podium":
				return "Podium (VIP)";
			case "ima":
				return "Ima Cavea (Catégorie 1)";
			case "media":
				return "Media Cavea (Catégorie 2)";
			case "fosse":
				return "Fosse (Catégorie 3)";
			default:
				return "";
		}
	};

	return (
		<main className="ticket-page">
			<header className="ticket-header">
				<h1>Billetterie</h1>
				<h2>{event.title}</h2>
				<p className="ticket-subtitle">{event.subtitle}</p>
			</header>

			<section className="ticket-layout">
				{/* Plan du Colisée */}
				<div className="ticket-plan">
					<img
						src={ColiseumPlan}
						alt="Plan des places du Colisée"
						className="ticket-plan-image"
					/>
					<div className="ticket-legend">
						<h3>Légende :</h3>
						<ul>
							<li>
								<span className="legend-color legend-podium" /> Podium (VIP)
							</li>
							<li>
								<span className="legend-color legend-ima" /> Bleu – Ima Cavea
								(Catégorie 1)
							</li>
							<li>
								<span className="legend-color legend-media" /> Vert – Media
								Cavea (Catégorie 2)
							</li>
							<li>
								<span className="legend-color legend-fosse" /> Jaune – Fosse
								(Catégorie 3)
							</li>
						</ul>
					</div>
				</div>

				{/* Choix + récap */}
				<div className="ticket-form">
					<section className="ticket-section">
						<h3>Choisissez votre zone</h3>

						<div className="zone-buttons">
							<button
								type="button"
								className={
									"zone-button zone-podium" +
									(selectedZone === "podium" ? " active" : "")
								}
								onClick={() => setSelectedZone("podium")}
							>
								<span>{zoneLabel("podium")}</span>
								<span className="zone-price">{zonePrices.podium} deniers</span>
							</button>

							<button
								type="button"
								className={
									"zone-button zone-ima" +
									(selectedZone === "ima" ? " active" : "")
								}
								onClick={() => setSelectedZone("ima")}
							>
								<span>{zoneLabel("ima")}</span>
								<span className="zone-price">{zonePrices.ima} deniers</span>
							</button>

							<button
								type="button"
								className={
									"zone-button zone-media" +
									(selectedZone === "media" ? " active" : "")
								}
								onClick={() => setSelectedZone("media")}
							>
								<span>{zoneLabel("media")}</span>
								<span className="zone-price">{zonePrices.media} deniers</span>
							</button>

							<button
								type="button"
								className={
									"zone-button zone-fosse" +
									(selectedZone === "fosse" ? " active" : "")
								}
								onClick={() => setSelectedZone("fosse")}
							>
								<span>{zoneLabel("fosse")}</span>
								<span className="zone-price">{zonePrices.fosse} deniers</span>
							</button>
						</div>

						<div className="ticket-quantity">
							<label>
								Nombre de places :
								<input
									type="number"
									min={1}
									max={20}
									value={quantity}
									onChange={(e) =>
										setQuantity(Math.max(1, Number(e.target.value) || 1))
									}
								/>
							</label>
						</div>
					</section>

					<section className="ticket-total">
						<h3>Récapitulatif</h3>
						<p>
							<strong>{event.title}</strong>
							<br />
							<span>{event.subtitle}</span>
						</p>

						<p>
							Zone sélectionnée : <strong>{zoneLabel(selectedZone)}</strong>
							<br />
							Prix unitaire :{" "}
							<strong>{zonePrices[selectedZone]} deniers</strong>
							<br />
							Nombre de places : <strong>{quantity}</strong>
						</p>

						<p className="ticket-total-amount">
							Total : <strong>{total} deniers</strong>
						</p>

						<button className="ticket-pay-button" type="button">
							Valider ma réservation
						</button>
					</section>
				</div>
			</section>
		</main>
	);
};

export default TicketPage;
