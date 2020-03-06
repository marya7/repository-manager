<template>
  <v-app-bar app color="deep-purple" dark>
    <v-toolbar-title>
      Repository manager
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-for="link in links" :key="`${link.label}-header-link`" text rounded :to="link.url">
      {{ link.label }}
    </v-btn>
    <v-btn text rounded to="/bookmarks">
      <v-badge color="pink" :content="bookmark.bookmarks.length">
        Bookmarks
      </v-badge>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      links: [
        {
          label: 'Repositories',
          url: '/',
        },
      ],
    };
  },
  computed: {
    ...mapState(['bookmark']),
  },
};
</script>
