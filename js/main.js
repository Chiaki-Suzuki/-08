let app = new Vue({
  el: '#app',
  data: {
    products: [],
    kind: 'all'
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
  computed: {
    /*-------------------------
      商品絞り込み
    -------------------------*/
    kindSort: function () {
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
      return newItem;
    }
  }
})
