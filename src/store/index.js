import Vue from "vue";
import Vuex from "vuex";
import a from "../servicec/trackingApi";

Vue.use(Vuex);

const initialState = {
  trackingInfo: "",
  choice: "",
};

const store = new Vuex.Store({
  state: { ...initialState },
  mutations: {
    getTracking(state, tracking) {
      state.trackingInfo = tracking;
    },
    getChoice(state, data) {
      state.choice = data.choice;
    },
  },
  actions: {
    async getTracking({ commit }, payload) {
      const { data } = await a.fetchTrackingId(payload);
      console.log(data);
      commit("getTracking", data);
    },
    async patchChoice({ commit }, payload) {
      const { data } = await a.fetchChoice(payload);
      console.log(data);
      commit("getChoice", data.isChoice);
    },
  },
  modules: {},
});
export default store;
