import React from 'react';

class Controls extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="screen">
				<p>{this.props.currentSound}</p>
			</div>
		)
	}
};

export default Controls;