<template>
  <div>
    <div class="header">
      <Logo />
      <div class="content">
        <p class="p">
          Для Вас запланована доставка продукції згідно замовлення {{}}
        </p>
        <p class="p">Плановий час доставки{{}}</p>
        <router-link to="/form-radio">
          <Button text="Перейти до форми підтвердження" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Logo from "../components/Logo.vue";

export default {
  name: "Confirmation",
  components: {
    Logo,
    Button,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_reset.scss";
.header {
  display: flex;
}
.content {
  display: flex;
  flex-direction: column;
  color: white;
  padding-top: 5px;
  justify-content: space-around;
}
</style>
