import React, { useState } from "react";

const ChatBot = () => {
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState("");

	const botResponse = (message) => {
		// Logika respons bot sederhana
		if (message.toLowerCase().includes("hai")) return "Hai juga!";
		if (message.toLowerCase().includes("apa kabar")) return "Saya baik, kamu?";
		return "Maaf, saya tidak mengerti.";
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!input.trim()) return;

		const newMessages = [
			...messages,
			{ sender: "user", text: input },
			{ sender: "bot", text: botResponse(input) },
		];
		setMessages(newMessages);
		setInput("");
	};

	return (
		<div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
			<div
				style={{
					border: "1px solid #ccc",
					padding: 10,
					height: 300,
					overflowY: "scroll",
				}}
			>
				{messages.map((msg, idx) => (
					<div
						key={idx}
						style={{ textAlign: msg.sender === "user" ? "right" : "left" }}
					>
						<p>
							<strong>{msg.sender}:</strong> {msg.text}
						</p>
					</div>
				))}
			</div>
			<form
				onSubmit={handleSubmit}
				style={{ marginTop: 10 }}
			>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					style={{ width: "80%", padding: 5 }}
				/>
				<button
					type="submit"
					style={{ padding: 5 }}
				>
					Kirim
				</button>
			</form>
		</div>
	);
};

export default ChatBot;
