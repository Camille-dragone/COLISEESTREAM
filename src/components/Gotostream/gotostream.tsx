import "./gotostream.css";
import { Link } from "react-router-dom";
import ZigotoImage from "../../assets/zigoto.png";

function Gotostream() {
	return (
		<div className="gotostream-container">
			<img src={ZigotoImage} alt="les zigotos du colisée" />
			<div className="gotostream-text">
				<h2>Regardez le Colisée en direct ou en replay</h2>
				<p>
					Plongez au cœur de l'histoire avec notre streaming en direct du
					Colisée. Vivez l'expérience unique de ce monument emblématique depuis
					le confort de votre foyer.
				</p>
				<Link to="/stream/replay" type="button" className="gotostream-button">
					Accéder au replay
				</Link>
				<Link to="/stream/live" className="gotostream-live-button">
					Regarder le direct
				</Link>
			</div>
		</div>
	);
}

export default Gotostream;
