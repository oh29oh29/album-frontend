<template>
  <transition name="modal">
    <div class="modal-mask post-detail">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <button class="modal-default-button" @click="$emit('close')">X</button>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <img class="post-img" v-bind:src="post.imageUrl">
              <p class="post-desc">{{ post.description }}</p>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PostDetail',
  created () {
    this.fetchData()
  },
  props: ['categoryId', 'postId'],
  data () {
    return {
      post: {}
    }
  },
  methods: {
    fetchData () {
      const _this = this
      this.$http.get('/' + this.categoryId + '/' + this.postId)
        .then(response => {
          console.log(response.data)
          _this.post = response.data
        })
    }
  }
}
</script>

<style scoped>
.post-detail {
  font-size: 16px;
}
.post-img {
  display: block;
  margin: 0 auto;
}
.post-desc {
  margin: 0;
  padding: 20px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  position: relative;
  width: 500px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header {
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: transparent;
}
.modal-body {
}
.modal-default-button {
  text-decoration: none;
  color: #000;
  border: 0;
  font-size: 16px;
  cursor: pointer;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
