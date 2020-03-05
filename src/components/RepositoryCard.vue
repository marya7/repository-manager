<template>
  <v-container>
    <v-card v-model="bookmark">
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
          @click="removeBookmark(repository)"
          icon
          color="#673ab7"
          class="button"
        >
          <i class="fas fa-bookmark fa-lg"></i>
        </v-btn>
        <v-btn v-else @click="addBookmark(repository)" icon color="#673ab7" class="button">
          <i class="far fa-bookmark fa-lg"></i>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import RepositoryService from '@/services/RepositoryService.js';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

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
      bookmark: {},
    };
  },
  methods: {
    addBookmark(bookmark) {
      this.bookmark = bookmark;
      this.$store.dispatch('addBookmark', this.bookmark);
    },
    removeBookmark(bookmark) {
      this.bookmark = bookmark;
      this.$store.dispatch('removeBookmark', this.bookmark);
    },
    isBookmark(bookmark) {
      return !!this.$store.state.bookmarks.find(b => b.id === bookmark.id);
    },
    showDetails(id) {
      this.$router.push({
        name: 'RepositoryDetail',
        params: { id },
      });
    },
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
