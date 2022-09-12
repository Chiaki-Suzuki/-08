let app = new Vue({
  el: '#app',
  data: {
    products: [],
    pageItems: [],
    kind: 'all',
    count: 6,
    totalStep: '',
    currentId: 1,
    pagenum: 'pagenum',
    isPage: null,
    prevActive: false,
    nextActive: false,
  },
  created: async function () {
    // JSON読み込み
    const res = await fetch('../実務課題08/js/item.json');
    const items = await res.json();
    this.products = items;

    // 商品一覧表示
    this.kindSort();
  },
  filters: {
    number_format: function (val) {
      return parseInt(val).toLocaleString();
    }
  },
  methods: {
    currentPage: function (id, newItem) {
      // 8アイテムを配列に格納
      let indexStart = id * this.count - this.count;
      let pageItems = newItem.splice(indexStart, this.count);
      // クラス付与
      this.addClass(id);
      // ８アイテム入った配列を戻す
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

      for (i = 0; i < this.products.length; i++) {
        let isShow = true
        // ソフトコーラル
        if (this.kind === 'soft' && this.products[i].kind !== 'soft') {
          isShow = false;
        }
        // LPS
        else if (this.kind === 'lps' && this.products[i].kind !== 'lps') {
          isShow = false;
        }
        // SPS
        else if (this.kind === 'sps' && this.products[i].kind !== 'sps') {
          isShow = false;
        }
        // 対象商品のみを配列に格納
        if (isShow) {
          newItem.push(this.products[i])
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
        // ソート時にページ数が変わる際、currentIdがページ数を超える場合は1ページ目に戻す
        else if (this.currentId > this.totalStep) {
          this.currentId = 1;
        }
        // １ページ内のアイテムを配列に格納
        this.pageItems = this.currentPage(this.currentId, newItem);
      }
    }
  }
})
