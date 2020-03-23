<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>ApiOrigin: {{ apiOrigin }}</p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  computed: {
    apiOrigin() {
      return process.env.VUE_APP_API_ORIGIN
    },
  },
}
</script>
