import axios from 'axios';

const index = axios.create({
  baseURL: 'http://localhost:3003/api',
  // другие глобальные настройки
});

export default index;
