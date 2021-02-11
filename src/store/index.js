import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    getProduct: (state) => (id) => {
      return state.products.find(prod => id == prod.id)
    }},
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products
    }
  },
  actions: {
    getProducts({commit}) {
      axios.get('https://www.hulabeck.se/html/temp/products.json')
        .then((response) => {
          commit('GET_PRODUCTS', response.data.products)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
  modules: {
  }
})
