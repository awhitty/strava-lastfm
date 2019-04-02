import Url from 'url-parse';

import { STRAVA_CLIENT_ID } from './constants';
import { BASE_URL, API } from './api';
import axios from 'axios';

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

interface StravaAthlete {
  id: number;
  username: string;
  resource_state: number;
  firstname: string;
  lastname: string;
  city: string;
  state: string;
  country: string;
  sex: string;
  premium: boolean;
  summit: boolean;
  created_at: string;
  updated_at: string;
  badge_type_id: number;
  profile_medium: string;
  profile: string;
  friend: any; // TODO: Figure out what these values are
  follower: any; // TODO: Figure out what these values are
}

interface StravaAuthResponse {
  token_type: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  access_token: string;
  athlete: StravaAthlete;
}

export class StravaV3 {
  private accessToken: string | null = null;
  public authenticated: boolean = false;
  public athelete: StravaAthlete | null = null;

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