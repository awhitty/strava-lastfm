import React, { Component } from 'react';
import Url from 'url-parse';

import { STRAVA_CLIENT_ID } from './constants';
import logo from './logo.svg';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://frosty-kare-c2b900.netlify.com'
    : 'http://localhost:3000';

const buildStravaUrl = () => {
  const stravaUrl = 'https://www.strava.com/oauth/authorize';
  const redirectUri = baseUrl + '/auth';
  const clientId = STRAVA_CLIENT_ID;
  const scope = 'read,activity:read';

  return `${stravaUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
};

class App extends Component {
  state = { debug: {} };

  componentWillMount() {
    if (window.location.pathname === '/auth' && window.location.search) {
      const url = new Url(window.location, true);
      this.setState({ debug: 'Fetching token...' });
      fetch(baseUrl + '/api/strava', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
          <img src={logo} alt="Logo" />
        </div>
        <a href={buildStravaUrl()}>Start auth</a>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </>
    );
  }
}

export default App;
