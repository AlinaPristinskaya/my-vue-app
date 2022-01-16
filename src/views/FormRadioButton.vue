<template>
  <div class="header">
    <Logo />
    <div>
      <form class="content">
        <div v-bind="item" v-for="item in checkedNames" :key="item" class="div">
          <label class="label"
            ><input
              name="choice"
              type="radio"
              class="radio"
              value="item"
              v-model="user"
            /><span class="icon"></span>
            {{ item }}
          </label>
        </div>
        <Button text="Відправити" />
      </form>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import Button from "../components/Button.vue";
export default {
  name: "FormRadioButton",
  components: {
    Logo,
    Button,
  },
  data() {
    return {
      checkedNames: ["Підтвердити", "Скасувати", "Зателефонуйте мені"],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_reset.scss";
.header {
  width: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  color: white;
}
.radio {
  margin: 15px;
  appearance: none;
}
.icon {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 20px;
  margin-right: 15px;
  border: 4px solid;
  border-color: white;
}
.radio:checked + .icon {
  background-color: black;
}
.label {
  display: block;
  height: 50px;
}
</style>
