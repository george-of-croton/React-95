import React, {Component} from 'react'
import StartPopup from './StartPopup'
import ChatWindow from './ChatWindow'
import BrowserWindow from './BrowserWindow'


class StartBar extends Component {
	constructor(props){
		super(props)
		this.state= {
			startPopper: false,
			chatStarted: false,
			browserOpen: false
		}
	}

	clickHandler(){
		this.setState({
					startPopper: this.state.startPopper = !this.state.startPopper
				})
	}

	initChat(){
		this.setState({
			chatStarted: this.state.chatStarted = !this.state.chatStarted
		})
	}

	initBrowser(){
		console.log(BrowserWindow)
		this.setState({
			browserOpen: this.state.browserOpen = !this.state.browserOpen
		})
	}


	render(){
		return (
			
		<div>
			<div id='row'>
				<div id="col-popper" >
					<div>{this.state.startPopper ? <StartPopup initChat={this.initChat.bind(this)} initBrowser={this.initBrowser.bind(this)} /> : <div type="hidden"></div>}</div>
					<div>{this.state.browserOpen ? <BrowserWindow /> : <div type="hidden"></div>}</div>
				<div type={this.state.chatStarted ? "" : "hidden"}>{this.state.chatStarted ? <ChatWindow toggleChat={this.initChat.bind(this)} /> : null }</div>
				</div>
			</div>	
			
			<div id="fixed-bar">
			<a id='startBtn' onClick={
				this.clickHandler.bind(this)
			}><img id="flag" src='windows-flag.png'/><h1>Start</h1></a><div id="btm-bar"></div>
			</div>
		</div>
		)
	}
}

export default StartBar