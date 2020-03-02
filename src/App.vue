<template>
  <v-app>
    <div id="app">
      <NavBar />

      <v-content>
        <router-view />
      </v-content>

      <v-footer app absolute color="deep-purple" height="35"> </v-footer>
    </div>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>
