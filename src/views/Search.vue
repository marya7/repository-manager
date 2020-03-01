<template>
  <div>
    <h1>Repositories</h1>
    <RepositoryCard
      v-for="repository in repositories"
      :key="repository.id"
      :repository="repository"
    />
  </div>
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
  created() {
    RepositoryService.getRepositories()
      .then(response => {
        this.repositories = response.data;
      })
      .catch(error => {
        console.log('There was an error:', error.response);
      });
  },
};
</script>
