<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/settings">Settings</router-link> |
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="less">
@text-color: #333;
@link-color: @text-color;

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @text-color;

  nav {
    padding: 30px;
  }

  a {
    color: @link-color;
    text-transform: none;
    text-decoration: none;
    font-weight: bold;
  }
}
</style>
