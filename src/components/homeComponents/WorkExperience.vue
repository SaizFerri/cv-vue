<template>
  <div class="app-work-experience margin-top">
    <div v-if="selectedLanguage.english">
      <h2>{{ english.titles.work }}</h2><hr>
      <div v-for="job in english.workExperience" class="remove-grid-margin" uk-grid>
        <strong class="uk-width-1-3@l uk-width-1-3@m uk-width-1-1@s">
          <span>{{ job.years }}</span>
        </strong>
        <div class="uk-width-2-3@l uk-width-1-3@m uk-width-1-1@s">
          <span>{{ job.description }}</span>
          <div v-show="job.detail !== ''">
            <ul class="tasks">
              <li v-for="task in job.detail">{{ task.task }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-if="selectedLanguage.spanish">
      <h2>{{ spanish.titles.work }}</h2><hr>
      <div v-for="job in spanish.workExperience" class="remove-grid-margin" uk-grid>
        <strong class="uk-width-1-3@l uk-width-1-3@m uk-width-1-1@s">
          <span>{{ job.years }}</span>
        </strong>
        <div class="uk-width-2-3@l uk-width-1-3@m uk-width-1-1@s">
          <span>{{ job.description }}</span>
          <div v-show="job.detail !== ''">
            <ul class="tasks">
              <li v-for="task in job.detail">{{ task.task }}</li>
            </ul>
          </div>
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
    ...mapState(['selectedLanguage', 'english', 'spanish'])
  }
}
</script>

<style scoped>
  .margin-top {
    margin-top: 100px;
  }
  h2 {
    margin: 20px 0 10px 0;
  }
  .remove-grid-margin {
    margin: 0 !important;
    padding: 10px;
  }
  .tasks li {
    font-size: 12pt !important;
  }
</style>
