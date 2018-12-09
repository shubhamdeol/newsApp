import axios from 'axios';
import env from './env';

const authToken = '44d47afe3d754dff914083a051a0a68b';

const instance = axios.create({
  baseURL: env.apiUrl,
});

instance.defaults.headers.Authorization = `Bearer ${authToken}`;

export default instance;
