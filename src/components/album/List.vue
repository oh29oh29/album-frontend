<template>
  <article>
    <div v-for="post in posts" v-bind:key="post.id" class="post" v-on:click="transferToDetail">
      List
    </div>
  </article>
</template>

<script>
export default {
  name: 'List',
  created: function () {
    this.fetchData()
  },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    fetchData () {
      let _this = this
      this.$http.get('/posts', {
        params: {
          categoryId: _this.$route.params.categoryId
        }
      }).then(function (result) {
        console.log(result)
        _this.posts = result.data
      })
    },
    transferToDetail (postId) {
      this.$router.push({name: 'detail', params: {postId: postId}})
    }
  }
}
</script>

<style scoped>
.post {
  display: inline-block;
  width: 200px;
  line-height: 100px;
  border: 1px solid black;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
