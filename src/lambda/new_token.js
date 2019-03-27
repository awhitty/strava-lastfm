import 'dotenv/config';
import axios from 'axios';

import { STRAVA_CLIENT_ID } from '../constants';

export const handler = (event, context, callback) => {
  const body = JSON.parse(event.body);

  axios
    .post('https://www.strava.com/oauth/token', {
      client_id: STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: body.code,
    })
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res.data),
      });
    })
    .catch(err => {
      console.log(err.response.statusText);
    });
};
