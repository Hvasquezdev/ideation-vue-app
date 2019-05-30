import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '@/firebase.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ideas: [],
    calification: 0,
    isTypingIdeas: false,
    sessionStatus: 'stopped' //stopped - inProcess - saving - completed
  },

  getters: {
    getIdeas: (state) => state.ideas,
    getTypingStatus: (state) => state.isTypingIdeas,
    getSessionStatus: (state) => state.sessionStatus,
    getCalification: (state) => state.calification,
  },

  mutations: {
    PUSH_NEW_IDEA: (state, idea) => {
      state.ideas.push(idea);
    },
    TOGGLE_TYPING_STATUS: (state, value) => {
      state.isTypingIdeas = value;
      if(value === true) {
        state.sessionStatus = 'inProcess';
      }
    },
    SET_SESSION_STATUS: (state, value) => {
      state.sessionStatus = value;
    },
    SET_CALIFICATION: (state, value) => {
      state.calification = value;
    },
    CLEAR_SESSION: (state) => {
      state.ideas = [];
      state.calification = 0;
      state.isTypingIdeas = false;
      state.sessionStatus = 'stopped';
    }
  },

  actions: {
    SET_NEW_IDEA: ({ commit }, idea) => {
      commit('PUSH_NEW_IDEA', idea);
    },
    SAVE_IDEAS_SESSION: ({ state, commit }) => {
      if(state.ideas) {
        const docId = new Date().getTime().toString(36);
        commit('SET_SESSION_STATUS', 'saving');

        db.collection('ideas-session').doc(docId).set({
          ideas: state.ideas,
          rating: state.calification,
        }).then(() => {
          setTimeout(() => {
            commit('SET_SESSION_STATUS', 'completed');
          }, 1500);
        }).catch((error) => {
          console.error(error);
        });
      }
    },
  }
});
