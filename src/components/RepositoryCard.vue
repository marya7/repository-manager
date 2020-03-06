<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{ repository.name }}
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col class="pt-0 pb-1">
            <i class="fa fa-user pr-1"></i>
            {{ repository.owner.login }}
          </v-col>
        </v-row>
        <v-row>
          <v-col v-if="stars === null" class="pt-0 pb-1">
            <pulse-loader color="grey" size="10px"></pulse-loader>
          </v-col>
          <v-col v-else class="pt-0 pb-1">
            <i class="fa fa-star pr-1"></i>
            {{ stars }}
          </v-col>
        </v-row>
        <v-row>
          <v-col v-if="forks === null" class="pt-0 pb-1">
            <pulse-loader color="grey" size="10px"></pulse-loader>
          </v-col>
          <v-col v-else class="pt-0 pb-1">
            <i class="fa fa-code-fork pr-2"></i>
            {{ forks }}
          </v-col>
        </v-row>
        <v-btn @click="showDetails(repository.id)" icon color="#673ab7" class="info-button button">
          <i class="fas fa-info-circle fa-lg"></i>
        </v-btn>
        <v-btn
          v-if="isBookmark(repository)"
          @click="
            removeBookmark(repository);
            displaySnackbar('Bookmark has been removed');
          "
          icon
          color="#673ab7"
          class="button"
        >
          <i class="fas fa-bookmark fa-lg"></i>
        </v-btn>
        <v-btn
          v-else
          @click="
            addBookmark(repository);
            displaySnackbar('Bookmark has been added');
          "
          icon
          color="#673ab7"
          class="button"
        >
          <i class="far fa-bookmark fa-lg"></i>
        </v-btn>
        <v-snackbar v-model="snackbar">
          {{ snackbarText }}
          <v-btn color="pink" text @click="snackbar = false">
            Close
          </v-btn>
        </v-snackbar>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import RepositoryService from '@/services/RepositoryService.js';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    PulseLoader,
  },
  props: {
    repository: Object,
  },
  data() {
    return {
      stars: null,
      forks: null,
      snackbarText: null,
      snackbar: false,
    };
  },
  computed: mapState({
    bookmarks: state => state.bookmark.bookmarks,
  }),
  methods: {
    addBookmark(repository) {
      this.$store.dispatch('addBookmark', repository);
    },
    removeBookmark(repository) {
      this.$store.dispatch('removeBookmark', repository);
    },
    isBookmark(repository) {
      return !!this.bookmarks.find(b => b.id === repository.id);
    },
    showDetails(id) {
      this.$router.push({
        name: 'RepositoryDetail',
        params: { id },
      });
    },
    displaySnackbar(text) {
      this.snackbar = true;
      this.snackbarText = text;
    },
    ...mapActions('bookmark', ['addBookmark', 'removeBookmark']),
  },
  async created() {
    const { owner, name } = this.repository;
    this.stars = await RepositoryService.getStars(owner.login, name);
    this.forks = await RepositoryService.getForks(owner.login, name);
  },
};
</script>

<style scoped>
.button {
  float: right;
  margin-top: -80px;
}
.info-button {
  margin-right: 35px;
}
</style>
