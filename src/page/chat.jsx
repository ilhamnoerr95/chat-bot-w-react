import React from "react";
import InputComponent from "../components/atom/input";
import Button from "../components/atom/Button";

const Chat = () => {
	const [text, setText] = React.useState("");
	const [messages, setMessages] = React.useState([]);
	const [error, setError] = React.useState({
		err: false,
		message: "",
	});
	// const onSend = async () => {
	// 	const newMessages = [...messages, { role: "user", content: text }];
	// 	setMessages(newMessages);
	// 	setText("");

	// 	const res = await fetch("http://localhost:3001/api/chat", {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify({ messages: newMessages }),
	// 	});

	// 	const data = await res.json();

	// 	setMessages((prev) => [
	// 		...prev,
	// 		{ role: "assistant", content: data.response.content },
	// 	]);
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userMessage = { role: "user", content: text };
		const newMessages = [...messages, userMessage];
		setMessages(newMessages);
		setText("");

		const response = await fetch("http://localhost:3001/api/chat", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ messages: newMessages }),
		});

		const reader = response.body.getReader();
		const decoder = new TextDecoder();
		let aiResponse = "";

		const { value } = await reader.read();

		const error = JSON.parse(decoder.decode(value));

		setError((e) => ({
			...e,
			err: Object.keys(error)[0] === "error",
			message: error.error,
		}));

		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			aiResponse += decoder.decode(value);
			setMessages([...newMessages, { role: "assistant", content: aiResponse }]);
		}
	};
	console.log(error);
	return (
		<React.Fragment>
			<div className="card">
				<div className="card-header">
					<div className="card-header__icon">icon</div>
					<div className="card-header__name">Ilham N R</div>
				</div>
				<div className="card-body">
					{error.err ? (
						<div
							className="error"
							style={{ color: "black" }}
						>
							{error.message}
						</div>
					) : (
						<div className="chat-log">
							{messages.map((m, i) => (
								<div key={i}>
									<strong>{m.role}: </strong>
									{m.content}
								</div>
							))}
						</div>
					)}
				</div>
				<div>
					<form
						className="card-footer"
						onSubmit={handleSubmit}
					>
						<InputComponent
							inputText={text}
							setter={setText}
						/>
						<Button
							// onSend={onSend}
							text={text}
							type={"submit"}
						>
							Send
						</Button>
					</form>
				</div>
			</div>

			<style jsx>{`
				.card {
					width: 400px;
					height: 100%;
					border-radius: 2rem;
					border: 1px solid black;
					background-color: #fff;
				}
				.card > .card-header {

					height: 10vh;
					background-color: green;
					display: flex;
                    width: 100%;
                    flex-direction: row;
                    gap:1rem;

					box-shadow: 10px 10px rgba(0, 0, 0, 0.2);
				}
					
				}

                .card-header > .card-header__icon {

                }

				.card > .card-body {
					height: 60vh;
					background-color: #fff;
				}

				.card-footer {
					height: 10vh;
					background-color: #fff;
					border-top: 1px solid black;
					box-shadow: 10px 10px rgba(0, 0, 0, 0.2);
					display: flex;
					flex-direction: row;
					justify-content: center;
					// align-items: center;
				}
			`}</style>
		</React.Fragment>
	);
};

export default Chat;
