<script setup>
import DocHeading from '@/components/doc/DocHeading.vue';
import DocSidebar from '@/components/doc/DocSidebar.vue';
</script>

<template>
  <main class="container">
    <DocSidebar />
    <div class="doc-body">
      <DocHeading />
    </div>
  </main>
</template>

<style scoped>
/* .doc-navigation {} */

.container {
  display: flex;
  /* justify-content: center; */
  width: 100%;
  min-height: 100vh;
}

.doc-body {
  max-width: 46em;
  width: 100%;
  padding: 0 2em;
  /* background-color: green; */
}
</style>