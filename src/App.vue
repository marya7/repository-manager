<template>
  <v-app>
    <div id="app">
      <NavBar />

      <v-content>
        <router-view />
      </v-content>

      <v-footer absolute class="font-weight-medium">
        <v-col class="text-center" cols="12">
          <strong>Repository manager</strong>
        </v-col>
      </v-footer>
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
