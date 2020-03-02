<template>
  <div>
    <h2>Repository details</h2>
    <h4>{{ repository.name }}</h4>
  </div>
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
