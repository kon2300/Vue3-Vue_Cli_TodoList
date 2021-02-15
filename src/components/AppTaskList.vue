<template>
  <div class="app-task-list">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in filterTodos()" :key="todo.id">
          <th> {{ todo.id }} </th>
          <td> {{ todo.comment }} </td>
          <td @click="doChangeState(todo.id)">
            <span><button v-show="todo.isActive === false"> 作業中 </button></span>
            <span><button v-show="todo.isActive === true"> 完了 </button></span>
          </td>
          <td><button @click="eraseTodo(todo.id)"> 削除 </button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="app-task-button">
    <h3 class="is-size-3">新規タスクの追加</h3>
    <input type="text" v-model="onChangeMyTask">
    <button class="button is-small" @click="addTask()">追加</button>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'AppTaskList',
  computed: {
    ...mapGetters ([
      'getMyTask',
      'getMyTodos',
      'getMySelection',
      'getMyNum'
    ]),
    onChangeMyTask: {
      get () {
        return this.getMyTask;
      },
      set (value) {
        this.changeMyTask(value);
      }
    }
  },
  methods: {
    ...mapMutations ([
      'changeMyTask',
      'addMyTodos',
      'removeMyTodos',
      'increaseMyNum',
      'initializeMyNum',
      'initializeMyTodosMyNum'
    ]),
    // 削除ボタン、Idの振り直し
    eraseTodo (index) {
      this.removeMyTodos(index);
      this.initializeMyNum();
      this.initializeMyTodosMyNum();
    },
    // 状態変更ボタン
    doChangeState (index) {
      this.getMyTodos[index].isActive = !this.getMyTodos[index].isActive;
      if (this.getMyTodos[index].tag === 'done') {
        this.getMyTodos[index].tag = 'work';
      } else {
        this.getMyTodos[index].tag = 'done';
      }
      this.filterTodos()
    },
    // リスト追加ボタン
    addTask () {
      this.addMyTodos( {id: this.getMyNum, comment: this.getMyTask, isActive: false, tag: 'work'} );
      this.changeMyTask('');
      this.filterTodos();
      this.increaseMyNum();
    },
    // 状態に応じたリストの振り分け
    filterTodos () {
      if (this.getMySelection === 'done') {
        return this.getMyTodos.filter((value) => value.tag === 'done');
      } else if (this.getMySelection === 'work') {
        return this.getMyTodos.filter((value) => value.tag === 'work');
      } else {
        return this.getMyTodos;
      }
    }
  }
}
</script>
