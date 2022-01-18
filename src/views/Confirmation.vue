<template>
  <div>
    <div class="header">
      <Logo />
      <div class="content">
        <p class="p">
          Для Вас запланована доставка продукції згідно замовлення
          {{ trackings.Name }}cvbcghncghncgngvbcxfb
        </p>
        <p class="p">Плановий час доставки{{}}</p>
        <router-link to="/choice">
          <Button text="Перейти до форми підтвердження" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Logo from "../components/Logo.vue";
import a from "../servicec/trackingApi";

export default {
  name: "Confirmation",
  components: {
    Logo,
    Button,
  },
  data() {
    return { tracking: {} };
  },
  async created() {
    const codeTtacking = this.$route.params.Code;
    console.log(codeTtacking);
    if (codeTtacking) {
      try {
        const { data } = await a.fetchTracking(codeTtacking);
        this.tracking = data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  },
  computed: {
    trackings() {
      return this.tracking;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_reset.scss";

.header {
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  flex-direction: column;
  color: white;
  padding: 20px;
  :not(:last-child) {
    margin-bottom: 15px;
  }
}
</style>
