import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
import json from '/hotels.json'
export default new Vuex.Store({
  state: {
    filter : {
      countries: [],
      types: [],
      stars: [],
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
      state.hotels = json.hotels
      if(state.filter.countries.length !== 0) {
        state.hotels = state.hotels.filter(hotel => state.filter.countries.indexOf(hotel.country) >= 0)
      }
      if (state.filter.types.length !== 0) {
        state.hotels = state.hotels.filter(hotel => state.filter.types.indexOf(hotel.type) >= 0)
      }
      if (state.filter.stars.length !== 0) {
        state.hotels = state.hotels.filter(hotel => state.filter.stars.indexOf(String(hotel.stars)) >= 0)
      }
      if (state.filter.reviews.length !== 0) {
        state.hotels = state.hotels.filter(hotel => state.filter.reviews < hotel.reviews_amount)
      }
      state.hotels = state.hotels.filter(hotel => ((hotel.min_price > state.filter.cost[0]) && (hotel.min_price < state.filter.cost[1])))
    },
    setHotels(state, payload){
      state.hotels = payload
    },
    resetFilter(state, payload) {
      state.filter = payload
      state.hotels = json.hotels
    }
  }
})
