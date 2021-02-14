<template>
  <AppHeader />
  <AppTaskRadioButton />
  <AppTaskList />
</template>

<script>
export default {
  name: 'App',
  components: {
    'AppHeader': require('@/components/AppHeader.vue').default,
    'AppTaskRadioButton': require('@/components/AppTaskRadioButton.vue').default,
    'AppTaskList': require('@/components/AppTaskList.vue').default
  }
}
</script>

<style lang="scss">
  * {
    padding: 5px;
  }
</style>
