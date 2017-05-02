<template>
  <div class="app-home">
    <app-work-experience></app-work-experience>
    <app-educational-background></app-educational-background>
    <app-languages></app-languages>
    <app-programming-skills></app-programming-skills>
  </div>
</template>

<script>
import AppWorkExperience from './homeComponents/WorkExperience'
import AppEducationalBackground from './homeComponents/EducationalBackground'
import AppLanguages from './homeComponents/Languages'
import AppProgrammingSkills from './homeComponents/ProgrammingSkills'
export default {
  name: 'app-home',
  components: {
    AppWorkExperience,
    AppEducationalBackground,
    AppLanguages,
    AppProgrammingSkills
  }
}

</script>

<style>

</style>
