<template>
  <v-container>
    <router-link :to="{ name: 'RepositoryDetail', params: { id: repository.id } }">
      <v-card>
        <v-card-title>
          {{ repository.name }}
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col class="pt-0 pb-1">
              <i class="fa fa-user pr-1"></i>
              {{ repository.owner.login }}
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0 pb-1">
              <i class="fa fa-star pr-1"></i>
              {{ stars }}
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0 pb-1">
              <i class="fa fa-code-fork pr-1"></i>
              {{ forks }}
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </router-link>
  </v-container>
</template>

<script>
import RepositoryService from '@/services/RepositoryService.js';

export default {
  props: {
    repository: Object,
  },
  data() {
    return {
      stars: null,
      forks: null,
    };
  },
  async created() {
    const { owner, name } = this.repository;
    this.stars = await RepositoryService.getStars(owner.login, name);
    this.forks = await RepositoryService.getForks(owner.login, name);
  },
};
</script>
