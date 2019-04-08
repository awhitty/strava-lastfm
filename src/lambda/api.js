import * as serverless from 'serverless-http';

import app from '../routes';

export const handler = serverless(app);
