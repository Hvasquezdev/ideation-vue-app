import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ideas: [],
    qualitySession: null,
    isTypingIdeas: false,
  },

  getters: {
    getIdeas: (state) => state.ideas,
    getTypingStatus: (state) => state.isTypingIdeas,
  },

  mutations: {
    PUSH_NEW_IDEA: (state, idea) => {
      state.ideas.push(idea);
    },
    TOGGLE_TYPING_STATUS: (state, value) => {
      state.isTypingIdeas = value;
    }
  },

  actions: {
    SET_NEW_IDEA: ({commit}, idea) => {
      commit('PUSH_NEW_IDEA', idea);
    },
  }
});
