<template>
  <div>
    Category
  </div>
</template>

<script>
export default {
  name: 'Category',
  created: function () {
    this.$http.get('/categories')
      .then(function (result) {
        console.log(result)
      })
  },
  methods: {
    test () {
      this.$http.get('/categories')
        .then(function (result) {
          console.log(result)
        })
    }
  }
}
</script>

<style scoped>

</style>
