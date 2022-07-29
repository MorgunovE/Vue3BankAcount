<template>
  <nav class="navbar">
    <h3>Online Bank</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Budget</router-link>
      </li>
      <li>
        <router-link to="/help">Help</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="openSidebar">Message</a>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Exit</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import {useRouter} from 'vue-router'
  import {useStore} from 'vuex'
  
  export default {
    name: "TheNavbar",
    setup() {
      const router = useRouter()
      const store = useStore()
      
      return {
        logout: () => {
          store.commit('auth/logout')
          router.push('/auth')
        },
        openSidebar: () => store.commit('openSidebar')
      }
    }
  }
</script>

<style scoped>

</style>
