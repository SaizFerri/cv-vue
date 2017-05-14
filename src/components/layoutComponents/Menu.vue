<template>
  <div id="app-menu">
    <div class="navbar-background fixed">
      <nav class="uk-container" uk-navbar>
        <div class="uk-navbar-left">
          <a class="uk-navbar-toggle uk-hidden@m" uk-toggle="target: #offcanvas-slide" uk-navbar-toggle-icon></a>
          <span class="uk-hidden@m my-name-responsive">ADRIAN SAIZ</span>
          <ul class="uk-navbar-nav uk-visible@m">
            <router-link to="/" tag="li"><a><img class="profile-pic" src="../../assets/perfil.jpg"></a></router-link>
            <router-link to="/" tag="li"><a class="uk-visible@s my-name">Adrian Saiz</a></router-link>
          </ul>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav uk-visible@m">
            <router-link to="/" tag="li" active-class="uk-active" exact><a class="menu-link" v-if="selectedLanguage == 'english'">Resume</a><a v-if="selectedLanguage == 'spanish'">Curriculum</a></router-link>
            <router-link to="/projects" tag="li" active-class="uk-active" exact><a class="menu-link" v-if="selectedLanguage == 'english'">Projects</a><a v-if="selectedLanguage == 'spanish'">Proyectos</a></router-link>
            <li class="uk-active">
              <a href="#" v-if="selectedLanguage == 'english'">Language</a>
              <a href="#" v-if="selectedLanguage == 'spanish'">Idiomas</a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav" >
                  <li :class="{'uk-active': selectedLanguage == 'english'}" @click="changeLanguage(english)"><a href="#">{{ english }}</a></li>
                  <li :class="{'uk-active': selectedLanguage == 'spanish'}" @click="changeLanguage(spanish)"><a href="#">{{ spanish }}</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div id="offcanvas-slide" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <ul class="uk-nav uk-nav-default">
            <router-link to="/" tag="li"><a><img class="profile-pic-responsive" src="../../assets/perfil.jpg"></a></router-link>
            <router-link to="/" tag="li" active-class="uk-active" exact><a v-if="selectedLanguage == 'english'">Resume</a><a v-if="selectedLanguage == 'spanish'">Curriculum</a></router-link>
            <router-link to="/projects" tag="li" active-class="uk-active" exact><a v-if="selectedLanguage == 'english'">Projects</a><a v-if="selectedLanguage == 'spanish'">Proyectos</a></router-link>
            <li class="uk-nav-divider"></li>
            <li class="uk-parent uk-nav">
              <span v-if="selectedLanguage == 'english'">Language</span>
              <span v-if="selectedLanguage == 'spanish'">Idiomas</span>
              <ul class="uk-nav-sub remove-left-padding">
                <li :class="{'uk-active': selectedLanguage == 'english'}" @click="changeLanguage(english)"><a href="#">{{ english }}</a></li>
                <li :class="{'uk-active': selectedLanguage == 'spanish'}" @click="changeLanguage(spanish)"><a href="#">{{ spanish }}</a></li>
              </ul>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import { mapState } from 'vuex'
export default {
  name: 'app-menu',
  data () {
    return {
      english: 'English',
      spanish: 'Spanish'
    }
  },
  computed: {
    ...mapState(['selectedLanguage', 'displayLanguages']),
    language () {
      return this.displayLanguages[this.selectedLanguage]
    }
  },
  methods: {
    changeLanguage (data) {
      this.$store.commit({
        type: 'changeLanguage',
        data
      })
    }
  }
}
</script>

<style scoped>
  .fixed {
    position: fixed;
    width: 100%;
    z-index: 1000;
  }
  .profile-pic {
    width: 60px;
    height:60px;
    border-radius: 50%;
  }

  .profile-pic-responsive {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .navbar-background {
    background-color: #EEF1EF;
  }

  .uk-offcanvas-bar {
    text-align: center;
  }

  .menu-link {

  }

  .menu-link:hover {
    background-color: #cccccc;
  }

  .my-name {
    text-decoration: none;
    color: black !important;
    font-size: 14pt;
  }

  .my-name:hover {
    background-color: #EEF1EF;
  }

  .my-name-responsive {
    padding: 10px;
    font-size: 14pt;
    color: black !important;
  }

  .remove-left-padding {
    padding-left: 0px;
  }
</style>
