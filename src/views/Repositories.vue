<template>
  <v-container>
    <h1>Repositories</h1>
    <pulse-loader v-if="repositories.length === 0" color="#673ab7"></pulse-loader>
    <RepositoryCard
      v-else
      v-for="repository in repositories"
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
    };
  },
  async created() {
    this.repositories = await RepositoryService.getRepositories();
  },
};
</script>
