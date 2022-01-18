<template>
  <div>
    <div class="header">
      <Logo />
      <div class="content">
        <form @submit.prevent="goChoice">
          <div v-for="item in checkedNames" :key="item" class="div">
            <label class="label"
              ><input
                v-model="checedInput"
                name="choice"
                type="radio"
                class="radio"
                v-bind:value="checkedNames.indexOf(item)"
              /><span class="icon"></span>
              {{ item }}
            </label>
          </div>
          <Button
            v-on:click.prevent="goChoice"
            text="Відправити"
            type="submit"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import Button from "../components/Button.vue";
import a from "../servicec/trackingApi";
export default {
  name: "FormRadioButton",
  components: {
    Logo,
    Button,
  },
  data() {
    return {
      checedInput: "",
      checkedNames: ["Підтвердити", "Скасувати", "Зателефонуйте мені"],
    };
  },
  methods: {
    async goChoice() {
      console.log(this.$store.state);
      const choiceValue = this.checedInput;
      const id = this.$store.state.trackingInfo.id;
      const body = { id: id, choice: choiceValue };
      console.log(body);
      if (choiceValue === 0 || choiceValue) {
        try {
          await a.fetchChoice(body).then((res) => {
            console.log(res);
            this.$store.commit("getChoice", body);
            console.log(this.$store.state);
          });
        } catch (error) {
          console.error(error);
        }
      }
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
