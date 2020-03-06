import axios from 'axios';
import { Base64 } from 'js-base64';

const apiClient = axios.create({
  baseURL: `https://api.github.com`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'token 79026b1c302cd148e1cb900ad1852f685016abd7',
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
  async getStars(username, projectName) {
    const response = await apiClient.get(`/repos/${username}/${projectName}/stargazers`);
    return response.data.length;
  },
  async getForks(username, projectName) {
    const response = await apiClient.get(`/repos/${username}/${projectName}/forks`);
    return response.data.length;
  },
  async getReadme(username, projectName) {
    const response = await apiClient.get(`/repos/${username}/${projectName}/contents/README.md`);
    const content = await Base64.decode(response.data.content);
    return content;
  },
};
