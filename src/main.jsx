import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Call from "./page/call.jsx";
import Chat from "./page/chat.jsx";
import SimpleChat from "./page/simple-chat.jsx";
import AnotherBot from "./page/another-bot.jsx";
const About = lazy(() => import("./page/about.jsx"));

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<App />}
				/>

				<Route
					path="/about"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<About />
						</Suspense>
					}
				/>

				<Route
					path="/call"
					element={<Call />}
				/>

				<Route
					path="/chat-gpt"
					element={
						// <AIProvider>
						<Chat />
						// </AIProvider>
					}
				/>

				<Route
					path="/simple-chat"
					element={<SimpleChat />}
				/>
				<Route
					path="/chat-bot"
					element={<AnotherBot />}
				/>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
