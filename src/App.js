import React, { Component } from 'react';
import Url from 'url-parse';

import { STRAVA_CLIENT_ID } from './constants';
import logo from './logo.svg';

const buildStravaUrl = () => {
  const baseUrl = 'https://www.strava.com/oauth/authorize';
  const redirectUri = window.location.origin + '/auth';
  const clientId = STRAVA_CLIENT_ID;
  const scope = 'read,activity:read';

  return `${baseUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
};

class App extends Component {
  state = { debug: {} };

  componentWillMount() {
    if (window.location.pathname === '/auth' && window.location.search) {
      const url = new Url(window.location, true);
      this.setState({ debug: 'Fetching token...' });
      fetch('http://localhost:3000/.netlify/functions/new_token', {
        method: 'POST',
        body: JSON.stringify(url.query),
      })
        .then(res => res.json())
        .then(res => {
          this.setState({ debug: res });
        });
    } else {
      this.setState({ debug: 'Start auth' });
    }
  }

  render() {
    return (
      <>
        <div>
          <img src={logo} alt='Logo' />
        </div>
        <a href={buildStravaUrl()}>Start auth</a>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </>
    );
  }
}

export default App;
