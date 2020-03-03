<template>
  <v-container>
    <h1>Repository details</h1>
    <pulse-loader v-if="loading" color="#673ab7"></pulse-loader>
    <p v-else-if="convertedReadme" v-html="convertedReadme">{{ convertedReadme }}</p>
    <p v-else>There is no README file to display.</p>
  </v-container>
</template>

<script>
import RepositoryService from '@/services/RepositoryService.js';
import showdown from 'showdown';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
  components: {
    PulseLoader,
  },
  props: ['id'],
  data() {
    return {
      convertedReadme: null,
      loading: true,
    };
  },
  async created() {
    const { owner, name } = await RepositoryService.getRepository(this.id);

    try {
      const readme = await RepositoryService.getReadme(owner.login, name);
      if (readme) {
        const converter = new showdown.Converter();
        this.convertedReadme = converter.makeHtml(readme);
      }
      this.loading = false;
    } catch {
      this.loading = false;
    }
  },
};
</script>
