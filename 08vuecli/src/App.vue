<template>
  <div id="app">
    <Header></Header>
    <Contents></Contents>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Contents from './components/Contents.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Contents,
    Footer
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
* {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "游ゴシック", "YuGothic", "Meiryo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #fff;
  background-size: cover;
}

p {
  font-size: 14px;
}

h2 {
  padding-bottom: 30px;
  text-align: center;
}

a {
  text-decoration: none;
  color: #333;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-size: 14px;
}

li {
  list-style: none;
}

@media screen and (max-width: 767px) {
  h2, h4 {
    font-size: 24px;
  }
  .pc {
    display: none;
  }
  /* ここにSP向けのCSS指定 */
  header {
    margin: auto;
    background-color: #fff;
    height: 130px;
  }
  header .header_wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 90%;
    margin: 0 auto;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  header .header_wrapper .top_logo {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 10px 0;
  }
  header .header_wrapper .top_logo img {
    width: auto;
    height: 2em;
  }
  header .header_wrapper .top_logo h1 {
    font-size: 28px;
  }
  header .header_wrapper .top_logo p {
    font-size: 12px;
    padding-left: 10px;
  }
  header .header_wrapper .search_wrapper {
    width: 90%;
    margin: 0 auto;
    position: absolute;
    top: 12%;
  }
  header .header_wrapper .search_wrapper form {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  header .header_wrapper .search_wrapper form input:nth-of-type(1) {
    width: 100%;
    height: 3em;
  }
  header .header_wrapper .search_wrapper form input:nth-of-type(2) {
    position: absolute;
    right: 8%;
    width: auto;
    height: 2em;
    margin-left: 10px;
  }
  header .header_wrapper .header_icon {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    position: absolute;
    right: 25%;
    /* top: 5%; */
    -webkit-transform: translateY(50%);
            transform: translateY(50%);
  }
  header .header_wrapper .header_icon a {
    margin-left: 10px;
  }
  header .header_wrapper .header_icon a img {
    width: auto;
    height: 2em;
  }
  header .header_inner {
    /* バーガーボタン */
    /* ラベルタグの設定 */
    /* バーガーメニュー三本線 */
    /* バーガーメニューのバツマークの指定 */
    /* inputタグのをクリックした時のlavelタグ */
    /* inputタグのチェックボックス隠す */
    /* ナビ メニューの指定 (外箱の指定) */
    /* input タグがクリックされた時のnavタグの動き */
    /* inputタグとlavelタグはnavタグの上にないと機能しない */
    /* 初期値は0 */
  }
  header .header_inner .menu_btn {
    position: fixed;
    /* ボタン位置 */
    top: 2%;
    right: 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 40px;
    /* バーガーの大きさ */
    height: 40px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    z-index: 90;
    max-block-size: #fff;
  }
  header .header_inner .menu_btn span,
  header .header_inner .menu_btn span:before,
  header .header_inner .menu_btn span:after {
    content: "";
    background-color: #333;
    width: 40px;
    height: 1px;
    display: block;
    position: absolute;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  header .header_inner .menu_btn span:before {
    bottom: 8px;
  }
  header .header_inner .menu_btn span:after {
    top: 8px;
  }
  header .header_inner #menu_btn_check:checked ~ .menu_btn span {
    /* inputタグをクリックした時のlabelタグ内のspan真ん中を透明に */
    background-color: rgba(51, 51, 51, 0);
  }
  header .header_inner #menu_btn_check:checked ~ .menu_btn span::before {
    bottom: 0;
    /* 8px上に指定していたのを元の位置へ */
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    /* 右へ回転 */
    background-color: #fff;
  }
  header .header_inner #menu_btn_check:checked ~ .menu_btn span::after {
    top: 0;
    /* 8px下に指定していたのを元の位置へ */
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    /* 左へ回転 */
    background-color: #fff;
  }
  header .header_inner #menu_btn_check {
    display: none;
  }
  header .header_inner .header_nav {
    width: 90%;
    margin: 0 auto;
    display: block;
    width: 80%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 100%;
    z-index: 80;
    background-color: rgba(51, 51, 51, 0.7);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  header .header_inner .header_nav ul {
    width: 50%;
    margin: 30px auto;
    text-align: center;
  }
  header .header_inner .header_nav ul li {
    list-style: none;
    margin: 20px 0;
  }
  header .header_inner .header_nav ul li a {
    font-size: 18px;
    display: block;
    color: #fff;
    line-height: 4em;
    text-decoration: none;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  header .header_inner .header_nav ul li a:hover {
    opacity: 0.5s;
  }
  header .header_inner .header_nav.slide-in {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  header .header_inner #menu_btn_check:checked ~ nav {
    left: 20%;
  }
  /* ーーーーー　バーガーメニューここまで　ーーーーーーー */
  main {
    margin: 0 auto;
  }
  main .top_wrapper {
    width: 100%;
    height: auto;
  }
  main .top_wrapper img {
    width: 100%;
  }
  main .first_wrapper {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;
    margin-top: 50px;
  }
  main .first_wrapper .first_item {
    width: 100%;
    display: block;
  }
  main .first_wrapper .first_item div {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 30px;
  }
  main .first_wrapper .first_item div picture img {
    width: 100%;
  }
  main .first_wrapper .first_item div p {
    text-align: left;
  }
  main .main_wrapper section .pagenation {
    margin: 0 0 60px 0;
  }
  main .main_wrapper section .pagenation ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main .main_wrapper section .pagenation ul li {
    width: 30px;
    height: 30px;
    text-align: center;
    margin-left: 10px;
    border-radius: 50em;
    font-size: 14px;
    line-height: 30px;
    cursor: pointer;
  }
  main .main_wrapper section .pagenation ul li:hover {
    background-color: #eee;
  }
  main .main_wrapper section .pagenation ul li.thispage {
    background-color: #333;
    color: #fff;
  }
  main .main_wrapper section .pagenation ul li.disable {
    border: 0;
    background-color: #ddd;
    color: #fff;
    pointer-events: none;
  }
  main .main_wrapper section .pagenation ul li:first-of-type {
    margin-left: 0;
    text-indent: -1px;
  }
  main .main_wrapper section .pagenation ul li:first-of-type,
  main .main_wrapper section .pagenation ul li:last-of-type {
    font-size: 16px;
    border: 1px solid;
    text-indent: -1px;
    line-height: 27px;
  }
  main .main_wrapper section .pagenation ul li:last-of-type {
    text-indent: 1px;
  }
  main .main_wrapper {
    width: 90%;
    margin: 0 auto;
    display: block;
    margin-bottom: 50px;
  }
  main .main_wrapper section {
    width: 100%;
    margin-bottom: 50px;
  }
  main .main_wrapper section div {
    margin-bottom: 30px;
    text-align: center;
  }
  main .main_wrapper section div img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }
  main .main_wrapper section div h3 {
    text-align: left;
  }
  main .main_wrapper section div p {
    text-align: left;
    font-size: 16px;
  }
  main .main_wrapper section .search {
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 0 0 10px 0;
  }
  main .main_wrapper aside div {
    margin-bottom: 30px;
  }
  main .main_wrapper aside div img {
    width: 100%;
  }
  main .main_wrapper aside div h4 {
    text-align: center;
    margin-bottom: 30px;
  }
  main .main_wrapper aside div p {
    font-size: 16px;
    text-align: left;
  }
  main .main_wrapper aside div li {
    line-height: 3em;
    border-bottom: 1px solid #333;
  }
  main .main_wrapper aside div li:nth-child(1) {
    border-top: 1px solid #333;
  }
  main .main_wrapper aside .name_wrapper picture {
    width: 70%;
    display: block;
    margin: 0 auto;
  }
  main .main_wrapper aside div:nth-child(1) {
    margin-bottom: 50px;
  }
  main .main_wrapper aside div:nth-child(4) {
    margin-bottom: 50px;
  }
  footer {
    background-color: #F7F7F7;
    margin-top: 50px;
  }
  footer .footer_wrapper {
    width: 90%;
    margin: 0 auto;
    padding: 50px 0px;
    display: block;
  }
  footer .footer_wrapper div {
    width: 100%;
    margin-bottom: 50px;
  }
  footer .footer_wrapper div h4 {
    text-align: center;
    margin-bottom: 20px;
  }
  footer .footer_wrapper div iframe {
    width: 100%;
  }
  footer .footer_wrapper div:nth-child(1) .top_logo {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 20px;
  }
  footer .footer_wrapper div:nth-child(1) .top_logo img {
    width: auto;
    height: 2em;
  }
  footer .footer_wrapper div:nth-child(1) .top_logo h1 {
    margin-left: 10px;
  }
  footer .footer_wrapper div:nth-child(1) ul {
    margin-top: 20px;
  }
  footer .footer_wrapper div:nth-child(1) ul li:before {
    content: "▶︎";
    display: inline-block;
  }
  footer .footer_wrapper div:nth-child(2) li {
    line-height: 3em;
    border-bottom: 1px solid #333;
  }
  footer .footer_wrapper div:nth-child(2) li:nth-child(1) {
    border-top: 1px solid #333;
  }
}

@media screen and (min-width: 768px) {
  /* ここにPC向けのCSS指定 */
  header {
    margin: auto;
    /* inputタグのチェックボックス隠す */
  }
  header .header_wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 72%;
    margin: 0 auto;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  header .header_wrapper .top_logo {
    padding: 10px 0;
  }
  header .header_wrapper .top_logo a {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  header .header_wrapper .top_logo a img {
    width: auto;
    height: 2em;
  }
  header .header_wrapper .top_logo a h1 {
    padding-left: 10px;
  }
  header .header_wrapper .top_logo p {
    font-size: 12px;
    padding-left: 10px;
  }
  header .header_wrapper .search_wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  header .header_wrapper .search_wrapper form {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  header .header_wrapper .search_wrapper form input:nth-of-type(2) {
    width: auto;
    height: 2em;
    margin-left: 10px;
  }
  header .header_wrapper .header_icon {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  header .header_wrapper .header_icon a {
    margin-left: 20px;
  }
  header .header_wrapper .header_icon a img {
    width: auto;
    height: 2em;
  }
  header #menu_btn_check {
    display: none;
  }
  header nav {
    background-color: #F5F5F5;
    padding: 10px 0;
  }
  header nav ul {
    width: 72%;
    margin: 0 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  header nav ul li {
    list-style: none;
    margin-right: 20px;
  }
  header nav ul li a {
    color: #333;
  }
  main {
    margin: 0 auto;
  }
  main .top_wrapper {
    width: 100%;
    height: auto;
  }
  main .top_wrapper img {
    width: 100%;
  }
  main .first_wrapper {
    width: 72%;
    margin: 0 auto;
    margin-bottom: 70px;
    margin-top: 45px;
  }
  main .first_wrapper .first_item {
    width: 100%;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  main .first_wrapper .first_item div {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  main .first_wrapper .first_item div picture img {
    width: 100%;
  }
  main .first_wrapper .first_item div p {
    text-align: left;
  }
  main .main_wrapper {
    width: 72%;
    margin: 0 auto;
  }
  main .main_wrapper section {
    width: 100%;
  }
  main .main_wrapper section h2 {
    width: 100%;
  }
  main .main_wrapper section .search {
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 0 0 10px 0;
  }
  main .main_wrapper section .syohin_item {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
  main .main_wrapper section .syohin_item div {
    margin-bottom: 70px;
    text-align: center;
  }
  main .main_wrapper section .syohin_item div img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }
  main .main_wrapper section .syohin_item div h3 {
    text-align: left;
  }
  main .main_wrapper section .syohin_item div p {
    text-align: left;
    font-size: 16px;
  }
  main .main_wrapper section .pagenation {
    margin: 0 0 60px 0;
  }
  main .main_wrapper section .pagenation ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main .main_wrapper section .pagenation ul li {
    width: 30px;
    height: 30px;
    text-align: center;
    margin-left: 10px;
    border-radius: 50em;
    font-size: 14px;
    line-height: 30px;
    cursor: pointer;
  }
  main .main_wrapper section .pagenation ul li:hover {
    background-color: #eee;
  }
  main .main_wrapper section .pagenation ul li.thispage {
    background-color: #333;
    color: #fff;
  }
  main .main_wrapper section .pagenation ul li.disable {
    border: 0;
    background-color: #ddd;
    color: #fff;
    pointer-events: none;
  }
  main .main_wrapper section .pagenation ul li:first-of-type {
    margin-left: 0;
    text-indent: -1px;
  }
  main .main_wrapper section .pagenation ul li:first-of-type,
  main .main_wrapper section .pagenation ul li:last-of-type {
    font-size: 16px;
    border: 1px solid;
    text-indent: -1px;
    line-height: 27px;
  }
  main .main_wrapper section .pagenation ul li:last-of-type {
    text-indent: 1px;
  }
  main .main_wrapper aside {
    width: 100%;
  }
  main .main_wrapper aside div {
    margin-bottom: 60px;
  }
  main .main_wrapper aside div img {
    width: 100%;
  }
  main .main_wrapper aside div h4 {
    text-align: center;
    margin-bottom: 30px;
  }
  main .main_wrapper aside div p {
    font-size: 16px;
    text-align: left;
  }
  main .main_wrapper aside div li {
    line-height: 3em;
    border-bottom: 1px solid #333;
  }
  main .main_wrapper aside div li:nth-child(1) {
    border-top: 1px solid #333;
  }
  footer {
    background-color: #F7F7F7;
  }
  footer .footer_wrapper {
    width: 72%;
    margin: 0 auto;
    padding: 50px 0px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  footer .footer_wrapper div {
    width: 30%;
  }
  footer .footer_wrapper div h4 {
    margin-bottom: 30px;
  }
  footer .footer_wrapper div:nth-child(1) .top_logo {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  footer .footer_wrapper div:nth-child(1) .top_logo img {
    width: auto;
    height: 2em;
  }
  footer .footer_wrapper div:nth-child(1) ul {
    margin-top: 20px;
  }
  footer .footer_wrapper div:nth-child(1) ul li:before {
    content: "▶︎";
    display: inline-block;
  }
  footer .footer_wrapper div:nth-child(2) li {
    line-height: 3em;
    border-bottom: 1px solid #333;
  }
  footer .footer_wrapper div:nth-child(2) li:nth-child(1) {
    border-top: 1px solid #333;
  }
}
</style>
