import * as express from 'express';
import * as LastfmAPI from 'lastfmapi';
import * as util from 'util';

import { BASE_URL } from './constants';

const lfm = new LastfmAPI({
  api_key: process.env.LAST_FM_API_KEY,
  secret: process.env.LAST_FM_SHARED_SECRET,
});

const LAST_FM_CALLBACK_URL = '/api/lastfm/auth/callback';

const respondAuthUrl = (req: express.Request, res: express.Response) => {
  const url = lfm.getAuthenticationUrl({
    cb: BASE_URL + LAST_FM_CALLBACK_URL,
  });
  res.json({ url });
};

const handleAuthCallback = (req: express.Request, res: express.Response) => {
  res.sendStatus(200);
};

const handleAuthFinalize = (req: express.Request, res: express.Response) => {
  const token = req.body.token;
  lfm.authenticate(token, (err: any, session: object | null) => {
    if (err) {
      res.status(500).json(util.inspect(err));
    } else {
      res.json(session);
    }
  });
};

export const registerRoutes = (router: express.Router) => {
  router.get('/api/lastfm/auth/url', respondAuthUrl);
  router.get(LAST_FM_CALLBACK_URL, handleAuthCallback);
  router.post('/api/lastfm/auth/finalize', handleAuthFinalize);
};
