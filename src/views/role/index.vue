<template>
  <div class="role">
    <resource-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ResourceList from './components/List.vue'

export default Vue.extend({
  name: 'RoleIndex',
  components: {
    ResourceList
  }
})
</script>

<style lang="scss" scoped></style>
