import React from "react";
import Game from "./Game";
import WinningMsg from "./WinningMsg";

const Home = ({
	submit,
	setUserInput,
	msg,
	round,
	checkRound,
	setRound,
	chechWin,
}) => {
	return (
		<div className='container'>
			<h1>The Gussing Game</h1>
			<div className='card'>
				<Game
					submit={submit}
					setUserInput={setUserInput}
					msg={msg}
					round={round}
				/>
			</div>
		</div>
	);
};
export default Home;
