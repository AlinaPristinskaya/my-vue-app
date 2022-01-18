<template>
  <div>
    <div class="header">
      <Logo />
      <div class="content">
        <form>
          <div
            v-bind="item"
            v-for="item in checkedNames"
            :key="item"
            class="div"
          >
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
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  flex-direction: column;
  color: white;
  padding: 20px;
  align-items: center;
  width: 100%;
  :not(:last-child) {
    margin-bottom: 15px;
  }
}
.radio {
  margin: 5px 10px;
  appearance: none;
}
.icon {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  background-color: white;
  border-radius: 20px;
  margin-right: 5px;
  margin-left: -20px;
  border: 2px solid;
  border-color: white;
}
.radio:checked + .icon {
  background-color: black;
}
.label {
  display: block;
  padding: 3px 0px;
}
</style>
