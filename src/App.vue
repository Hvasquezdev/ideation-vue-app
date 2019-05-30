<template>
  <div id="app">
    <home-page></home-page>
  </div>
</template>

<script>
import HomePage from '@/pages/index.vue';

export default {
  name: 'app',
  components: {
    HomePage
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
}

@import url('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css');
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:700|Montserrat:400,500,700&display=swap');

// font-family: 'Libre Baskerville', serif; Bold
// font-family: 'Montserrat', sans-serif; Regular
</style>
