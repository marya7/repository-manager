import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookmarks: [],
  },
  mutations: {
    ADD_BOOKMARK(state, bookmark) {
      state.bookmarks.push(bookmark);
    },
  },
  actions: {
    addBookmark({ commit }, bookmark) {
      commit('ADD_BOOKMARK', bookmark);
    },
  },
});
