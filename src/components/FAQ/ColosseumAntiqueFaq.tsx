import { useState } from "react";
import "./Faq.css";

interface FAQItem {
	id: number;
	question: string;
	answer: string;
}
const romanSpectatorFAQData: FAQItem[] = [
	{
		id: 1,
		question: "Comment puis-je obtenir un siège pour les Jeux (Ludi) ?",
		answer:
			"Les Jeux sont un cadeau de l'Empereur ou du Magistrat organisateur (*editor*). Les places ne s'achètent pas. Vous recevrez une 'tessera' (un jeton) indiquant votre entrée (porta), votre rangée (gradus) et votre siège (locus), selon votre rang social. Conservez-la précieusement !",
	},
	{
		id: 2,
		question: "Puis-je m'asseoir où je veux dans l'amphithéâtre ?",
		answer:
			"Non, citoyen ! L'ordre des sièges est strictement hiérarchique (*lex Iulia theatralis*). Les Sénateurs et les Vestales sont au premier rang (le podium), les Chevaliers juste au-dessus. Plus vous montez, plus le rang social est bas. Les femmes et les plébéiens les plus humbles sont aux galeries supérieures. Restez à la place indiquée sur votre *tessera* !",
	},
	{
		id: 3,
		question: "Quel est le programme des festivités pour la journée ?",
		answer:
			"Le jour commence par la *Pompa* (procession). En matinée, nous aurons les *Venationes* (chasses d'animaux sauvages exotiques). À la mi-journée, ce sont souvent les exécutions publiques (*noxii*). Le moment tant attendu, le *Munus* (combats de gladiateurs), se déroule dans l'après-midi, une fois la chaleur retombée.",
	},
	{
		id: 4,
		question: "Que se passe-t-il si le soleil est trop ardent ou s'il pleut ?",
		answer:
			"N'ayez crainte, le **Velarium** sera déployé ! C'est une immense toile manœuvrée par des marins expérimentés (souvent de la flotte de Misène) qui fournit de l'ombre à la majorité des gradins. Si le vent est trop fort, il devra être baissé, mais il vous protégera du soleil ou d'une averse légère.",
	},
	{
		id: 5,
		question: "Puis-je apporter ma propre nourriture et boisson ?",
		answer:
			"Oui, il est coutume d'apporter son propre pain, fruits secs et vin. De petits marchands circulent également. Parfois, l'Empereur, dans sa grande générosité, ordonne le jet de 'sparsiones' (petits jetons) dans la foule que l'on peut échanger contre de la nourriture ou des cadeaux. Ouvrez l'œil !",
	},
	{
		id: 6,
		question: "D'où sortent les fauves et les gladiateurs ?",
		answer:
			"Ils viennent de l'**Hypogée**, le labyrinthe souterrain complexe situé sous l'arène. Grâce à un système ingénieux de treuils et de rampes, ils sont hissés sur l'arène par des trappes. C'est ce qui rend l'apparition des animaux ou des décors si soudaine et dramatique.",
	},
];

interface FAQItemProps {
	item: FAQItem;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({ item }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAnswer = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="faq-item">
			<h3 className="faq-question" onClick={toggleAnswer}>
				{item.question}
				<span className={`faq-icon ${isOpen ? "open" : ""}`}>
					{isOpen ? "▼" : "►"}
				</span>
			</h3>
			<div className={`faq-answer-container ${isOpen ? "show" : "hidden"}`}>
				<p className="faq-answer">{item.answer}</p>
			</div>
		</div>
	);
};

const ColosseumAntiqueFaq: React.FC = () => {
	return (
		<section className="colosseum-faq-section">
			<h2>Foire aux Questions</h2>
			<div className="faq-list">
				{romanSpectatorFAQData.map((item) => (
					<FAQItemComponent key={item.id} item={item} />
				))}
			</div>
		</section>
	);
};

export default ColosseumAntiqueFaq;
