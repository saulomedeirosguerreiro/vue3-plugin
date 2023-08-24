<script setup>
</script>

<template>
  <h3>Custom Vue.js 3 Plugins</h3>
  <span>Hover Over Me <ToolTip text="Hello world" :options="{ placement: 'bottom'}" /></span>

  <br>

  <span>And me <ToolTip text="Hello world" /></span>

  <br><br>

  <button @click="$hideAllTooltips">Hide All</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
