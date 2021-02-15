import { createStore } from 'vuex'

export default createStore({
  state: {
    mySelection: 'all',
    myTask: '',
    myTodos: [],
    myNum: 0
  },
  mutations: {
    changeMySelection (state, value) {
      state.mySelection = value;
    },
    changeMyTask (state, value) {
      state.myTask = value;
    },
    addMyTodos (state, value) {
      state.myTodos.push(value);
    },
    removeMyTodos (state, value) {
      state.myTodos.splice(value, 1);
    },
    increaseMyNum (state) {
      state.myNum ++;
    },
    initializeMyNum (state) {
      state.myNum = 0;
    },
    initializeMyTodosMyNum (state) {
      state.myTodos.forEach((todo) => todo.id = state.myNum ++);
    }
  },
  getters: {
    getMySelection: (state) => state.mySelection,
    getMyTask: (state) => state.myTask,
    getMyTodos: (state) => state.myTodos,
    getMyNum: (state) => state.myNum
  },
  actions: {
  },
  modules: {
  }
})
