import * as React from 'react';
import { Component } from 'react';

import logo from './logo.svg';

import { StravaV3 } from './strava';

interface IAppState {
  authenticated: boolean;
  data: any;
}

class App extends Component<{}, IAppState> {
  private stravaClient = new StravaV3();

  state = { authenticated: false, data: null };

  componentWillMount() {
    this.stravaClient.initialize().then(this.handleStravaAuth);
  }

  render() {
    const buttons = this.state.authenticated ? (
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
    this.setState({ authenticated: this.stravaClient.authenticated });
  };
}

export default App;
