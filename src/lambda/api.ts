import 'dotenv/config';

import axios from 'axios';
import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import serverless from 'serverless-http';

import { STRAVA_CLIENT_ID } from '../constants';

const router: express.Router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

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

app.use('/.netlify/functions/', router);

export default app;
export const handler = serverless(app);