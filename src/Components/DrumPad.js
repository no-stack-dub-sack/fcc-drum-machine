import React from 'react';

class DrumPad extends React.Component {
	constructor(props) {
		super(props);
		this.playSound = this.playSound.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
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
	playSound() {
		const sound = document.getElementById(this.props.clipId);
		const soundContainer = document.getElementById(this.props.clipId + '-container');
		sound.currentTime = 0;
		sound.play();
		soundContainer.classList.add('active');
		setTimeout( () => soundContainer.classList.remove('active'), 100);
		this.props.updateDisplay(this.props.clipId.replace('-', ' '));
	}
	render() {
		return (
			<div>
				<div 
					id={this.props.clipId + '-container'} 
					onClick={this.playSound} 
					className="drum-pad" >
						<audio id={this.props.clipId} src={this.props.clip}></audio>
	    				<p>{this.props.keyTrigger}</p>
				</div>
			</div>
		)
	}
}

export default DrumPad;	