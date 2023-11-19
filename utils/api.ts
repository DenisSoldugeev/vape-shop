import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3003/api',
  // другие глобальные настройки
});

export default api;
