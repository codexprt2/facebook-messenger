import Reacr, { useState } from "react";
import "./App.css";

const App = () => {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState(["hi", "hello"]);

	const sendMessages = (event) => {
		setMessages([...messages, input]);
		setInput("");
	};
	return (
		<div className='App'>
			<h1>Hello Programmers </h1>
			<input value={input} onChange={(event) => setInput(event.target.value)} />
			<button onClick={sendMessages}>Send Msg</button>
		</div>
	);
};

export default App;
