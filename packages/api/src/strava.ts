import axios from 'axios';
import * as express from 'express';
import * as querystring from 'querystring';

import { BASE_URL } from './constants';

const STRAVA_CALLBACK_URL = '/api/strava/auth/callback';

function buildAuthUrl() {
  const stravaUrl = 'https://www.strava.com/oauth/authorize';

  const args = {
    client_id: process.env.STRAVA_CLIENT_ID,
    redirect_uri: BASE_URL + STRAVA_CALLBACK_URL,
    response_type: 'code',
    scope: 'read,activity:read',
  };

  const qs = querystring.stringify(args);
  return `${stravaUrl}?${qs}`;
}

const respondAuthUrl = (req: express.Request, res: express.Response) => {
  const url = buildAuthUrl();
  res.json({ url });
};

const handleAuthCallback = (req: express.Request, res: express.Response) => {
  res.sendStatus(200);
};

const handleAuthFinalize = (req: express.Request, res: express.Response) => {
  const token = req.body.token;
  axios
    .post('https://www.strava.com/oauth/token', {
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: token,
    })
    .then(({ data }) => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.json({ error: 'some error' });
    });
};

export const registerRoutes = (router: express.Router) => {
  router.get('/api/strava/auth/url', respondAuthUrl);
  router.get(STRAVA_CALLBACK_URL, handleAuthCallback);
  router.post('/api/strava/auth/finalize', handleAuthFinalize);
};
