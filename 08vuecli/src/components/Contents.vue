<template>
  <main>
    <div class="top_wrapper">
      <picture>
        <source media="(max-width:767px)" srcset="../assets/images/top_img_mb.png">
        </source>
        <img src="../assets/images/top_img.png" alt="イメージ画像">
      </picture>
    </div>
    <Topic></Topic>
    <Items></Items>
  </main>
</template>

<script>
import Topic from '../components/Topic.vue'
import Items from '../components/Items.vue'

export default {
  name: 'Contents',
  components: {
    Topic,
    Items
  }
};
</script>

<style></style>
