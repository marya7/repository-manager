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
<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
