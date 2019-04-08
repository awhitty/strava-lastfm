import axios from 'axios';

import { BASE_URL } from './constants';

export class API {
  static post<Data, Response>(endpoint: string, data: Data): Promise<Response> {
    return axios.post(BASE_URL + '/api/strava', data).then(res => res.data);
  }
}
