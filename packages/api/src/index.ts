require('dotenv/config');

import * as bodyParser from 'body-parser';
import * as express from 'express';

import * as strava from './strava';
import * as lastfm from './lastfm';

const app = express();
const router: express.Router = express.Router();

app.use(bodyParser.json());
app.use('/.netlify/functions/', router);

strava.registerRoutes(router);
lastfm.registerRoutes(router);

if (typeof require != 'undefined' && require.main == module) {
  const morgan = require('morgan');
  app.use(morgan('dev'));
  app.listen(9000, () => console.log('Local app listening on port 9000!'));
}

export default app;
