import React from "react";

const Game = ({ setUserInput, submit, round, hint }) => {
	return (
		<>
			<h4>Guess a Number (0 - 10):</h4>
			<input
				type='number'
				onChange={e => setUserInput(e.target.value)}
				placeholder='0'
			/>
			<button onClick={submit}>submit</button>
			<h5>{6 - round} chance/s remaining</h5>
			<h4 className='msg'>{hint}</h4>
		</>
	);
};

export default Game;
