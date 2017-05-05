<template>
  <div>
    <div v-if="selectedLanguage.english">
      <h2>{{ english.titles.languages }}</h2><hr>
      <div v-for="language in english.languages" class="remove-grid-margin" uk-grid>
        <strong class="uk-width-1-3@l uk-width-1-3@m uk-width-1-1@s">
          <span>{{ language.language }}</span>
        </strong>
        <div class="uk-width-2-3@l uk-width-1-3@m uk-width-1-1@s">
          <span>{{ language.skill }}</span>
        </div>
      </div>
    </div>
    <div v-if="selectedLanguage.spanish">
      <h2>{{ spanish.titles.languages }}</h2><hr>
      <div v-for="language in spanish.languages" class="remove-grid-margin" uk-grid>
        <strong class="uk-width-1-3@l uk-width-1-3@m uk-width-1-1@s">
          <span>{{ language.language }}</span>
        </strong>
        <div class="uk-width-2-3@l uk-width-1-3@m uk-width-1-1@s">
          <span>{{ language.skill }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app-languages',
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
