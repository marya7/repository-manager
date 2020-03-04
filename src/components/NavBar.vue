<template>
  <v-app-bar app color="deep-purple" dark>
    <v-toolbar-title>
      Repository manager
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-for="link in links" :key="`${link.label}-header-link`" text rounded :to="link.url">
      {{ link.label }}
    </v-btn>
  </v-app-bar>
</template>

<script>
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
        },
      ],
    };
  },
};
</script>
