import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";

const App = () => {
	const [secret, setSecret] = useState(Math.floor(Math.random() * 10));
	const [userInput, setUserInput] = useState(0);
	const [round, setRound] = useState(1);
	const [hint, setHint] = useState("");

	const checkRound = round < 5;
	const checkWin = +userInput === secret;

	const giveHint = () => {
		if (+userInput > secret) {
			setHint("Your Guess is Higher than the Secret Number");
		} else if (+userInput < secret) {
			setHint("Your Guess is Lower than the Secret Number");
		}
	};

	const checkWinning = () => {
		if (checkRound) {
			if (checkWin) {
				const confirmed = window.confirm("You Won");
				if (confirmed) setRound(1);
				setSecret(Math.floor(Math.random() * 10));
			} else {
				giveHint();
			}
		} else {
			setTimeout(() => {
				const confirmed = window.confirm("You Lose");
				if (confirmed) setRound(1);
				setSecret(Math.floor(Math.random() * 10));
			}, 300);
		}
	};

	const submit = () => {
		setRound(round + 1);
		checkWinning();
		console.log(`secret number: ${secret}`);
		// console.log(`round: ${round}`);
	};

	return (
		<Home
			submit={submit}
			setUserInput={setUserInput}
			round={round}
			hint={hint}
		/>
	);
};

export default App;
