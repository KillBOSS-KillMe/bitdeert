<template>
  <div class="advantage">
    <h2>值得信赖的矿机分时共享平台</h2>
    <h3>500万+用户量 复购率80% 每日产出100+BTC</h3>
    <section>
      <div>
        <div class="img-wrap">
          <img src="/_nuxt/img/c0159db.png" alt />
        </div>
        <p class="title">比特大陆顶级供货方</p>
        <p class="intro">比特大陆提供最新款矿机支持，矿机质量保障</p>
      </div>
      <div>
        <div class="img-wrap">
          <img src="/_nuxt/img/29d2e03.png" alt />
        </div>
        <p class="title">五大矿池深度合作</p>
        <p class="intro">BTC.com、AntPool、F2Pool、ViaBTC、BTC.TOP五大矿池合作，支持用户自由选择矿池挖矿</p>
      </div>
      <div>
        <div class="img-wrap">
          <img src="/_nuxt/img/04ded28.png" alt />
        </div>
        <p class="title">支持矿池直接打款</p>
        <p class="intro">可选择矿池直接将收益打给用户，BitDeer不参与收益的分配与划拨</p>
      </div>
      <div>
        <div class="img-wrap">
          <img src="/_nuxt/img/d70a9b7.png" alt />
        </div>
        <p class="title">24小时维护的专业团队</p>
        <p class="intro">平台24小时提供专业的挖矿服务保障人员</p>
      </div>
    </section>
    <button class="buy" @click="buyclick('pricing')">选购套餐</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    buyclick(id) {
      console.log(id);
      document.getElementById('pricing').scrollIntoView();
    }
  }
};
</script>

<style lang="scss" scoped>
.advantage {
  text-align: center;
  background: url(/_nuxt/img/13a65b8.png) bottom no-repeat #2a2d3a;
  background-size: auto;
  background-size: 100%;
  color: #fff;
  padding: 70px 0;
  h2 {
    font-size: 32px;
    font-weight: 700;
  }
  h3 {
    font-size: 16px;
    opacity: 0.8;
    padding-top: 15px;
  }
  section {
    width: 1200px;
    margin: 0 auto;
    padding: 80px 0 60px;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  section > div {
    text-align: center;
    width: 230px;
    .img-wrap {
      display: inline-block;
      width: 112px;
      height: 112px;
      img {
        width: 100%;
      }
    }
    .title {
      font-weight: 700;
      padding-top: 24px;
      line-height: 1.3;
    }
    .intro {
      font-size: 14px;
      padding: 8px 0 16px;
      line-height: 1.3;
      opacity: 0.85;
    }
  }
  .buy {
    padding: 16px 98px;
    font-size: 16px;
    background-color: #5c82ff;
    border: none;
    border-radius: 4px;
    color: #fff;
    outline: none;
    cursor: pointer;
  }
}
</style>
