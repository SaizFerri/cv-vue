<template>
  <div class="app-home">
    <app-work-experience></app-work-experience>
    <app-educational-background></app-educational-background>
    <app-languages></app-languages>
  </div>
</template>

<script>
import AppWorkExperience from './homeComponents/WorkExperience'
import AppEducationalBackground from './homeComponents/EducationalBackground'
import AppLanguages from './homeComponents/Languages'
export default {
  name: 'app-home',
  components: {
    AppWorkExperience,
    AppEducationalBackground,
    AppLanguages
  }
}

</script>

<style>

</style>
