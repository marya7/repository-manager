<template>
  <v-container>
    <h1>Repository details</h1>
    <h4>{{ repository.name }}</h4>
  </v-container>
</template>

<script>
import RepositoryService from '@/services/RepositoryService.js';

export default {
  props: ['id'],
  data() {
    return {
      repository: {},
    };
  },
  async created() {
    this.repository = await RepositoryService.getRepository(this.id);
  },
};
</script>
