import Vuex from 'vuex';
import Vue from 'vue';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {},
  state: {
    editMode: false
  },
  getters: {
    isEdit: state => state.editMode
  },
  actions: {
    toggleEditMode({commit}){
      commit('changeEditMode')
    }
  },
  mutations: {
    changeEditMode(state){
      state.editMode = !state.editMode
    }
  }
});