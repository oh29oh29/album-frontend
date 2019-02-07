<template>
  <article>
    <div class="post">
      <span class="post-date">{{ post.date }}</span>
      <p class="post-desc">{{ post.description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Detail',
  created: function () {
    this.fetchData()
  },
  data () {
    return {
      post: null
    }
  },
  methods: {
    fetchData () {
      let _this = this
      this.$http.get('/post/' + _this.$route.params.postId)
        .then(function (result) {
          console.log(result)
          _this.post = result.data
        })
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
