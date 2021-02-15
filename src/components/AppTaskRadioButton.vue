<template>
  <div class="app-task-radio-button">
    <input type="radio" v-model="onChangeMySelection" value="all" id="all" checked><label for="all" class="mr-5">すべて</label>
    <input type="radio" v-model="onChangeMySelection" value="work" id="work"><label for="work">作業中</label>
    <input type="radio" v-model="onChangeMySelection" value="done" id="done" class="ml-5"><label for="done">完了</label>
  </div>
</template>

<script>
export default {
  name: 'AppTaskRadioButton',
  computed: {
    onChangeMySelection: {
      get () {
        return this.$store.getters.getMySelection;
      },
      set (value) {
        this.$store.commit('changeMySelection', value);
      }         
    }
  }
}
</script>
