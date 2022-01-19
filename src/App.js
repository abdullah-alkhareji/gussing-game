import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";

const App = () => {
	const [secret, setSecret] = useState(Math.floor(Math.random() * 10));
	const [userInput, setUserInput] = useState(0);
	const [round, setRound] = useState(1);
	const [msg, setMsg] = useState("");

	const checkRound = round < 5;
	const checkWin = +userInput === secret;

	const checkWinning = () => {
		if (checkRound) {
			if (checkWin) {
				const confirmed = window.confirm("You Won");
				if (confirmed) setRound(1);
				setSecret(Math.floor(Math.random() * 10));
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
		// console.log(secret);
		// console.log(userInput);
		console.log(`secret number: ${secret}`);
		console.log(`round: ${round}`);
	};

	// console.log(`round: ${round}`);

	return (
		<Home
			submit={submit}
			setUserInput={setUserInput}
			msg={msg}
			round={round}
			checkRound={checkRound}
			setRound={setRound}
			chechWin={checkWin}
		/>
	);
};

export default App;
