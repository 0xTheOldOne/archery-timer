<template>
  <router-view />
</template>

<style lang="less">
@text-color: #fefefe;
@background-color: #333;

body,
html {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: @background-color !important;

  #app {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    font-size: 12px;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: @text-color;
    background-color: @background-color;

    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (min-width: 800px) {
      width: 800px;
      margin: 0 auto;
      position: relative;
    }
  }
}
</style>
