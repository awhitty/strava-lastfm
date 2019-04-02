import React, { Component } from 'react';

import logo from './logo.svg';

import { StravaV3 } from './strava';

interface IAppState {
  connected: boolean;
  data: any;
}

class App extends Component<{}, IAppState> {
  private stravaClient = new StravaV3();

  state = { connected: false, data: null };

  componentWillMount() {
    this.stravaClient.initialize().then(this.handleStravaAuth);
  }

  render() {
    const buttons = this.state.connected ? (
      <button onClick={this.fetchData}>Get data</button>
    ) : (
      <button onClick={this.startAuth}>Authenticate with Strava</button>
    );

    return (
      <>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        {buttons}
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </>
    );
  }

  private fetchData = () => {
    this.stravaClient.getStats().then(this.receiveData);
  };

  private receiveData = (data: any) => {
    this.setState({ data });
  };

  private startAuth = () => {
    this.stravaClient.authenticate().then(this.handleStravaAuth);
  };

  private handleStravaAuth = () => {
    this.setState({ connected: true });
  };
}

export default App;
