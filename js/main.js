let app = new Vue({
  el: '#app',
  data: {
    products: [],
    pageItems: [],
    kind: 'all',
    count: 8,
    totalStep: '',
    currentStep: 1,
    pagenum: 'pagenum',
    isPage: null
  },
  created: async function () {
    // JSON読み込み
    const res = await fetch('../実務課題08/js/item.json');
    const items = await res.json();
    this.products = items;

    // 商品一覧表示
    this.kindSort();
    this.addClass(1);
  },
  filters: {
    number_format: function (val) {
      return parseInt(val).toLocaleString();
    }
  },
  methods: {
    /*-------------------------
      ページネーション
    -------------------------*/
    currentPage2: function (id, newItem) {
      // 8アイテムを配列に格納
      let indexStart = id * this.count - this.count;
      let pageItems = newItem.splice(indexStart, this.count);
      return pageItems;
    },
    // ページネーション
    pagenation: function (id) {
      this.kindSort(id);
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
      console.log(id)
      // 商品絞り込み
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
        if (isShow) {
          newItem.push(this.products[i])
        }
      }


      // ページ数を定義
      this.totalStep = Math.ceil(newItem.length / this.count);
      console.log(newItem)

      // ページ読み込み時
      if (typeof id === 'undefined' && typeof newItem[0] !== 'undefined') {
        this.pageItems = this.currentPage2(1, newItem);
      }
      // ページネーションクリック時
      else if (typeof id !== 'undefined' && typeof newItem[0] !== 'undefined') {

        // クラス付与
        this.addClass(id);

        this.pageItems = this.currentPage2(id, newItem);
      }
    }
  },
  computed: {
  }
})
