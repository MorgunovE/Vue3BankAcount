<template>
  <h4 v-if="requests.length === 0" class="text-center">No balance</h4>
  <table v-else class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Amount</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(request, index) in requests" :key="request.id">
      <td>{{ index + 1}}</td>
      <td>{{request.name}}</td>
      <td>{{request.phone}}</td>
      <td>{{currency(request.amount)}}</td>
      <td>
        <app-status :type="request.status"/>
      </td>
      <td>
        <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: request.id}}">
          <button class="btn" @click="navigate">Open</button>
        </router-link>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import {currency} from '../../utils/currency'
  import AppStatus from '../ui/AppStatus'
  
  export default {
    name: "RequestTable",
    components: {AppStatus},
    props: ['requests'],
    setup() {
      return {currency}
    }
  }
</script>

<style scoped>

</style>
