import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './searchbar.js'
import Header from './header.js'

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<p>It's week 7!!!</p>
				<p>The shortcuts don't work unless you press Control + E</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti culpa harum, voluptatem minima reprehenderit explicabo, optio, sequi non odio totam sed mollitia molestias. Consequuntur officiis sed error, beatae eos porro.</p>
				<Searchbar />
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('app'));