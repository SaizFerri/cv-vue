<template>
  <header>
    <app-menu></app-menu>
    <div class="uk-container">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </header>
</template>

<script>
import AppMenu from './Menu'
import AppFooter from './Footer'
export default {
  name: 'app-layout',
  components: {
    AppMenu,
    AppFooter
  }
}

</script>

<style>

</style>
