<template>
  <div class="mining-steps">
    <h2 class="title">来比特小鹿轻松挖矿</h2>
    <h3 class="subtitle">简化挖矿繁琐步骤，打包矿机购买、物流、矿场选择、机器维护、矿池接入的复杂环节</h3>
    <div class="warp animate">
      <section class="steps">
        <div>
          <img src="@/assets/img/34b9695.png" alt />
          <p>用户购买套餐</p>
        </div>
        <div>
          <img src="@/assets/img/e0dcb60.png" alt />
          <p>比特小鹿矿机分时共享平台</p>
        </div>
        <div>
          <img src="@/assets/img/43e9625.png" alt />
          <p>矿池分配收益</p>
        </div>
        <div>
          <img src="@/assets/img/b95ffe1.png" alt />
          <p>用户收到收益</p>
        </div>
      </section>
      <section class="belongs">
        <div class="arrow-top">
          <img src alt />
        </div>
        <!-- <div class="desc">
          <span>比特小鹿为你简化挖矿流程</span>
        </div> -->
      </section>
      <section class="bitdeer-steps">
        <div>
          <img src="@/assets/img/4aee527.png" alt />
          <p>采购矿机</p>
        </div>
        <div>
          <img src="@/assets/img/7944d40.png" alt />
          <p>运输矿机至矿场</p>
        </div>
        <div>
          <img src="@/assets/img/61e8cab.png" alt />
          <p>调试矿机联通矿池</p>
        </div>
        <div>
          <img src="@/assets/img/89a56b1.png" alt />
          <p>运维管理</p>
        </div>
      </section>
    </div>
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
.mining-steps {
  padding: 70px 0 80px;
  text-align: center;
  min-height: 756px;
  .subtitle,
  .warp {
    width: 1200px;
    margin: 0 auto;
  }
  .subtitle {
    font-size: 16px;
    color: #8993a8;
    padding: 15px 0 68px;
  }
  .warp {
    .steps {
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
    }
    .steps > div {
      position: relative;
      width: 240px;
      text-align: center;
      padding-bottom: 10px;
    }
    .steps > div:first-child img {
      -webkit-transition: -webkit-transform 0.45s ease-in-out;
      transition: -webkit-transform 0.45s ease-in-out;
      transition: transform 0.45s ease-in-out;
      transition: transform 0.45s ease-in-out,
        -webkit-transform 0.45s ease-in-out;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    .steps > div img {
      width: 200px;
    }
    .steps > div p {
      padding-top: 10px;
      font-size: 16px;
      color: #3f465c;
    }
  }
  .belongs {
    .arrow-top {
      padding-top: 10px;
      width: 37px;
      margin: 0 auto;
    }
    .arrow-top {
      padding-top: 10px;
      width: 37px;
      margin: 0 auto;
    }
  }
  .warp .bitdeer-steps {
    width: 720px;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 30px 20px;
    margin-left: 82px;
    border: 1px dashed #8993a8;
    background-color: #f5f6f8;
    margin-top: -16px;
    border-radius: 2px;
    min-height: 136px;
    box-sizing: content-box;
    div {
      width: 120px;
      position: relative;
    }
    div img {
      width: 100px;
    }
    div p {
      padding-top: 20px;
      font-size: 14px;
      color: #3f465c;
    }
    div:not(:last-child)::after,
    div p {
      -webkit-transition: opacity 0.48s ease-in-out 1.69s;
      transition: opacity 0.48s ease-in-out 1.69s;
      opacity: 1;
    }
    div:not(:last-child)::after {
      font-family: iconfont !important;
      font-size: 12px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      content: "\E632";
      color: #8993a8;
      position: absolute;
      right: -60px;
      top: 50px;
      opacity: 0;
    }
  }
}
</style>
