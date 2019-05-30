import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '@/firebase.js';

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
    },
    CLEAR_SESSION: (state) => {
      state.ideas = [];
      state.qualitySession = null;
      state.isTypingIdeas = false;
    }
  },

  actions: {
    SET_NEW_IDEA: ({ commit }, idea) => {
      commit('PUSH_NEW_IDEA', idea);
    },
    SAVE_IDEAS_SESSION: ({ state }) => {
      if(state.ideas) {
        const docId = new Date().getTime().toString(36);

        db.collection('ideas-session').doc(docId).set({
          ideas: state.ideas,
          rating: 4,
        }).then(() => {
          console.log('Ideas almacenadas');
        }).catch((error) => {
          console.error(error);
        });
      }
    },
  }
});
