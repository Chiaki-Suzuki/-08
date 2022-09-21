<template>
  <header>
    <div class="header_wrapper">
      <div class="top_logo">
        <a href="index.html">
          <img src="img2/fish_logo.png" alt="お魚ロゴ" class="pc" />
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
            src="img2/kensaku_icon.png" />
        </form>
      </div>
      <div class="header_icon">
        <a href="login.html"><img src="img2/loguin_icon.png" alt="ログインアイコン" /></a>
        <a href="cart.html"><img src="img2/cart.png" alt="カートアイコン" /></a>
      </div>
    </div>
    <div class="header_inner">
      <input type="checkbox" id="menu_btn_check" />
      <label for="menu_btn_check" class="menu_btn">
        <span></span>
      </label>
      <Nav></Nav>
    </div>
  </header>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  name: 'Header',
  components: {
    Nav
  }
};
</script>

<style></style>
