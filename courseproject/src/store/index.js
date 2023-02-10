import { createStore } from 'vuex';

export const store = createStore({
  state: {
    isCollapse: false,
  },
  mutations: {
    handleCollapse(state){
      state.isCollapse = !state.isCollapse;
    }
  }
})