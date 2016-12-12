import React from 'react';
import PadBank from './Components/PadBank';
import Controls from './Components/Controls';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSound: 'test'
    }
  }
  displayName = (name) => {
    console.log('working');
    this.setState({
      currentSound: name
    });
  }
  render() {
    return (
      <div className="inner-container">
        <PadBank updateDisplay={this.displayName} />
        <Controls currentSound={this.state.currentSound} />
      </div>
    )
  }
}

export default App;