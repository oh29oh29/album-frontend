<template>
  <div>
    <div v-for="category in categories" v-bind:key="category.id">
      <p>{{ category.id + ' ' + category.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  created: function () {
    let _this = this
    this.$http.get('/categories')
      .then(function (result) {
        console.log(result)
        _this.categories = result.data
      })
  },
  data () {
    return {
      categories: []
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
