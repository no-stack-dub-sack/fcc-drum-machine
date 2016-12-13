import React from 'react';
import PadBank from './Components/PadBank';
import './SCSS/App.scss';
import './SCSS/CustomSlider.scss';

// Yo Sean, I left it set up where I'm passing the sliderVal down to DrumPad.js through PadBank.js so you can see that it's 
// not working that way (as an attr on the <audio> tag). To get the other way back, just uncomment lines 87-90 below. 
// I can go back through and delete the rest later (unless I'm missing something really stupid but I don't think I am).

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '- - -',
      currentPadBank: [
        {id: 'Chord-1', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/chord1.wav'},
        {id: 'Chord-2', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/chord2.wav'},
        {id: 'Pad', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/lick.wav'},
        {id: 'Kick', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Kick2.wav'},
        {id: 'Clap', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Clap%207Mile.wav'},
        {id: 'Closed-HH', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/ClosedHH%207Mile.wav'},
        {id: 'Sub-Kick', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/kick.WAV'},
        {id: 'Snare', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/snare.WAV'},
        {id: 'Open-HH', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/open.WAV'}
      ],
      currentPadBankId: 'Hip Hop 1',
      tabPosition: { float: 'left' },
      sliderVal: 0.5
    }
    this.displayClipName = this.displayClipName.bind(this);
    this.selectBank = this.selectBank.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
  }
  selectBank() {
    this.state.currentPadBankId === 'Hip Hop 1' ?
    this.setState({
      currentPadBank: [
        {id: 'Horn-1', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/HORN1.wav'},
        {id: 'Horn-2', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/HORN2.wav'},
        {id: 'Blast', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/BLAST.wav'},
        {id: 'Pad-1', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/PAD1.wav'},
        {id: 'Pad-2', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/PAD1.wav'},
        {id: 'Closed-HH', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/closed.WAV'},
        {id: 'Kick', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Kick2.wav'},
        {id: 'Snare', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Snare%207Mile%201.wav'},
        {id: 'Open-HH', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/OpenHH.wav'}
      ],
      display: 'Hip Hop 2',
      currentPadBankId: 'Hip Hop 2',
      tabPosition: { float: 'right' }
    }) :
    this.setState({
      currentPadBank: [
        {id: 'Chord-1', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/chord1.wav'},
        {id: 'Chord-2', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/chord2.wav'},
        {id: 'Pad', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/lick.wav'},
        {id: 'Kick', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Kick2.wav'},
        {id: 'Clap', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Clap%207Mile.wav'},
        {id: 'Closed-HH', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/ClosedHH%207Mile.wav'},
        {id: 'Sub-Kick', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/kick.WAV'},
        {id: 'Snare', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/snare.WAV'},
        {id: 'Open-HH', url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/open.WAV'}
      ],
      display: 'Hip Hop 1',
      currentPadBankId: 'Hip Hop 1',
      tabPosition: { float: 'left' }
    })
  }
  displayClipName(name) {
    this.setState({
      display: name
    });
  }
  adjustVolume(e) {
    this.setState({
      sliderVal: e.target.value,
      display: "Volume: " + Math.round(e.target.value * 100)
    });
    // const audioClips = document.querySelectorAll('.clip');
    // for (let i = 0; i < audioClips.length; i++) {
    //   audioClips[i].volume = e.target.value;
    // }
  }
  render() {
    return (
      <div className="inner-container">
        <PadBank  updateDisplay={this.displayClipName}
                  currentPadBank={this.state.currentPadBank} />
        <div className="controls-container">
          <div className="screen-container">
            <div className="screen">
              <p>{this.state.display}</p>
            </div>
          </div>
          <div onClick={this.selectBank} className="bank-select">
            <div style={this.state.tabPosition} className="inner" />
          </div>
          <div className="volume-slider">
            <input type="range" min="0" max="1" value={this.state.sliderVal} step="0.01" onChange={this.adjustVolume} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;