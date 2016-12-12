import React from 'react';
import DrumPad from './DrumPad'

class PadBank extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="pad-bank">
				<DrumPad 
					clipId="Chord-1" 
					clip="https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/chord1.wav"
					keyTrigger="Q"
					keyCode={81} 
					updateDisplay={this.props.updateDisplay} />
				<DrumPad 
					clipId="Chord-2" 
					clip="https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/chord2.wav"
					keyTrigger="W"
					keyCode={87} 
					updateDisplay={this.props.updateDisplay} />
				<DrumPad 
					clipId="Pad" 
					clip="https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/lick.wav"
					keyTrigger="E"
					keyCode={69}
					updateDisplay={this.props.updateDisplay} />
				<DrumPad 
					clipId="Kick" 
					clip="https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Kick2.wav"
					keyTrigger="A" 
					keyCode={65} 
					updateDisplay={this.props.updateDisplay} />
				<DrumPad 
					clipId="Closed-Hat" 
					clip="https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/ClosedHH%207Mile.wav"
					keyTrigger="S" 
					keyCode={83} 
					updateDisplay={this.props.updateDisplay} />
				<DrumPad 
					clipId="Clap" 
					clip="https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Clap%207Mile.wav"
					keyTrigger="D"
					keyCode={68} 
					updateDisplay={this.props.updateDisplay} />
				<DrumPad 
					clipId="Sub-Kick" 
					clip="https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/kick.WAV"
					keyTrigger="Z"
					keyCode={90} 
					updateDisplay={this.props.updateDisplay} />
				<DrumPad 
					clipId="Snare" 
					clip="https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/snare.WAV"
					keyTrigger="X"
					keyCode={88} 
					updateDisplay={this.props.updateDisplay} />
				<DrumPad 
					clipId="Open-Hat" 
					clip="https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/open.WAV"
					keyTrigger="C"
					keyCode={67} 
					updateDisplay={this.props.updateDisplay} />
			</div>
		)
	}
}

export default PadBank;