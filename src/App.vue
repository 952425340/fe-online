<template>
  <div class="main-wrapper">
    <OrgTree @switch="switchUser" />
    <UserTable ref="userRef" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import OrgTree from './components/OrgTree.vue';
import UserTable from './components/UserTable.vue';
let userRef = ref();

function switchUser(id) {
  userRef.value.updateData(id);
}
</script>

<style scoped>
  .main-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
