import React from "react";
import Button from "../components/atom/Button";

const SimpleChat = () => {
	const [text, setText] = React.useState("");
	const [bot, setBot] = React.useState("");

	const onSend = React.useCallback(() => {
		const regex = /\b(hai|hi|hallo)\b/i;
		const conditionBot = regex.test(text);
		if (conditionBot) {
			setBot("hallo bro!");
		} else {
			setBot("Saya masih belum paham maksutnya");
		}
	}, [text]);

	return (
		<>
			<div style={{ color: "#fff", marginBottom: "10px" }}>
				<input onChange={(e) => setText(e.target.value)} />
				<Button
					text={text}
					onSend={onSend}
				>
					Submit
				</Button>
			</div>
			<strong>Hasil Bot: {bot}</strong>
			<style jsx>
				{`
					input {
						padding: 8px 20px;
						margin-right: 5px;
					}
				`}
			</style>
		</>
	);
};

export default SimpleChat;
