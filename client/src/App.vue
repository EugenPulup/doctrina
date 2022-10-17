<template>
  <DefaultLayout>
    <HelloWorld />
  </DefaultLayout>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import DefaultLayout from './layouts/default.layout.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    DefaultLayout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
