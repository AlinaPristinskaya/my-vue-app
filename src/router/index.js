import Vue from "vue";
import VueRouter from "vue-router";
import FormRadioButton from "../views/FormRadioButton.vue";
import Confirmation from "../views/Confirmation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Confirmation,
  },
  {
    path: "/form-radio",
    component: FormRadioButton,
    name: "form-radio",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
