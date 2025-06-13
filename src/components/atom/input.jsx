import React from "react";

const InputComponent = ({ setter, inputText }) => {
	return (
		<>
			<textarea
				className="c-input"
				value={inputText}
				onChange={(e) => setter(e.target.value)}
			/>
			<style jsx>{`
				.c-input {
					border: none;
					width: 100%;
					height: 90%;
					outline: none;
					background-color: #fff;
					color: #000;
					resize: none;
				}
			`}</style>
		</>
	);
};

export default InputComponent;
