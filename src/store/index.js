import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    bookmarks: [],
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
  },
  actions: {
    addBookmark({ commit }, bookmark) {
      commit('ADD_BOOKMARK', bookmark);
    },
    removeBookmark({ commit }, bookmark) {
      commit('REMOVE_BOOKMARK', bookmark);
    },
  },
});
