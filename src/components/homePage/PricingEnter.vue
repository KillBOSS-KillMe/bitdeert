<template>
  <div id="pricing-enter" class="pricing-enter" data-v-728e5b6c>
    <h1 class="title">短时间、低成本获取数字货币</h1>
    <a href="/zh/act/freshgift" class="new-user zh"></a>
    <section class="enter-warp">
      <ul>
        <li class="enter-item per25" v-for="(item, index) in pricingList" :key="index">
          <router-link :to="{ path: 'pricing', query: { id: item.id } }">
            <div class="move">
              <div class="icons">
                <img :src="item.coin_icon" alt />
              </div>
              <p class="curreny-text">{{ item.coin_symbol }}</p>
              <p class="rate">{{ item.miner_nanme }}</p>
            </div>
            <p class="right-arrow">
              <i class="font_family icon-rightarrow"></i>
            </p>
          </router-link>
        </li>
      </ul>
    </section>
    <div class="calculator-rule" data-v-728e5b6c>
      以上静态收益率为该专区内多个套餐的最大值。查看
      <a href="/zh/calculator">静态收益率的计算规则</a>
    </div>
  </div>
</template>
<script>
import { getSaleCoin } from "@/api/nav.js";
import { Message } from "element-ui";
export default {
  data() {
    return {
      pricingList: [
        {
          title: "BTC/BCH",
          dec: "静态收益率100%",
          icon: "",
          id: 1
        },
        {
          title: "LTC",
          dec: "静态收益率100%",
          icon: "",
          id: 2
        },
        {
          title: "ETH",
          dec: "静态收益率100%",
          icon: "",
          id: 3
        },
        {
          title: "ZEC",
          dec: "静态收益率100%",
          icon: "",
          id: 4
        },
        {
          title: "ETC",
          dec: "静态收益率100%",
          icon: "",
          id: 5
        },
        {
          title: "LTC",
          dec: "静态收益率100%",
          icon: "",
          id: 6
        },
        {
          title: "DCR",
          dec: "静态收益率100%",
          icon: "",
          id: 7
        }
      ]
    };
  },
  created() {
    this.getSaleCoin();
  },
  methods: {
    async getSaleCoin() {
      const res = await getSaleCoin();
      console.log("数字货币", res.data);
      if (res.data.code !== 200) {
        console.log("不等于数字货币", res.code);
        Message({
          message: res.data.msg,
          type: "error",
          duration: 5 * 1000
        });
      } else {
        console.log("数字货币", res.data);
        this.pricingList = res.data.data;
      }
    }
  }
};
</script>
<style lang="scss">
.pricing-enter {
  background-color: #f3f5fa;
  padding: 50px 0 22px;
  .title {
    font-size: 32px;
    color: #32374a;
    text-align: center;
    font-weight: 700;
    padding-bottom: 14px;
  }
  .new-user.zh {
    width: 270px;
    background: url(../../assets/img/0efa1cb.png) top no-repeat;
    background-size: auto;
    background-size: auto 100%;
  }
  .new-user {
    display: block;
    height: 38px;
    width: 320px;
    margin: 0 auto;
    background: url(../../assets/img/0efa1cb.png) top no-repeat;
    background-size: auto 100%;
    cursor: pointer;
  }
  .enter-warp {
    width: 1200px;
    background-color: #fff;
    margin: 40px auto 0;
    ul {
      display: -webkit-box;
      display: flex;
      flex-wrap: wrap;
      li.enter-item:hover {
        background-color: #32374a;
      }
      li.enter-item:hover .move p {
        color: #fff;
      }
      li {
        position: relative;
        width: 25%;
        text-align: center;
        box-sizing: border-box;
        padding: 32px 10px;
        box-shadow: 0 1px 0 0 #f3f5fa;
        .icons img {
          display: inline-block;
          width: 36px;
          border-radius: 18px;
          position: relative;
        }
        .curreny-text {
          font-size: 24px;
          color: #333;
          font-weight: 700;
          padding: 14px 0 12px;
        }
        .rate {
          font-size: 14px;
          color: #666;
          width: 100%;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .right-arrow {
          position: absolute;
          bottom: 10px;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          opacity: 0;
          color: #fff;
        }
      }
    }
  }
}
.calculator-rule {
  margin-top: 20px;
  height: 46px;
  font-size: 12px;
  text-align: center;
  color: #8993a8;
  padding-bottom: 32px;
  background: #f3f5fa;
  a {
    text-decoration: underline;
    font-style: italic;
    color: #444c6d;
  }
}
</style>
