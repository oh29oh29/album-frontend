<template>
  <article>
    <div v-for="post in posts" v-bind:key="post.id" class="post" v-on:click="linkToDetail(post.id)">
      <img v-bind:src="post.imageUrl">
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
      this.$http.get('/post', {
        params: {
          categoryId: _this.$route.params.categoryId
        }
      }).then(function (result) {
        console.log(result)
        _this.posts = result.data
      })
    },
    linkToDetail (postId) {
      this.$router.push({name: 'detail', params: {postId: postId}})
    }
  }
}
</script>

<style scoped>
.post {
  display: inline-block;
  width: 250px;
  height: 250px;
  cursor: pointer;
}
.post:hover {
  opacity: 0.5;
}
</style>
