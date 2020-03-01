import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://api.github.com`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getRepositories() {
    return apiClient.get('/repositories');
  },
};
