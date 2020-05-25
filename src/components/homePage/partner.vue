<template>
  <div class="partner">
    <h3>合作伙伴</h3>
    <section class="inner">
      <a
        href="https://shop.bitmain.com/?f=bitdeer"
        target="_blank"
        class="inner__item"
      >
        <img src="/_nuxt/img/62ae727.png" alt />
      </a>
      <a
        href="https://www.antpool.com?f=bitdeer"
        target="_blank"
        class="inner__item"
      >
        <img src="/_nuxt/img/867e20a.png" alt />
      </a>
      <a href="https://btc.com?f=bitdeer" target="_blank" class="inner__item">
        <img src="/_nuxt/img/f73c1a0.png" alt />
      </a>
      <a href="https://exmo.com?f=bitdeer" target="_blank" class="inner__item">
        <img src="/_nuxt/img/00541a6.png" alt />
      </a>
      <a
        href="https://www.f2pool.com/?f=bitdeer"
        target="_blank"
        class="inner__item"
      >
        <img src="/_nuxt/img/198aac3.png" alt />
      </a>
      <a
        href="https://pool.viabtc.com?f=bitdeer"
        target="_blank"
        class="inner__item"
      >
        <img src="/_nuxt/img/c696c56.png" alt />
      </a>
      <a
        href="https://www.btc.top/?f=bitdeer"
        target="_blank"
        class="inner__item"
      >
        <img src="/_nuxt/img/6df8357.png" alt />
      </a>
    </section>
    <a href="/zh/cooperation" target="_blank" class="coop">+ 商务合作</a>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.partner {
  width: 1200px;
  margin: 0 auto;
  padding: 70px 0 56px;
  text-align: center;
  h3 {
    font-size: 32px;
    color: #3c4156;
    font-weight: 700;
    padding-bottom: 40px;
  }
  .inner {
    text-align: left;
    a {
      display: inline-block;
      width: 240px;
      height: 60px;
      overflow-y: hidden;
      vertical-align: middle;
      margin: 10px 0;
      img {
        width: 200px;
        margin-left: 20px;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        -webkit-filter: contrast(0);
        filter: contrast(0);
      }
    }
  }
  .coop:hover {
    color: #5c82ff;
  }
  .coop {
    font-size: 16px;
    color: #8993a8;
    display: inline-block;
    padding-top: 20px;
  }
}
</style>
