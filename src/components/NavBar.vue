<template>
  <v-app-bar app color="deep-purple" dark>
    <v-toolbar-title>
      Repository manager
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-for="link in links" :key="`${link.label}-header-link`" text rounded :to="link.url">
      <v-badge
        v-if="link.hasBadge && bookmarks.length > 0"
        color="pink"
        :content="bookmarks.length"
      >
        {{ link.label }}
      </v-badge>
      <div v-else>{{ link.label }}</div>
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
        {
          label: 'Bookmarks',
          url: '/bookmarks',
          hasBadge: true,
        },
      ],
    };
  },
  computed: mapState({
    bookmarks: state => state.bookmark.bookmarks,
  }),
};
</script>
