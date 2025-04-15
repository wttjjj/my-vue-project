<template>
	<div id="app">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
    },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  background-color: #f5f5f5;
}
</style>
