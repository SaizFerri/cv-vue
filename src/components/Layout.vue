<template>
  <div id="app-layout">
    <header>
      <app-menu></app-menu>
    </header>
    <div class="uk-container">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppMenu from './layoutComponents/Menu'
import AppFooter from './layoutComponents/Footer'
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
