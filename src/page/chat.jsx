import React from "react";
import InputComponent from "../components/atom/input";
import Button from "../components/atom/Button";

const Chat = () => {
	const [text, setText] = React.useState("");
	console.log(text);
	const onSend = () => {
		console.log("submit");
	};
	return (
		<React.Fragment>
			<div className="card">
				<div className="card-header">
					<div className="card-header__icon">icon</div>
					<div className="card-header__name">Ilham N R</div>
				</div>
				<div className="card-body"></div>
				<div className="card-footer">
					<InputComponent
						text={text}
						setter={setText}
					/>
					<Button
						onSend={onSend}
						text={text}
					>
						Send
					</Button>
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

				.card > .card-footer {
					height: 10vh;
					background-color: #fff;
					border-top: 1px solid black;
					box-shadow: 10px 10px rgba(0, 0, 0, 0.2);
					display: flex;
					justify-content: center;
					// align-items: center;
				}
			`}</style>
		</React.Fragment>
	);
};

export default Chat;
