<template>
  <div>
    <h2>{{ displayLanguage.titles.languages }}</h2><hr>
    <div v-for="language in displayLanguage.languages" class="remove-grid-margin" uk-grid>
      <strong class="uk-width-1-3@l uk-width-1-3@m uk-width-1-1@s">
        <span>{{ language.language }}</span>
      </strong>
      <div class="uk-width-2-3@l uk-width-1-3@m uk-width-1-1@s">
        <span>{{ language.skill }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app-languages',
  computed: {
    ...mapState(['selectedLanguage', 'displayLanguages']),
    displayLanguage () {
      return this.displayLanguages[this.selectedLanguage]
    }
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
