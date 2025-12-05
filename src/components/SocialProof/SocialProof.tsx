import "./SocialProof.css";
import Pline from "../../assets/socialproof/pline.jpg";
import Suetone from "../../assets/socialproof/suetone.jpg";
import Martial from "../../assets/socialproof/martial.jpg";

function SocialProof() {
	const testimonials = [
		{
			id: 1,
			author: "Pline l'Ancien",
			icon: Pline,
			text: "Je viens au Colisée en famille toutes les semaines. C'est un lieu où l'histoire prend vie et où l'on ressent la grandeur de Rome.",
			hashtag: "#amazing #colisée",
			date: "Il y a II jours",
			role: "Notable local",
			clients: "LXVII clients",
		},
		{
			id: 2,
			author: "Suétone",
			icon: Suetone,
			text: "Les spectacles sont impressionnants et bien organisés.",
			hashtag: "#lovecolisée #rome",
			date: "Il y a I semaine",
			role: "Sénateur",
			clients: "CDLXXXV clients",
		},
		{
			id: 3,
			author: "Martial",
			icon: Martial,
			text: "Habitué des lieux, j'adore visiter les loges des gladiateurs.",
			hashtag: "#gladiator #césar",
			date: "Il y a V heures",
			role: "Chevalier",
			clients: "CCXXX clients",
		},
	];

	return (
		<section className="social-proof">
			<div className="social-proof-container">
				<div className="social-proof-header">
					<p>FORUM</p>
				</div>
				<div className="testimonials-grid">
					{testimonials.map((testimonial) => (
						<div key={testimonial.id} className="testimonial-card">
							<p className="testimonial-text">"{testimonial.text}"</p>
							<p className="testimonial-hashtag">{testimonial.hashtag}</p>
							<p className="testimonial-date">{testimonial.date}</p>
							<div className="testimonial-author">
								<div className="testimonial-icon">
									{testimonial.icon && (
										<img src={testimonial.icon} alt={testimonial.author} />
									)}
								</div>
								<div className="author-info">
									<div className="author-name">{testimonial.author}</div>
									<div className="author-role">{testimonial.role}</div>
									<div className="author-clients">{testimonial.clients}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<button type="button" className="see-more-button">
				Voir plus de témoignages
			</button>
		</section>
	);
}

export default SocialProof;
