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
    <pulse-loader v-if="repositories.length === 0" color="#673ab7" class="my-6 mx-3"></pulse-loader>
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
import RepositoryService from '@/services/RepositoryService.js';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
  components: {
    RepositoryCard,
    PulseLoader,
  },
  data() {
    return {
      repositories: [],
      searchQuery: null,
    };
  },
  computed: {
    filteredRepositories() {
      if (this.searchQuery) {
        return this.repositories.filter(item => {
          return item.name.startsWith(this.searchQuery);
        });
      } else {
        return this.repositories;
      }
    },
  },
  async created() {
    this.repositories = await RepositoryService.getRepositories();
  },
};
</script>
