<template>
  <div>
    List
  </div>
</template>

<script>
export default {
  name: 'List',
  created: function () {
    this.$http.get('/posts')
      .then(function (result) {
        console.log(result)
      })
  }
}
</script>

<style scoped>

</style>
