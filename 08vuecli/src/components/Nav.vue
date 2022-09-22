<template>
  <div class="header_inner">
    <input type="checkbox" id="menu_btn_check" v-model="isShow" />
    <label for="menu_btn_check" class="menu_btn">
      <span></span>
    </label>
    <nav class="header_nav">
      <ul>
        <li><a href="#New" @click="closeNav">特集</a></li>
        <li><a href="#Blog" @click="closeNav">商品一覧</a></li>
        <li><a href="contact.html" @click="closeNav">お問合わせ</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data: () => {
    return {
      isShow: false
    }
  },
  methods: {
    // クリックでナビゲーション非表示
    closeNav: function() {
      this.isShow = false;
    }
  }
};
</script>

<style></style>
