var React = require('react');
var ReactDOM = require('react-dom');
require('./style.scss');

class Message extends React.Component {
	render() {
		return (
      <div>
        <p>Hola como estas</p>
			</div>
    );
	}
}

ReactDOM.render(<Message/>,
	document.getElementById('react-container'));
