<template>
  <article>
    <div v-for="category in categories" v-bind:key="category.id" class="category" v-on:click="linkToList(category.id)">
      <span class="category-id">{{ category.id }}</span>
      <span class="category-title">{{ category.title }}</span>
      <p class="category-description">{{ category.description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Category',
  created () {
    this.fetchData();
  },
  data () {
    return {
      categories: []
    }
  },
  methods: {
    fetchData () {
      const _this = this;
      this.$http.get('/')
        .then(response => {
          console.log(response);
          _this.categories = response.data;
        })
    },
    linkToList (categoryId) {
      this.$router.push(categoryId);
    }
  }
}
</script>

<style scoped>
.category {
  padding: 20px 10px;
  margin: 10px 0;
  cursor: pointer;
  border-bottom: 1px solid black;
  font-size: 16px;
}
.category:last-child {
  border-bottom: 0;
}
.category-id {
  display: inline-block;
}
.category-title {
  display: block;
  margin: 5px 0;
}
.category-description {
  margin: 10px 0;
}
</style>
