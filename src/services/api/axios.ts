import axios from 'axios';

import { appConfig } from '../../config';

export const api = axios.create({
  baseURL: appConfig.apiUrl,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const addAuthHeader = (token: string) => ({
  Authorization: `${token}`
});
