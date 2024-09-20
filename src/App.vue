<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <header class="header-wrapper">
      <div class="header-elements">
        <h1>Docmatic</h1>
        <input type="text" placeholder="Search this doc">
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
.wrapper {
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
  max-width: 1280px;
  position: relative;
}

.header-elements h1 {
  margin: 0;
  font-size: 1.5em;
  font-weight: normal;
  color: white;
}

.header-elements input {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.375em 0.75em;
  border: none;
  border-radius: 1rem;
}

.header-elements a {
  color: white;
}

.links {}
</style>
