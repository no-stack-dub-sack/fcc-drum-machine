import React from 'react';

class DrumPad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePad: { 
				backgroundColor: 'grey',
    			marginTop: 10,
    			boxShadow: "3px 3px 5px black"
    		}
		}
		this.playSound = this.playSound.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.activatePad = this.activatePad.bind(this);
	}
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}
	handleKeyPress(e) {
		if (e.keyCode === this.props.keyCode) {
			this.playSound();
		}
	}
	activatePad() {
		this.state.activePad.backgroundColor === 'orange' ?
		this.setState({
			activePad: { 
				backgroundColor: 'grey',
    			marginTop: 10,
    			boxShadow: "3px 3px 5px black"
    		}
		}) :
		this.setState({
			activePad: { 
				backgroundColor: 'orange',
      			boxShadow: "0 3px orange",
      			height: 77,
      			marginTop: 13 
      		}
		});
	}
	playSound() {
		const sound = document.getElementById(this.props.clipId);
		const soundContainer = document.getElementById(this.props.clipId + '-container');
		sound.currentTime = 0;
		sound.play();
		this.activatePad();
		setTimeout( () => this.activatePad(), 100);
		this.props.updateDisplay(this.props.clipId.replace('-', ' '));
	}
	render() {
		return (
			<div>
				<div id={this.props.clipId + '-container'} 
					 onClick={this.playSound} 
					 className="drum-pad" 
					 style={this.state.activePad} >
					<audio className='clip' id={this.props.clipId} src={this.props.clip}></audio>
	    			<p>{this.props.keyTrigger}</p>
				</div>
			</div>
		)
	}
}

export default DrumPad;	