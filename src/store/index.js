import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      randomNumber: 0,
      history: [],
    };
  },
  mutations: {
    setRandomNumber(state, payload) {
      console.log(payload);
      state.randomNumber = payload;
      state.history.push(state.randomNumber);
    },
  },
  actions: {
    async getRandomNumber(context) {
      let data = await axios.get(
        "https://www.random.org/integers/?num=1&min=0&max=1000&col=1&base=10&format=plain&rnd=new"
      );
      context.commit("setRandomNumber", data.data);
    },
  },
  getters: {
    activeIndexes: (state) => (payload) => {
      let indexes = [];
      state.history.forEach((number, index) => {
        if (number === payload) {
          indexes.push(index);
        }
      });
      return indexes;
    },
  },
  modules: {},
});
