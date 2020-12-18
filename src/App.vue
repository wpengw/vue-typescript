<template>
  <div id="app">
    <h1 class="text">Vue-TypeScript</h1>
    <!-- 根路由出口 -->
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App'
})
</script>

<style lang="scss" scoped>
  .text {
    color: $warning-color
  }
</style>
