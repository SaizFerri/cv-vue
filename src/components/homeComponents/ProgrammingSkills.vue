<template>
  <div>
    <div v-if="selectedLanguage.english">
      <h2>{{ english.titles.skills }}</h2><hr>
      <div v-for="languages in english.programmingSkills" class="remove-grid-margin" uk-grid>
        <strong class="uk-width-1-3@l uk-width-1-3@m uk-width-1-1@s">
          <span>{{ languages.label }}</span>
        </strong>
        <div class="uk-width-2-3@l uk-width-1-3@m uk-width-1-1@s">
          <span>{{ languages.languages }}</span>
        </div>
      </div>
    </div>
    <div v-if="selectedLanguage.spanish">
      <h2>{{ spanish.titles.skills }}</h2><hr>
      <div v-for="languages in spanish.programmingSkills" class="remove-grid-margin" uk-grid>
        <strong class="uk-width-1-3@l uk-width-1-3@m uk-width-1-1@s">
          <span>{{ languages.label }}</span>
        </strong>
        <div class="uk-width-2-3@l uk-width-1-3@m uk-width-1-1@s">
          <span>{{ languages.languages }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app-programming-skills',
  computed: {
    ...mapState(['selectedLanguage', 'english', 'spanish'])
  }
}
</script>

<style scoped>
  h2 {
    margin: 20px 0 10px 0;
  }
  .remove-grid-margin {
    margin: 0 !important;
    padding: 10px;
  }
</style>
