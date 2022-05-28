<template>
  <div id="app">
    <header />
    <div class="content" id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from "./components/layout/Header.vue";
export default {
  name: "App",
  components: {
    header,
  },
};
</script>
