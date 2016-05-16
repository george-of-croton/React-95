import React, {Component} from 'react'
import reactDOM from 'react-dom'
import StartBar from './StartBar'

class App extends Component {


	render(){
		return (
			<div>
				<StartBar />
			</div>
		)	
	}
}


reactDOM.render(
	<div>
		<App />
	</div>
, document.getElementById("app"))