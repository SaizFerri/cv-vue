<template>
  <div>
    <h3>Work Experience</h3>
    <div v-for="job in workExperience" class="remove-grid-margin" uk-grid>
      <strong class="uk-width-1-3@l uk-width-1-3@m uk-width-1-1@s">
        <span>{{ job.years }}</span>
      </strong>
      <div class="uk-width-2-3@l uk-width-1-3@m uk-width-1-1@s">
        <strong><span>{{ job.description }}</span></strong>
        <div v-show="job.detail !== ''">
          <ul>
            <li v-for="task in job.detail">{{ task.task }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app-work-experience',
  computed: {
    ...mapState(['workExperience'])
  }
}
</script>

<style scoped>
h3 {
  margin-bottom: 10px;
}
.remove-grid-margin {
  margin: 0 !important;
  padding: 10px;
}
</style>
