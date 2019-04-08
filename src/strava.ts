import Url from 'url-parse';

import { STRAVA_CLIENT_ID, BASE_URL } from './constants';
import { API } from './api';
import axios from 'axios';
import { DetailedAthlete } from './types/strava';

const buildAuthUrl = () => {
  const stravaUrl = 'https://www.strava.com/oauth/authorize';
  const redirectUri = BASE_URL + '/auth';
  const clientId = STRAVA_CLIENT_ID;
  const scope = 'read,activity:read';
  return `${stravaUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
};

export function startAuth() {
  const url = buildAuthUrl();
  window.location.href = url;
}

export function shouldFinalizeAuth() {
  return window.location.pathname === '/auth' && window.location.search;
}

export function finalizeAuth() {
  const url = new Url(window.location.toString(), true);
  return API.post<object, StravaAuthResponse>('/api/strava', url.query);
}

interface StravaAuthResponse {
  token_type: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  access_token: string;
  athlete: DetailedAthlete;
}

export class StravaV3 {
  private accessToken: string | null = null;
  public authenticated: boolean = false;
  public athelete: DetailedAthlete | null = null;

  public initialize = async () => {
    if (shouldFinalizeAuth()) {
      const data = await finalizeAuth();
      this.accessToken = data.access_token;
      this.athelete = data.athlete;
      this.authenticated = true;
    }
  };

  public authenticate = async () => {
    await startAuth();
  };

  public getStats = () => {
    return this.get(`/athletes/${this.athelete!.id}/stats`);
  };

  private get(endpoint: string) {
    const url = `https://www.strava.com/api/v3${endpoint}`;

    const headers = {
      Authorization: `Bearer ${this.accessToken}`,
    };

    return axios.get(url, { headers }).then(res => res.data);
  }
}
