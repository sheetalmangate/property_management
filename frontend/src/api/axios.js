/**
 * axios ref link https://courses.bigbinaryacademy.com/learn-react/http-requests-with-axios/adding-axios-interceptors/
 */

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type':'application/json'
  }
});

export default api;