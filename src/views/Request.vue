<template>
  <app-loader v-if="loading"></app-loader>
  <app-page back title="Request" v-else-if="request">
    <p><strong>Name: </strong>{{request.name}}</p>
    <p><strong>Phone: </strong>{{request.phone}}</p>
    <p><strong>Amount: </strong>{{currency(request.amount)}}</p>
    <p><strong>Status: </strong>
      <app-status :type="request.status"></app-status>
    </p>
    <div class="form-control">
      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="done">Completed</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>
    <button class="btn danger" @click="remove">Remove</button>
    <button class="btn" @click="update" v-if="hasChange">Update</button>
  </app-page>
  <h3 v-else class="text-center text-white">
    Haven't request with ID = {{$route.params.id}}
  </h3>
</template>

<script>
  import AppPage from '../components/ui/AppPage'
  import {useRoute, useRouter} from 'vue-router'
  import {ref, onMounted, computed} from 'vue'
  import {useStore} from 'vuex'
  import AppLoader from '../components/ui/AppLoader'
  import AppStatus from '../components/ui/AppStatus'
  import {currency} from '../utils/currency'
  import router from '../router'
  
  export default {
    name: "Request",
    setup() {
      const route = useRoute()
      const store = useStore()
      const router = useRouter()
      const status = ref()
      const loading = ref(true)
      const request = ref({})
      
      onMounted(async () => {
        loading.value = true
        request.value = await store.dispatch('request/loadById', route.params.id)
        status.value = request.value?.status
        loading.value = false
      })
      
      const hasChange = computed(() => request.value.status !== status.value)
      
      const remove = async () => {
        await store.dispatch('request/remove', route.params.id)
        await router.push('/')
      }
      const update = async () => {
        const data = {...request.value, status: status.value, id: route.params.id}
        await store.dispatch('request/update', data)
        request.value.status = status.value
      }
      
      return {loading, request, currency, remove, update, status, hasChange}
    },
    components: {AppStatus, AppLoader, AppPage}
  }
</script>

<style scoped>

</style>
