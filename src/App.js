import React from 'react';
import PadBank from './Components/PadBank';
import './SCSS/App.scss';
import './SCSS/CustomSlider.scss';

const bankOne = [
	{keyCode: 81, keyTrigger: 'Q', id: 'Chord-1', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/chord1.wav'},
	{keyCode: 87, keyTrigger: 'W', id: 'Chord-2', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/chord2.wav'},
	{keyCode: 69, keyTrigger: 'E', id: 'Pad', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/lick.wav'},
	{keyCode: 65, keyTrigger: 'A', id: 'Kick', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Kick2.wav'},
	{keyCode: 83, keyTrigger: 'S', id: 'Clap', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Clap%207Mile.wav'},
	{keyCode: 68, keyTrigger: 'D', id: 'Closed-HH', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/ClosedHH%207Mile.wav'},
	{keyCode: 90, keyTrigger: 'Z', id: 'Sub-Kick', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/kick.WAV'},
	{keyCode: 88, keyTrigger: 'X', id: 'Snare', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/snare.WAV'},
	{keyCode: 67, keyTrigger: 'C', id: 'Open-HH', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/open.WAV'}
];

const bankTwo = [
	{keyCode: 81, keyTrigger: 'Q', id: 'Horn-1', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/HORN1.wav'},
	{keyCode: 87, keyTrigger: 'W', id: 'Horn-2', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/HORN2.wav'},
	{keyCode: 69, keyTrigger: 'E', id: 'Blast', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/BLAST.wav'},
	{keyCode: 65, keyTrigger: 'A', id: 'Pad-1', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/PAD1.wav'},
	{keyCode: 83, keyTrigger: 'S', id: 'Pad-2', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/PAD1.wav'},
	{keyCode: 68, keyTrigger: 'D', id: 'Closed-HH', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/closed.WAV'},
	{keyCode: 90, keyTrigger: 'Z', id: 'Kick', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Kick2.wav'},
	{keyCode: 88, keyTrigger: 'X', id: 'Snare', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Snare%207Mile%201.wav'},
	{keyCode: 67, keyTrigger: 'C', id: 'Open-HH', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/OpenHH.wav'}
];


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			power: true,
			display: String.fromCharCode(160),
			currentPadBank: bankOne,
			currentPadBankId: 'Hip Hop 1',
			sliderVal: 0.3
		}
		this.displayClipName = this.displayClipName.bind(this);
		this.selectBank = this.selectBank.bind(this);
		this.adjustVolume = this.adjustVolume.bind(this);
		this.powerControl = this.powerControl.bind(this);
		this.clearDisplay = this.clearDisplay.bind(this);
	}
	powerControl() {
		this.setState({
			power: !this.state.power,
			display: String.fromCharCode(160)
		});
	}
	selectBank() {
		if (this.state.power) { 
			this.state.currentPadBankId === 'Hip Hop 1' ?
			this.setState({
				currentPadBank: bankTwo,
				display: 'Hip Hop 2',
				currentPadBankId: 'Hip Hop 2',
			}) :
			this.setState({
				currentPadBank: bankOne,
				display: 'Hip Hop 1',
				currentPadBankId: 'Hip Hop 1',
			});
		}
	}
	displayClipName(name) {
		if (this.state.power) { 
			this.setState({
				display: name
			});
		}
	}
	adjustVolume(e) {
		if (this.state.power) {
			this.setState({
				sliderVal: e.target.value,
				display: "Volume: " + Math.round(e.target.value * 100)
			});
			setTimeout( () => this.clearDisplay(), 1000);
		}
	}
	clearDisplay() {
		this.setState({
			display: String.fromCharCode(160)
		});
	}
	render() {
		const powerSlider = this.state.power ? { float: 'right' } : { float: 'left' };
	    const bankSlider = this.state.currentPadBank === bankOne ? { float: 'left' } : { float: 'right' };
		{
			document.querySelectorAll('.clip').forEach(sound => {
				sound.volume = this.state.sliderVal
			});
	    }
    return (
			<div className="inner-container">
				<PadBank  	
					power={this.state.power}
					updateDisplay={this.displayClipName}
					clipVolume={this.state.sliderVal}
					currentPadBank={this.state.currentPadBank} />

				<div className="controls-container">
					<div className="control">
						<p>Power</p>
						<div onClick={this.powerControl} className="select">
							<div style={powerSlider} className="inner" />
						</div>
					</div>
					<p className="screen">
						{this.state.display}
					</p>
					<div className="volume-slider">
						<input type="range" min="0" max="1" step="0.01" value={this.state.sliderVal} onChange={this.adjustVolume} />
					</div>
					<div className="control">
						<p>Bank</p>
						<div onClick={this.selectBank} className="select">
							<div style={bankSlider} className="inner" />
						</div>
					</div>
				</div>

			</div>
    	)
  	}
}

export default App;