import Counter from "../components/Counter/counter";
import Gotostream from "../components/Gotostream/gotostream";
import Hero from "../components/Header/Hero/Hero";
import SocialProof from "../components/SocialProof/SocialProof";
import Timeline from "../components/Timeline/timeline";
import "./HomePage.css";

function HomePage() {
	return (
		<div>
			<Hero />
			<Counter />
			<Timeline />
			<Gotostream />
			<SocialProof />
		</div>
	);
}

export default HomePage;
