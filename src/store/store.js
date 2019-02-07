import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    color: ""
  },
  mutations: {
    updateColor(state, color) {
      state.color = color;
    }
  },
  getters: {
    color: state => state.color
  }
});
