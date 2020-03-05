export const namespaced = true;

export const state = {
  bookmarks: [],
};

export const mutations = {
  ADD_BOOKMARK(state, bookmark) {
    state.bookmarks.push(bookmark);
  },
  REMOVE_BOOKMARK(state, bookmark) {
    state.bookmarks = state.bookmarks.filter(b => {
      return b.id !== bookmark.id;
    });
  },
};

export const actions = {
  addBookmark({ commit }, bookmark) {
    commit('ADD_BOOKMARK', bookmark);
  },
  removeBookmark({ commit }, bookmark) {
    commit('REMOVE_BOOKMARK', bookmark);
  },
};
