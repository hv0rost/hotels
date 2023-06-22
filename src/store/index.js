import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter : {
      countries: [],
      types: [],
      ratings: [],
      reviews: '',
      cost: [0, 100500]
    },
    hotels : []
  },
  getters: {
    getFilter(state){
      return state.filter
    },
    getHotels(state){
      return state.hotels
    },
  },
  mutations: {
    setFilter(state, payload){
      state.filter = payload
    },
    setHotels(state, payload){
      state.hotels = payload
    },
  }
})
