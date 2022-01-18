<template>
  <div id="app" class="base">
    <Notification />
    <router-view></router-view>
  </div>
</template>

<script>
import Notification from "./components/Notification.vue";
export default {
  name: "App",
  components: {
    Notification,
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_mixin.scss";
@import "./assets/scss/_variables.scss";

#app {
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
