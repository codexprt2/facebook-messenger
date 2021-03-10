import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Messages from "./components/Messages";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

const App = () => {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [username, setUserName] = useState("");

	useEffect(() => {
		db.collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
				);
			});
	}, []);

	useEffect(() => {
		// run code here....
		setUserName(prompt("Please enter your name"));
	}, []); // condition here
	// if its blank inside [], this code runs when the app component loads

	const sendMessages = (event) => {
		event.preventDefault();

		db.collection("messages").add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput("");
	};

	return (
		<div className='App'>
			<h1>Hello Programmers </h1>

			<form className='app__form'>
				<FormControl className='app__formControl'>
					<Input
						className='app__input'
						placeholder='Enter a message.....'
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>

					<IconButton
						className='app__iconButton'
						variant='contained'
						color='primary'
						type='submit'
						disabled={!input}
						onClick={sendMessages}>
						<SendIcon />
					</IconButton>
				</FormControl>
			</form>
			<FlipMove>
				{messages.map(({ id, message }) => (
					<Messages key={id} username={username} message={message} />
				))}
			</FlipMove>
		</div>
	);
};

export default App;
