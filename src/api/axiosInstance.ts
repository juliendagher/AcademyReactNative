import axios from 'axios';
import Config from 'react-native-config';

const a = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export {a};
