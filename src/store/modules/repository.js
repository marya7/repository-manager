import RepositoryService from '@/services/RepositoryService.js';

export const state = {
  repositories: [],
};

export const mutations = {
  SET_REPOSITORIES(state, repositories) {
    state.repositories = repositories;
  },
};

export const actions = {
  fetchRepositories({ commit }) {
    RepositoryService.getRepositories()
      .then(response => {
        commit('SET_REPOSITORIES', response);
      })
      .catch(error => {
        console.error('There was an error:', error.response);
      });
  },
};
