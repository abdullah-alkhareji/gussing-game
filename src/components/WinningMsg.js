import React from "react";

const WinningMsg = ({ setRound, msg }) => {
	return (
		<>
			<h4 className='msg'>{msg}</h4>
			<button onClick={() => setRound(1)}>try again</button>
		</>
	);
};

export default WinningMsg;
