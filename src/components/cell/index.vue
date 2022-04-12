<template>
  <div>
    <div class="imgLazyLoadList">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <img v-lazy="imgUrl">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lazy-load',
  data () {
    return {
      imgUrl: 'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
      list: 9
    }
  },
}
</script>
<style scoped>
.imgLazyLoadList li {
  padding: 10px;
}
.imgLazyLoadList li:last-child {
  margin-bottom: 40px;
}
.imgLazyLoadList img {
  width: 100%;
  margin: auto;
}
/* image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
} */
</style>
