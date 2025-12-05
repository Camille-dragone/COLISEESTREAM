import { useState, useEffect, useRef } from "react";

import "./counter.css";
import IconGladiateur from "../../assets/chiffresclés/icongladiateurchiffre.png";
import IconColyseeChiffre from "../../assets/chiffresclés/iconscoliséechiffre.png";
import IconSpectateur from "../../assets/chiffresclés/iconromainchiffre.png";

interface CounterData {
	id: number;
	icon: string;
	target: number;
	label: string;
}

function Counter() {
	const counters: CounterData[] = [
		{
			id: 1,
			icon: IconColyseeChiffre,
			target: 12000,
			label: "㎡ de superficie",
		},
		{
			id: 2,
			icon: IconSpectateur,
			target: 80000,
			label: "spectateurs par événement",
		},
		{
			id: 3,
			icon: IconGladiateur,
			target: 150,
			label: "jours de spectacle par an",
		},
	];

	return (
		<div className="counters-wrapper">
			{counters.map((counter) => (
				<CounterItem
					key={counter.id}
					icon={counter.icon}
					target={counter.target}
					label={counter.label}
				/>
			))}
			<button type="button" className="see-more-event">
				Voir tous les événements
			</button>
		</div>
	);
}

interface CounterItemProps {
	icon: string;
	target: number;
	label: string;
}

function numToRoman(num: number): string {
	if (num < 1 || num > 100000) {
		throw new Error("Le nombre doit être entre 1 et 100000");
	}

	const romanNumerals: [number, string][] = [
		[100000, "C̅"],
		[90000, "X̅C̅"],
		[50000, "L̅"],
		[40000, "X̅L̅"],
		[10000, "X̅"],
		[9000, "M̅X̅"],
		[5000, "V̅"],
		[4000, "M̅V̅"],
		[1000, "M"],
		[900, "CM"],
		[500, "D"],
		[400, "CD"],
		[100, "C"],
		[90, "XC"],
		[50, "L"],
		[40, "XL"],
		[10, "X"],
		[9, "IX"],
		[5, "V"],
		[4, "IV"],
		[1, "I"],
	];

	let result = "";
	let remaining = num;

	for (const [value, symbol] of romanNumerals) {
		while (remaining >= value) {
			result += symbol;
			remaining -= value;
		}
	}

	return result;
}

const RomanNumeral = ({ num }: { num: number }) => {
	const roman = numToRoman(num);

	return (
		<span className="roman-numeral" data-number={num.toLocaleString("fr-FR")}>
			{roman}
		</span>
	);
};

export { numToRoman, RomanNumeral };

function CounterItem({ icon, target, label }: CounterItemProps) {
	const [count, setCount] = useState(1);
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.1 },
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!isVisible) return;

		const increment = target / 150;
		let currentCount = 0;

		const interval = setInterval(() => {
			currentCount += increment;
			if (currentCount >= target) {
				setCount(target);
				clearInterval(interval);
			} else {
				setCount(Math.ceil(currentCount));
			}
		}, 1);

		return () => clearInterval(interval);
	}, [isVisible, target]);

	return (
		<div ref={ref} className="counter-container">
			<img src={icon} alt={label} className="counter-icon" />
			<div className="counter">{numToRoman(count)}</div>
			<span>{label}</span>
		</div>
	);
}

export default Counter;
