import axios from 'axios';

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://frosty-kare-c2b900.netlify.com'
    : 'http://localhost:3000';

export class API {
  static post<Data, Response>(endpoint: string, data: Data): Promise<Response> {
    return axios.post(BASE_URL + '/api/strava', data).then(res => res.data);
  }
}
