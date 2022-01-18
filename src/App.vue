<template>
  <div id="app" class="base">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  /* components:{
    Confirmation,
    FormRadioButton
  } */
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_mixin.scss";
@import "./assets/scss/_variables.scss";

#app {
  /*  display: flex;
  flex-direction: column; */
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $bg;
  font-size: 24px;
}
.base {
  @include container();
}
</style>
