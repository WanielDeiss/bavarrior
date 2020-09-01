import React from 'react';
import { ArrowRepeat } from 'react-bootstrap-icons';
import './App.css';
import doBavarrior from './libs/doBavarrior';
type BavarriorState = {
  bavarrior: string;
};

class App extends React.Component<{}, BavarriorState> {
  constructor(props: any) {
    super(props);
    this.state = { bavarrior: doBavarrior() };
  }

  doBavarrior() {
    this.setState({ bavarrior: doBavarrior() });
  }

  render() {
    return (
      <div id="wrapper">
        <div className="words">
          <h1>{this.state.bavarrior}</h1>
          <a onClick={() => this.doBavarrior()}>
            <ArrowRepeat size={48} />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
