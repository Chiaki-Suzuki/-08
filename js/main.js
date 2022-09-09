let app = new Vue({
  el: '#app',
  data: {
    products: [],
    kind: 'all',
    count: 8,
    totalStep: '',
    currentStep: 1,
    isPage: false
  },
  created: async function () {
    // JSON読み込み
    const res = await fetch('../実務課題08/js/item.json');
    const items = await res.json();
    this.products = items;
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
    currentPage: function (id) {
      let pageItems = [];
      let indexStart = id * this.count - this.count;
      let indexEnd = id * this.count - 1;
      // 8アイテムを配列に格納
      for (i = indexStart; i <= indexEnd; i++){
        pageItems.push(this.products[i])
      }
      if (typeof pageItems[0] !== 'undefined') {
        return pageItems;
      }
      return;
    },
    currentPage2: function (id, newItem) {
      let pageItems = [];
      let indexStart = id * this.count - this.count;
      let indexEnd = id * this.count - 1;
      // 8アイテムを配列に格納
      for (i = indexStart; i <= indexEnd; i++){
        pageItems.push(newItem[i])
      }
      if (typeof pageItems[0] !== 'undefined') {
        return pageItems;
      }
      return;
    },
    /*-------------------------
      商品絞り込み
    -------------------------*/
    kindSort: function (id) {
      console.log(id)
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

      if (typeof id === 'undefined') {
        return newItem;
      } else {
        console.log(this.currentPage2(id, newItem))
        return this.currentPage2(id, newItem);
      }
    }
  },
  computed: {
  }
})
