<template>
  <article class="category-mngt-wrap">
    <h1>카테고리 관리</h1>
    <form id="categoryMngtForm">
      <div class="input-row">
        <label for="title" class="input-label">제목</label>
        <input type="text" id="title" name="title" class="input-value">
      </div>
      <div class="input-row">
        <label for="desc" class="input-label">설명</label>
        <input type="text" id="desc" name="desc" class="input-value">
      </div>
    </form>
  </article>
</template>

<script>
export default {
  name: 'CategoryMngt'
}
</script>

<style scoped>
.category-mngt-wrap {
  font-size: 16px;
}
.input-row {
  margin: 20px 0;
}
.input-label {
  display: block;
  line-height: 30px;
}
.input-value {
  width: 750px;
  line-height: 30px;
  padding: 0 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
