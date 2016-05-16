import React, {Component} from 'react'
import $ from 'jquery'
const socket = io()

class BrowserWindow extends Component {





	render(){
		return (
			<div id='BrowserWindow'>
				<div id="windowDressing">
					<button onClick={this.props.toggleChat}>X</button><h3>Internet Deplorer</h3>
				</div>
				<input id="urlbar" type="text" value="http://www.contentking.com"></input>
				<iframe id ="browserimage" src="//giphy.com/embed/14kqI3Y4urS3rG" width="480" height="436" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
			</div>
		)
	}

}

export default BrowserWindow