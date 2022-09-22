<template>
  <div class="main_wrapper">
    <section id="Blog">
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
                <source media="(max-width:767px)" v-bind:srcset="getUrl(item.image)" />
                <img v-bind:src="getUrl(item.image)" alt="イメージ画像" />
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
              <fa-icon icon="angle-left"></fa-icon>
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
              <fa-icon icon="angle-right"></fa-icon>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// 商品一覧
import item from "../assets/item.json";

export default {
  name: 'Items',
  data: () => {
    return {
      item: item,
      pageItems: [],
      kind: 'all',
      count: 6,
      totalStep: '',
      currentId: 1,
      pagenum: 'pagenum',
      isPage: null,
      prevActive: false,
      nextActive: false,
    }
  },
  created: function () {
    // スマホ対応
    if (window.innerWidth < 767) {
      this.count = 4;
      this.kindSort();
    }

    // 商品一覧表示
    this.kindSort();
  },
  filters: {
    number_format: function (val) {
      return parseInt(val).toLocaleString();
    }
  },
  methods: {
    // 画像取得
    getUrl: function(img) {
      console.log()
      return `/images/${img}`
    },
    currentPage: function (id, newItem) {
      // アイテムを配列に格納
      let indexStart = id * this.count - this.count;
      let pageItems = newItem.splice(indexStart, this.count);
      // クラス付与
      this.addClass(id);
      // アイテムが入った配列を戻す
      return pageItems;
    },
    // 現在のページにクラス付与
    addClass: function (id) {
      if (this.isPage === id) {
        this.isPage = null;
      } else {
        this.isPage = id;
      }
    },
    kindSort: function (id) {
      /*-------------------------
        商品絞り込み
      -------------------------*/
      let newItem = [];

      for (let i = 0; i < this.item.length; i++) {
        let isShow = true
        // ソフトコーラル
        if (this.kind === 'soft' && this.item[i].kind !== 'soft') {
          isShow = false;
        }
        // LPS
        else if (this.kind === 'lps' && this.item[i].kind !== 'lps') {
          isShow = false;
        }
        // SPS
        else if (this.kind === 'sps' && this.item[i].kind !== 'sps') {
          isShow = false;
        }
        // 対象商品のみを配列に格納
        if (isShow) {
          newItem.push(this.item[i])
        }
      }

      /*-------------------------
      ページネーション
      -------------------------*/
      // ページ数を定義
      this.totalStep = Math.ceil(newItem.length / this.count);

      // ページ読み込み時
      if (typeof newItem[0] !== 'undefined') {
        // ページネーションクリック時
        if (!isNaN(id)) {
          // 1ページ内に８要素を入れる
          this.currentId = id;
        }
        // 前のページへ
        else if (id === 'prev') {
          this.currentId--
        }
        // 次のページへ
        else if (id === 'next') {
          this.currentId++
        }
        // ページングリセット用
        this.isPage = null;
        this.prevActive = false;
        this.nextActive = false;
        // 最初のページ指定時には前のページには行けないようにする
        if (this.currentId === 1) {
          this.prevActive = true;
        }
        // 最後のページ指定時には次のページには行けないようにする
        else if (this.currentId === this.totalStep) {
          this.nextActive = true;
        }
        // １ページ内のアイテムを配列に格納
        this.pageItems = this.currentPage(this.currentId, newItem);
      }
    }
  },
  watch: {
    // ソート時にページングを１ページ目に戻す
    kind: function () {
      this.currentId = 1;
      this.kindSort();
    }
  }
};
</script>

<style></style>
