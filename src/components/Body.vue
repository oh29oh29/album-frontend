<template>
  <section>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'Body'
}
</script>

<style scoped>
section {
  width: 100%;
}
article {
  width: 750px;
  margin: 0 auto;
  font-size: 0;
}
</style>
