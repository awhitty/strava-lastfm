import * as React from 'react';
import axios from 'axios';

import { OAuthPopup } from './OauthPopup';

interface IAuthenticatorProps {
  baseUrl: string;
  tokenParamKey?: string;
}

interface IAuthenticatorState {
  authUrl: string | null;
  authToken: string | null;
  authenticatedData: object | null;
}

class Authenticator extends React.Component<
  IAuthenticatorProps,
  IAuthenticatorState
> {
  state = {
    authUrl: null,
    authToken: null,
    authenticatedData: null,
  };

  componentDidMount() {
    axios.get(this.getRoute('/url')).then(({ data }) => {
      this.setState({ authUrl: data.url });
    });
  }

  render() {
    const { authUrl } = this.state;
    return (
      <div>
        <h2>Authenticate with <code>{ this.props.baseUrl }</code></h2>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        {authUrl ? (
          <OAuthPopup
            url={authUrl}
            title="Google"
            onReceiveToken={this.handleToken}
            tokenParamKey={this.props.tokenParamKey}
          >
            <button>Open</button>
          </OAuthPopup>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }

  private handleToken = (token: string, params: URLSearchParams) => {
    if (token) {
      this.setState({ authToken: token });

      axios.post(this.getRoute('/finalize'), { token }).then(({ data }) => {
        this.setState({ authenticatedData: data });
      });
    }
  };

  private getRoute = (route: string): string => {
    return this.props.baseUrl + route;
  };
}

export class App extends React.Component {
  render() {
    return <div>
      <h1>Last.fm</h1>
      <Authenticator baseUrl='/api/lastfm/auth' />

      <h1>Strava</h1>
      <Authenticator baseUrl='/api/strava/auth' tokenParamKey='code' />
    </div>;
  }
}
