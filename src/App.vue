<template>
<!--  <main-layout></main-layout>-->
<!--  <auth-layout></auth-layout>-->
<!--  <router-view/>-->
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<script>
  import MainLayout from './layout/MainLayout'
  import AuthLayout from './layout/AuthLayout'
  import {useRoute} from 'vue-router'
  import {computed} from 'vue'
  
  export default {
    components: {AuthLayout, MainLayout},
    setup() {
      const route = useRoute()
      
      return {
        layout: computed(() => route.meta.layout)
      }
    }
  }
</script>
