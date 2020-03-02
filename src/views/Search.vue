<template>
  <v-container>
    <h1>Repositories</h1>
    <RepositoryCard
      v-for="repository in repositories"
      :key="repository.id"
      :repository="repository"
    />
  </v-container>
</template>

<script>
import RepositoryCard from '@/components/RepositoryCard.vue';
import RepositoryService from '@/services/RepositoryService.js';

export default {
  components: {
    RepositoryCard,
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
