<template>
  <div class="main_wrapper">
    <!-- <section id="Blog">
      <h2>商品一覧</h2>
      <div id="app">
        <div class="search">
          <p>種類で絞る：</p>
          <select v-on:change="kindSort()" v-model="kind">
            <option value="all">すべて</option>
            <option value="soft">ソフトコーラル</option>
            <option value="lps">LPS</option>
            <option value="sps">SPS</option>
          </select>
        </div>
        <div class="syohin_item">
          <div v-for="item in pageItems" v-bind:key="item.id">
            <a href="goods_01.html">
              <picture>
                <source media="(max-width:767px)" v-bind:srcset="item.image" />
                <img v-bind:src="item.image" alt="イメージ画像" />
              </picture>
              <p>{{ item.name }}</p>
              <p>\{{ item.price | number_format }}～</p>
            </a>
          </div>
        </div>
        <div class="pagenation">
          <ul>
            <li
              v-on:click="kindSort('prev')"
              v-bind:class="{ disable: prevActive }">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </li>
            <li
              v-for="n in totalStep"
              v-on:click="kindSort(n)"
              v-bind:class="[pagenum, { thispage: isPage === n }]">
              {{ n }}
            </li>
            <li
              v-on:click="kindSort('next')"
              v-bind:class="{ disable: nextActive }">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
// import Nav from "./components/Nav.vue";

export default {
  name: 'Items',
  components: {
    // Nav,
  },
};
</script>

<style></style>
