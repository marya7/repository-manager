<template>
  <v-container>
    <router-link :to="{ name: 'RepositoryDetail', params: { id: repository.id } }">
      <v-card>
        <v-card-title> {{ repository.name }} </v-card-title>
        <v-card-text>
          {{ repository.full_name }}
        </v-card-text>
      </v-card>
    </router-link>
  </v-container>
</template>

<script>
export default {
  props: {
    repository: Object,
  },
};
</script>
