import "../InfosPratiques/InfosPratiques.css";
import Visiteursattendant from "../../assets/visiteursdevantlec.png";
import Visiteursmangeant from "../../assets/visiteursmangeant.png";

function InfosPratiques() {
	return (
		<div className="coliseum-container">
			<p className="header-IP">Informations Pratiques</p>

			<main className="main-content">
				<section className="info-section">
					<h2>Horaires</h2>
					<div className="info-card">
						<div className="schedule-item">
							<h3>Munera Gladiatoria</h3>
							<p>
								<strong>de IX h à XV h</strong>
							</p>
							<p className="detail">
								Les combats les plus prestigieux ont lieu en milieu de journée
							</p>
						</div>
						<div className="schedule-item">
							<h3>Venationes</h3>
							<p>
								<strong>de VII h à IX h</strong>
							</p>
							<p className="detail">
								Spectacles matinaux mettant en scène lions, ours et animaux
								exotiques
							</p>
						</div>
						<div className="schedule-item">
							<h3>Naumachiae</h3>
							<p>
								<strong>Occasions spéciales uniquement</strong>
							</p>
							<p className="detail">Lors des grandes célébrations impériales</p>
						</div>
						<p className="note">
							⚠️ Les portes ouvrent une heure avant le début des spectacles
						</p>
					</div>
				</section>
				<img
					className="bandeau-faq"
					src={Visiteursattendant}
					alt="Visiteurs attendant devant le Colisée"
				/>
				<section className="info-section">
					<h2>Comment Accéder au Colisée</h2>
					<div className="info-card">
						<div className="access-item">
							<h3>À pied depuis le Forum Romanum</h3>
							<p>Suivez la Via Sacra vers l'est, X minutes de marche</p>
						</div>
						<div className="access-item">
							<h3>En Litière</h3>
							<p>Dépose autorisée sur la Piazza del Colosseo</p>
						</div>
						<div className="access-item">
							<h3>En Char</h3>
							<p>Stationnement disponible près de l'Arc de Constantin</p>
						</div>
						<div className="access-item">
							<h3>Depuis le Palatin</h3>
							<p>Descendre par les escaliers Est, V minutes</p>
						</div>
						<p className="landmark">
							📍 Repère : À proximité du Colosse de Néron et de l'Arc de
							Constantin
						</p>
					</div>
				</section>
				<img
					src={Visiteursmangeant}
					alt="Visiteurs mangeant près du Colisée"
					className="bandeau-faq"
				/>
				<section className="info-section">
					<h2>Conseils Pratiques</h2>
					<div className="info-card">
						<div className="tip-category">
							<h3>🎫 Entrée et Placement</h3>
							<ul>
								<li>
									Les sénateurs et patriciens accèdent aux gradins inférieurs
								</li>
								<li>Les chevaliers occupent le maenianum primum</li>
								<li>Les citoyens ordinaires : maenianum secundum</li>
								<li>Les femmes et plébéiens : gradins supérieurs</li>
								<li>
									Présentez votre tessera à l'entrée correspondant à votre rang
								</li>
							</ul>
						</div>

						<div className="tip-category">
							<h3>☀️ Protection et Confort</h3>
							<ul>
								<li>Le velarium protège du soleil, mais apportez un chapeau</li>
								<li>Prévoyez une toge de rechange en cas de chaleur</li>
								<li>Des fontaines sont disponibles dans les couloirs</li>
								<li>Les journées complètes nécessitent des provisions</li>
							</ul>
						</div>

						<div className="tip-category">
							<h3>🍇 Rafraîchissements</h3>
							<ul>
								<li>Vendeurs ambulants proposent vin, eau et fruits</li>
								<li>Les thermopolia environnants servent des repas</li>
								<li>Évitez de jeter les déchets dans l'arène</li>
							</ul>
						</div>

						<div className="tip-category">
							<h3>⚔️ Sécurité</h3>
							<ul>
								<li>Gardez vos effets personnels près de vous</li>
								<li>Ne descendez jamais dans l'arène</li>
								<li>Respectez les vigiles et prétoriens en service</li>
								<li>En cas d'évacuation, suivez les instructions</li>
							</ul>
						</div>

						<div className="tip-category">
							<h3>📜 Étiquette</h3>
							<ul>
								<li>Applaudissez les gladiateurs vainqueurs</li>
								<li>Le pouce levé ou baissé influence le sort des vaincus</li>
								<li>Silence respectueux lors des exécutions</li>
								<li>Acclamez l'Empereur à son arrivée</li>
							</ul>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default InfosPratiques;
