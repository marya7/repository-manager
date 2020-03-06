<template>
  <v-container>
    <h1 class="mx-3">Repositories</h1>
    <v-text-field
      class="mx-3 my-3"
      flat
      rounded
      hide-details
      label="repository name"
      prepend-inner-icon="search"
      filled
      v-model="searchQuery"
    ></v-text-field>
    <pulse-loader
      v-if="repository.repositories.length === 0"
      color="#673ab7"
      class="my-6 mx-3"
    ></pulse-loader>
    <RepositoryCard
      v-else
      v-for="repository in filteredRepositories"
      :key="repository.id"
      :repository="repository"
    />
  </v-container>
</template>

<script>
import RepositoryCard from '@/components/RepositoryCard.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { mapState } from 'vuex';

export default {
  components: {
    RepositoryCard,
    PulseLoader,
  },
  data() {
    return {
      searchQuery: null,
    };
  },
  computed: {
    filteredRepositories() {
      if (this.searchQuery) {
        return this.repository.repositories.filter(item => {
          return item.name.startsWith(this.searchQuery);
        });
      } else {
        return this.repository.repositories;
      }
    },
    ...mapState(['repository']),
  },
  async created() {
    this.$store.dispatch('fetchRepositories');
  },
};
</script>
