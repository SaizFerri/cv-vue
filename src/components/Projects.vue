<template>
  <div id="app-projects margin-top">
    <div v-if="projects.length === 0" class="uk-flex uk-flex-center spinner-container margin-top">
      <div uk-spinner class="uk-spinner uk-icon"></div>
    </div>
    <div v-if="projects.length === 0" class="uk-flex uk-flex-center spinner-container">
      <span>Retriving the projects</span>
    </div>
    <table v-if="projects.length > 0" class="uk-table uk-table-striped margin-top">
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Last Updated</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects">
          <td>{{ project.name }}</td>
          <td>{{ project.updated_at | formatDate }}</td>
          <td><a :href="project.html_url"><i class="fa fa-code"></i></a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'app-projects',
    computed: {
      ...mapState(['projects'])
    },
    created () {
      this.fetchRepos()
    },
    methods: {
      ...mapActions(['fetchRepos'])
    }
  }
</script>

<style scoped>
  .margin-top {
    margin-top: 90px;
  }
  .spinner-container {
    padding: 20px;
  }
</style>
