<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main">
    <header class="header-wrapper">
      <div class="header-elements">
        <h1>Docmatic</h1>
        <input type="text">
        <nav class="links">
          <RouterLink to="/">My Docs</RouterLink>
          <!-- <RouterLink to="/about">About</RouterLink> -->
        </nav>
      </div>
    </header>

    <RouterView />
  </div>

</template>

<style scoped>
.main {
  min-height: screen;
  margin: 0 auto;
  width: 100%;
}

.header-wrapper {
  width: 100%;
  margin: 0 auto;
  padding: 0.5em 0;
  background-color: #FF7474;
  align-items: center;
}
.header-elements{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 64rem;
}

.header-elements h1 {
  margin: 0;
  font-size: 1.5em;
  font-weight: normal;
  color: white;
}

.header-elements a {
  color: white;
}

.links {}
</style>
