<template>
  <article>
    <div v-for="(post, index) in posts" v-bind:key="post.id" class="post" v-on:click="linkToDetail(post.id)">
      <span class="post-index">{{ index + 1 }}</span>
      <span class="post-date">{{ post.date }}</span>
      <p class="post-desc">{{ post.description }}</p>
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
  width: 200px;
  border: 1px solid black;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
}
.post-index {
  display: inline-block;
}
.post-date {
  float: right;
}
.post-desc {
  margin: 10px 0;
}
</style>
