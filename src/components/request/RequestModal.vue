<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control" :class="{invalid: nError}">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" @blur="nBlur">
      <small v-if="nError">{{nError}}</small>
    </div>
    <div class="form-control" :class="{invalid: pError}">
      <label for="phone">Phone</label>
      <input type="text" id="phone" v-model="phone" @blur="pBlur">
      <small v-if="pError">{{pError}}</small>
    </div>
    <div class="form-control" :class="{invalid: aError}">
      <label for="amount">Amount</label>
      <input type="number" id="amount" v-model="amount" @blur="aBlur">
      <small v-if="aError">{{aError}}</small>
    </div>
    <div class="form-control">
      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="done">Completed</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>
    <button class="btn primary" :disabled="isSubmitting">Create</button>
  </form>
</template>

<script>
  import {useRequestForm} from '../../use/requestForm'
  import {useStore} from 'vuex'
  
  export default {
    name: "RequestModal",
    emits: ['created'],
    setup(_, {emit}) {
      const store = useStore()
      const submit = async values => {
        await store.dispatch('request/create', values)
        emit('created')
      }
      
      return {
        ...useRequestForm(submit)
      }
    }
  }
</script>

<style scoped>

</style>
