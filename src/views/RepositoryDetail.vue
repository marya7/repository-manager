<template>
  <v-container>
    <h1>Repository details</h1>
    <p v-if="loading">Loading</p>
    <p v-else-if="convertedReadme" v-html="convertedReadme">{{ convertedReadme }}</p>
    <p v-else>There is no README file to display.</p>
  </v-container>
</template>

<script>
import RepositoryService from '@/services/RepositoryService.js';
import showdown from 'showdown';

export default {
  props: ['id'],
  data() {
    return {
      convertedReadme: null,
      loading: true,
    };
  },
  async created() {
    const { owner, name } = await RepositoryService.getRepository(this.id);
    const readme = await RepositoryService.getReadme(owner.login, name);

    if (readme) {
      const converter = new showdown.Converter();
      this.convertedReadme = converter.makeHtml(readme);
    }

    this.loading = false;
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 15px;
}
</style>
