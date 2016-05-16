import React, {Component} from 'react'


class StartPopup extends Component {

	render(){
		return (
			<div>
				<div id="popup">
					<a className="menuBtn" onClick={this.props.initChat}>LadChat</a>
					<a className="menuBtn" onClick={this.props.initBrowser}>internet</a>
				</div>
			</div>)

	}
}


export default StartPopup