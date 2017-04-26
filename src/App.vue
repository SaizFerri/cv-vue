<template>
  <div id="app">
    <app-layout></app-layout>
  </div>
</template>

<script>
import AppLayout from './components/Layout'
export default {
  name: 'app',
  components: {
    AppLayout
  }
}
</script>

<style>
body {
  font-size: 14pt !important;
}
</style>
