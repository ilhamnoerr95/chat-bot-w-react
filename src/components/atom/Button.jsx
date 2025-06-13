import React from "react";

const Button = React.memo(({ children, onSend, text, type }) => {
	const handleClick = () => {
		onSend();
	};
	return (
		<>
			<button
				onClick={handleClick}
				disabled={!text}
				type={type}
			>
				{children}
			</button>
			<style jsx>
				{`
					button {
						background-color: ${!text ? "rgba(76, 175, 79, 0.08)" : "#4caf50"};
						border: none;
						color: black;
						padding: 10px 20px;
						text-align: center;
						text-decoration: none;
						display: inline-block;
						font-size: 16px;
						margin: 4px 2px;
						cursor: pointer;
					}
				`}
			</style>
		</>
	);
});

export default Button;
