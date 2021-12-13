import { createStore } from 'vuex'

const store = createStore({
    state: {
        logedIn: false
    },
    mutations: {
      login (state) {
        state.logedIn = true
      },
      logout (state) {
        state.logedIn = false
      }
    }
  })

  export default store