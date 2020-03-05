import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as repository from '@/store/modules/repository.js';
import * as bookmark from '@/store/modules/bookmark.js';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    repository,
    bookmark,
  },
});
