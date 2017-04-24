<template>
  <div id="app-menu">
    <div class="navbar-background">
      <nav class="uk-container" uk-navbar>
        <div class="uk-navbar-left">
          <a class="uk-navbar-toggle uk-hidden@m" uk-toggle="target: #offcanvas-slide" uk-navbar-toggle-icon></a>
          <ul class="uk-navbar-nav uk-visible@m">
            <li><a><img class="profile-pic" src="../assets/perfil.jpg"></a></li>
            <li class="uk-active"><a href="#">Resume</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div id="offcanvas-slide" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <ul class="uk-nav uk-nav-default">
          <li><a><img class="profile-pic-responsive" src="../assets/perfil.jpg"></a></li>
          <li class="uk-active"><a>Resume</a></li>
          <li><a>Projects</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-menu'
}
</script>

<style scoped>
.profile-pic {
  width: 70px;
  height: 70px;
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



</style>
