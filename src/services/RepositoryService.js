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
    return response.data;
  },
  async getRepository(id) {
    const response = await apiClient.get(`/repositories/${id}`);
    return response.data;
  },
};
