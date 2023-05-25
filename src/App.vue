<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/settings">Settings</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div id="router-view">
    <router-view />
  </div>
</template>

<style lang="less">
@text-color: #333;
@link-color: @text-color;
@nav-height: 100px;

body,
html {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  #app {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: @text-color;

    nav {
      height: @nav-height;
      display: flex;
      align-items: center;

      a {
        color: @link-color;
        text-transform: none;
        text-decoration: none;
        font-weight: bold;
        margin: 0 1rem;
      }
    }

    #router-view {
      width: 100vw;
      height: calc(100vh - @nav-height);

      > div {
        height: 100%;
      }
    }
  }
}
</style>
