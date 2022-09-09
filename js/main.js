let app = new Vue({
  el: '#app',
  data: {
    products: [],
    kindSort: 'all'
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
  }
})
