let app = new Vue({
  el: '#app',
  data: {
    products: []
  },
  created: async function () {
    // JSON読み込み
    const res = await fetch('../実務課題08/js/item.json');
    const items = await res.json();
    this.products = items;
  }
})
