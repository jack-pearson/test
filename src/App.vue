<!--
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-17 16:42:27
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-05-17 21:14:43
 * @FilePath: /andeng-largescreen-merge/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
const index = ref(0);
const timer = ref(0);
const urls = ["http://192.168.66.39/andoninfo/", "http://192.168.66.39/device/"];
const url = ref(urls[index.value]);
onMounted(() => {
  timer.value = setInterval(() => {
    index.value = index.value + 1;
    if (index.value === urls.length) {
      index.value = 0;
    }
    url.value = urls[index.value];
    console.log(url.value);
  }, 10000);
});
onBeforeUnmount(() => {
  clearInterval(timer.value);
});
</script>

<template>
  <div class="test"></div>
  <iframe id="frame" class="id" :src="url" frameborder="0"></iframe>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app,
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
.id {
  width: 100%;
  height: 100%;
}
.test {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
</style>
