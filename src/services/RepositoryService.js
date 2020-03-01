import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://api.github.com`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  async getRepositories() {
    const response = await apiClient.get('/repositories');
    return await response.data;
  },
};
