import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


const serverHost = "http://127.0.0.1:8000";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },

  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },

  actions: {

    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        const url = serverHost + '/users/api-token/'
        console.log(url);
        axios({url: url, data: user, method: 'POST' })
        .then(resp => {
          const token = 'Token ' + resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          console.log(err)
          reject(err)
        })
      })
    },

    register({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        const url = serverHost + '/register'
        axios({url: url, data: user, method: 'POST' })
        .then(resp => {
          const token = 'Token ' + resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },

    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
  },

  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },

})