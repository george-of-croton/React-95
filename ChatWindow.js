import React, {Component} from 'react'
import $ from 'jquery'
const socket = io()

class ChatWindow extends Component {


	emitMessage(){
		console.log("submitting")
		socket.emit('chat message', $('#m').val());
		$('#m').val('');
		return false;
		socket.on('chat message', (msg) => {
		$('#messages').append($('<li>').text(msg));
		});

	};

	componentDidMount(){
		$('#messages').append($('<li>').text("you connected to LADChat"));
	}




	render(){
		return (
			<div id='ChatWindow'>
				<div id="windowDressing">
					<button onClick={this.props.toggleChat}>X</button><h3>LADChat Online</h3>
				</div>
				<div id="messageBox">
					<ul id="messages"></ul>
				</div>
				<div id="formBox">
					<textarea id="m"></textarea>
					<a id='sendBtn' onClick={this.emitMessage.bind(this)}>
						<h1>Send</h1>
					</a>
				</div>
			</div>
		)
	}

}

export default ChatWindow