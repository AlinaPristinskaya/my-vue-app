<template>
  <div>
    <div class="header">
      <Logo />
      <div class="content">
        <p class="p">
          Для Вас запланована доставка продукції згідно замовлення
          {{ trackings.Name }}
        </p>
        <p class="p">Плановий час доставки {{ tracking.EstimateTime }}</p>
        <router-link to="/choice">
          <Button text="Перейти до форми підтвердження" type="button" />
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
    const id = this.$route.params.id;
    console.log(id);
    if (id) {
      try {
        await a.fetchTrackingId(id).then((res) => {
          this.tracking = res;
          this.$store.commit("getTracking", res);
          console.log(this.$store.state);
        });
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
