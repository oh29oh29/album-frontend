<template>
  <section>
    <router-view ></router-view>
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
  height: 100px;
}
article {
  width: 600px;
  margin: 0 auto;
}
</style>
