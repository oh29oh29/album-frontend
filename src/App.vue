<template>
  <div id="app">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Body from '@/components/Body'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {Footer, Body, Header}
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
