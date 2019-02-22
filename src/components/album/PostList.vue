<template>
  <article>
    <div v-for="post in posts" v-bind:key="post.id" class="post" v-on:click="linkToDetail(post.id)">
      <img class='post-img' v-bind:src="post.imageUrl">
    </div>
    <DetailModal v-if="showModal" @close="showModal = false" v-bind:categoryId='categoryId' v-bind:postId='postId'></DetailModal>
  </article>
</template>

<script>
import DetailModal from './PostDetail';
export default {
  name: 'PostList',
  created () {
    this.fetchData()
  },
  data () {
    return {
      posts: [],
      categoryId: '',
      postId: '',
      showModal: false
    }
  },
  components: {
    DetailModal
  },
  methods: {
    fetchData () {
      const _this = this
      this.$http.get('/' + _this.$route.params.categoryId)
        .then(response => {
          console.log(response)
          _this.posts = response.data
      })
    },
    linkToDetail (id) {
      this.categoryId = this.$route.params.categoryId;
      this.postId = id;
      this.showModal = true;
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
.post-img {
  width: 250px;
  height: 250px;
}
</style>
