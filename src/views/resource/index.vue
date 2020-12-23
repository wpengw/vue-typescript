<template>
  <div class="resouce">
    <resource-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ResourceList from './components/List.vue'

export default Vue.extend({
  name: 'ResouceIndex',
  components: {
    ResourceList
  }
})
</script>

<style lang="scss" scoped></style>
