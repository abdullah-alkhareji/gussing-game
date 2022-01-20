import React from "react";
import Game from "./Game";

const Home = ({ submit, setUserInput, round, hint }) => {
	return (
		<div className='container'>
			<h1>The Guessing Game</h1>
			<div className='card'>
				<Game
					submit={submit}
					setUserInput={setUserInput}
					round={round}
					hint={hint}
				/>
			</div>
		</div>
	);
};
export default Home;
