import React from "react";

const Game = ({ setUserInput, submit, msg, round }) => {
	return (
		<>
			<h4>Gusse a Number (0 - 10):</h4>
			<input
				type='number'
				onChange={e => setUserInput(e.target.value)}
				placeholder='0'
			/>
			<button onClick={submit}>submit</button>
			<h5>{6 - round} chance/s remaining</h5>
			{/* {msg && <h4 className='msg'>{msg}</h4>} */}
			{/* <h2>{dir}</h2> */}
		</>
	);
};

export default Game;
