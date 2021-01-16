import Vuex from "vuex";
import trade from "./trade/index";

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      trade,
    },
  });
};
