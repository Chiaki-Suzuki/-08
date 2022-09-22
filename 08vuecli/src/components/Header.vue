<template>
  <header>
    <div class="header_wrapper">
      <div class="top_logo">
        <a href="index.html">
          <img src="../assets/images/fish_logo.png" alt="お魚ロゴ" class="pc" />
          <h1 id="top">AquaAqua</h1>
        </a>
        <p class="pc">アクアリウムなオンラインショップ</p>
      </div>
      <div class="search_wrapper">
        <form action="" method="post">
          <input type="search" name="search" placeholder="商品名を入力" />
          <input
            type="image"
            name="submit"
            value="検索"
            :src="getUrl('kensaku_icon.png')" />
        </form>
      </div>
      <div class="header_icon">
        <a href="login.html"><img src="../assets/images/loguin_icon.png" alt="ログインアイコン" /></a>
        <a href="cart.html"><img src="../assets/images/cart.png" alt="カートアイコン" /></a>
      </div>
    </div>
    <Nav></Nav>
  </header>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  name: 'Header',
  components: {
    Nav
  },
  methods: {
    getUrl: function(img) {
      return `/images/${img}`
    }
  }
};
</script>

<style></style>
