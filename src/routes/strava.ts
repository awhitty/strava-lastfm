import axios from 'axios';
import * as express from 'express';

import { STRAVA_CLIENT_ID } from '../constants';

export const registerRoutes = (router: express.Router) => {
  router.post('/api/strava', (req, res) => {
    axios
      .post('https://www.strava.com/oauth/token', {
        client_id: STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: req.body.code,
      })
      .then(({ data }) => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
        res.json({ error: 'some error' });
      });
  });
};
