import { createStore } from 'vuex'

export default createStore({
  state: {
    memos:[]
  },
  getters: {
  },
  mutations: {
    // メモを保存する
    save(state, newMemo) {
      state.memos.unshift(newMemo)
    }
  },
  actions: {
  },
  modules: {
  }
})
