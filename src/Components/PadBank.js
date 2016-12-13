import React from 'react';
import DrumPad from './DrumPad'

class PadBank extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="pad-bank" >
				<DrumPad 
					clipId={this.props.currentPadBank[0].id} 
					clip={this.props.currentPadBank[0].url}
					keyTrigger="Q"
					keyCode={81} 
					updateDisplay={this.props.updateDisplay}
					clipVolume={this.props.clipVolume} />
				<DrumPad 
					clipId={this.props.currentPadBank[1].id} 
					clip={this.props.currentPadBank[1].url}
					keyTrigger="W"
					keyCode={87} 
					updateDisplay={this.props.updateDisplay} 
					clipVolume={this.props.clipVolume} />
				<DrumPad 
					clipId={this.props.currentPadBank[2].id} 
					clip={this.props.currentPadBank[2].url}
					keyTrigger="E"
					keyCode={69}
					updateDisplay={this.props.updateDisplay} 
					clipVolume={this.props.clipVolume} />
				<DrumPad 
					clipId={this.props.currentPadBank[3].id} 
					clip={this.props.currentPadBank[3].url}
					keyTrigger="A" 
					keyCode={65} 
					updateDisplay={this.props.updateDisplay} 
					clipVolume={this.props.clipVolume} />
				<DrumPad 
					clipId={this.props.currentPadBank[4].id} 
					clip={this.props.currentPadBank[4].url}
					keyTrigger="S" 
					keyCode={83} 
					updateDisplay={this.props.updateDisplay} 
					clipVolume={this.props.clipVolume} />
				<DrumPad 
					clipId={this.props.currentPadBank[5].id} 
					clip={this.props.currentPadBank[5].url}
					keyTrigger="D"
					keyCode={68} 
					updateDisplay={this.props.updateDisplay} 
					clipVolume={this.props.clipVolume} />
				<DrumPad 
					clipId={this.props.currentPadBank[6].id} 
					clip={this.props.currentPadBank[6].url}
					keyTrigger="Z"
					keyCode={90} 
					updateDisplay={this.props.updateDisplay}
					clipVolume={this.props.clipVolume} />
				<DrumPad 
					clipId={this.props.currentPadBank[7].id} 
					clip={this.props.currentPadBank[7].url}
					keyTrigger="X"
					keyCode={88} 
					updateDisplay={this.props.updateDisplay} 
					clipVolume={this.props.clipVolume} />
				<DrumPad 
					clipId={this.props.currentPadBank[8].id} 
					clip={this.props.currentPadBank[8].url}
					keyTrigger="C"
					keyCode={67} 
					updateDisplay={this.props.updateDisplay} 
					clipVolume={this.props.clipVolume} />
			</div>
		)
	}
}

export default PadBank;