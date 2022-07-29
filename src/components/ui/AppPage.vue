<template>
  <div class="breadcrumbs" v-if="back">
    <router-link class="text-white" to="/">return to main</router-link>
  </div>
  <div class="card">
    <h1 class="card-title">
      {{title}}
      <slot name="header"/>
    </h1>
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "AppPage",
    props: {
      title: {
        type: String,
        required: true
      },
      back: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      document.title = `${props.title} | Bank`
    }
  }
</script>

<style scoped>

</style>
