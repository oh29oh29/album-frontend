<template>
  <article>
    <div class="post">
      <img class="post-img" v-bind:src="post.imageUrl">
      <span class="post-date">{{ post.uploadDate }}</span>
      <p class="post-desc">{{ post.description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Detail',
  created () {
    this.fetchData()
  },
  data () {
    return {
      post: {}
    }
  },
  methods: {
    fetchData () {
      const _this = this
      console.log('/' + _this.$route.params.categoryId + '/' + _this.$route.params.postId)
      this.$http.get('/' + _this.$route.params.categoryId + '/' + _this.$route.params.postId)
        .then(result => {
          console.log(result.data)
          _this.post = result.data
        })
    }
  }
}
</script>

<style scoped>
.post {
  font-size: 16px;
}
.post-img {
  display: block;
}
.post-desc {
  margin: 10px 0;
}
</style>
