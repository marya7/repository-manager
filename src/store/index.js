import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import RepositoriesService from '@/services/RepositoryService.js';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    bookmarks: [],
    repositories: [],
  },
  mutations: {
    ADD_BOOKMARK(state, bookmark) {
      state.bookmarks.push(bookmark);
    },
    REMOVE_BOOKMARK(state, bookmark) {
      state.bookmarks = state.bookmarks.filter(b => {
        return b.id !== bookmark.id;
      });
    },
    SET_REPOSITORIES(state, repositories) {
      state.repositories = repositories;
    },
  },
  actions: {
    addBookmark({ commit }, bookmark) {
      commit('ADD_BOOKMARK', bookmark);
    },
    removeBookmark({ commit }, bookmark) {
      commit('REMOVE_BOOKMARK', bookmark);
    },
    fetchRepositories({ commit }) {
      RepositoriesService.getRepositories()
        .then(response => {
          commit('SET_REPOSITORIES', response);
        })
        .catch(error => {
          console.error('There was an error:', error.response);
        });
    },
  },
});
