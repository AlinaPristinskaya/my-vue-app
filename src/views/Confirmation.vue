<template>
  <div>
    <div class="header">
      <Logo />
      <div class="content">
        <p>Для Вас запланована доставка продукції згідно замовлення {{}}</p>
        <p>Плановий час доставки{{}}</p>
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
.header {
  display: flex;
  flex-direction: column;
}
.content {
  color: white;
}
</style>
