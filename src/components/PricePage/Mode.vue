<template>
  <div>
    <div class="mode1 p-mode" v-for="(item, index) in medes" :key="index">
      <div class="mode-head">
        <div class="left">
          <p class="presale-time left-title">
            预计开始挖矿时间
            <b>2020/05/20</b>
          </p>
          <section>
            <ul>
              <li class="lowest-fee fee">
                <p class="title">
                  最低算力费
                  <span style="margin-left: 4px;" class="tip-15">
                    <i
                      class="el-tooltip el-icon-info"
                      style="font-size: 12px; color: rgb(255, 255, 255); opacity: 0.5;"
                      aria-describedby="el-tooltip-7462"
                      tabindex="0"
                    ></i>
                  </span>
                </p>
                <p class="l-price rubik-medium">
                  $
                  <span class="l-num">{{ item.miner.minimumHashrate }}</span>
                </p>
              </li>
              <li class="electri-fee fee">
                <p class="title">电费</p>
                <p class="l-price rubik-medium">
                  $
                  <span class="l-num">{{ item.miner.electricityBill }}</span>
                </p>
              </li>
              <li class="output-from-btc fee">
                <div class="notice-box">
                  <ul>
                    <li class="li-box" style="display: none;">
                      <p class="title zh">
                        <span
                          style="background: #D8D8D8; color: #3c4156; border-radius: 2px; padding: 0 2px;"
                        >BTC</span> 来自BTC.com的理论收益
                      </p>
                      <a>
                        <p class="l-price rubik-medium">
                          $
                          <span class="l-num">{{item.miner.theoreticalReturn}}</span>
                        </p>
                      </a>
                    </li>
                    <li class="li-box" style>
                      <p class="title zh">
                        <span
                          style="background: #D8D8D8; color: #3c4156; border-radius: 2px; padding: 0 2px;"
                        >BCH</span> 来自BTC.com的理论收益
                      </p>
                      <a>
                        <p class="l-price rubik-medium">
                          $
                          <span class="l-num">{{item.miner.theoreticalReturn}}</span>
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
                <i
                  class="el-tooltip el-icon-caret-right zh"
                  aria-describedby="el-tooltip-7072"
                  tabindex="0"
                ></i>
              </li>
            </ul>
          </section>
          <p class="l-desc">
            <span>
              <i class="el-icon-star-on xinghao"></i>每日净挖矿所得等于每日挖矿产出减去算力费和电费。
            </span>
          </p>
        </div>
        <div class="right" style="background-color: rgb(195, 155, 116);">
          <div class="triangle-0"></div>
          <div class="triangle-1" style="background-color: rgb(195, 155, 116);"></div>
          <section class="right__content">
            <div class="n-th">
              <div class="n-th__name">{{item.miner.minerModel}}</div>
            </div>
            <div class="minerparams-wrap">
              <div data-v-058d58e8 class="antminer">
                <li data-v-058d58e8>
                  矿机参数
                  <i
                    data-v-058d58e8
                    class="el-icon-info tip-15 el-tooltip"
                    style="opacity: 0.5;"
                    aria-describedby="el-tooltip-3342"
                    tabindex="0"
                  ></i>
                </li>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="mode-body">
        <div
          class="card-product m-item"
          v-for="(dataList, index) in item.hashRateSales"
          :key="index"
        >
          <div>
            <div class></div>
            <p class="ant-day rubik-medium">{{dataList.cycle_day}} 天</p>
            <p class="ant-mount ant-mount-pos rubik-medium">{{ dataList.hashRate_value }}</p>
            <p class="line"></p>
            <div class="discount-price">
              $
              <span class="large">{{dataList.hashRate_price}}</span>/T/天
            </div>
            <p class="line"></p>
            <div
              v-if="dataList.hashRate_Remaining_count===0"
              class="rubik-medium sold-out-icon sold-out-icon-hidden"
            >抢光了...</div>
            <el-progress
              :percentage="absolutely(dataList.hashRate_sale_count,dataList.hashRate_Total_count)"
              color="#e6a23c"
              :format="format"
            ></el-progress>
            <div
              ga="pricing_product_card"
              @click="toOrder(dataList.coinUuid)"
              class="btn-reserve"
            >立即购买 | {{dataList.total_sale_price}}</div>
            <!---->
            <p class="ant-des1">- {{dataList.minerName}} -</p>
          </div>
          <!---->
        </div>
      </div>
      <!-- <div data-v-92070a10 class="mode4 p-mode">
      <div class="custom-purchase-c">
        <div class="c-p-back">
          <div class="c-left">
            <div class="c-left-duration rubik-medium">
              周期
              <span class="duration-day">(天)</span>
            </div>
            <div class="time-items">
              <span class="active">588</span>
              <span class>518</span>
            </div>
            <div class="c-left-mining rubik-medium">
              算力
              <span class="mining-t">(TH/s)</span>
            </div>
            <div data-v-0f387110 class="slider-c">
              <div data-v-0f387110 id="slider" class="slider"></div>
              <div data-v-0f387110 class="amount-line-ruler"></div>
            </div>
          </div>
          <div class="c-middle"></div>
          <div class="c-right">
            <div class="c-right-bit">&nbsp;</div>
            <hr class="line" />
            <div class="discount-price">
              ≈ $
              <span class="large">0.0272</span>/T/天
            </div>
            <hr class="line" />
            <a href="/zh/buyContract?algorithmid=1&amp;sku_id=200310111&amp;amount=8000" class>
              <div ga="pricing_pruduct_card" class="btn-reserve">立即购买 | $128080.00</div>
            </a>
            <p class="ant-des1">- 蚂蚁矿机S19 -</p>
          </div>
        </div>
      </div>
      </div>-->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    medes: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      uuid: this.$route.params.id
    };
  },
  computed: {},
  created() {},
  methods: {
    absolutely(num1, num2) {
      return (num1 / num2) * 100;
    },
    format(percentage) {
      return `已售：${percentage}%`;
    },
    toOrder(id) {
      this.$router.push({
        name: "order",
        params: {
          id: id
        }
      });
    }
  }
};
</script>
<style>
.m-item .el-progress-bar {
  width: 70%;
}
</style>
<style lang="scss" scoped>
.p-mode {
  margin-top: 50px;
}
.mode-head {
  display: -webkit-box;
  display: flex;
  background-color: #3c4156;
  color: #fff;
  overflow: hidden;
  .left {
    width: 840px;
    padding: 20px 0 20px 30px;
    margin-right: 100px;
    .left-title {
      font-size: 20px;
    }
    .presale-time {
      opacity: 0.8;
    }
    .presale-time b {
      margin-left: 3px;
      background: #fff;
      padding: 1px 4px;
      opacity: 0.6;
      border-radius: 2px;
      font-size: 14px;
      color: #3c4156;
    }
    section {
      padding: 25px 0;
      ul {
        display: flex;
        li {
          -webkit-box-flex: 1;
          flex: 1;
        }
        li.fee {
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          -webkit-box-pack: justify;
          justify-content: space-between;
          padding: 0 6px;
          border-left: 2px solid;
          border-left-color: currentcolor;
          font-size: 14px;
        }
        li.lowest-fee {
          border-color: #ff5502;
        }
        li.electri-fee {
          border-color: #fcc676;
        }
        li .title {
          opacity: 0.8;
          line-height: 1.2;
        }
        li {
          .l-price {
            font-size: 22px;
            .l-num {
              font-size: 32px;
            }
          }
        }
        li.output-from-btc {
          border-color: #29c07e;
          position: relative;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          flex-direction: row;
          .notice-box {
            overflow: hidden;
          }
        }
      }
    }
  }
  .mode-head .left {
    section ul {
      display: -webkit-box;
      display: flex;
    }
    .l-desc {
      opacity: 0.8;
    }
  }
}
.mode-head .right {
  position: relative;
  -webkit-box-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background: #d2a87c;
  background-color: rgb(210, 168, 124);
  .triangle-0 {
    top: 0;
    left: 0;
    background: #313444;
    position: absolute;
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    width: 1000px;
    height: 1000px;
  }
  .triangle-1 {
    top: 0;
    left: 0;
    background: #d2a87c;
    background-color: rgb(210, 168, 124);
    position: absolute;
    -webkit-transform: rotate(22deg);
    transform: rotate(22deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    width: 1000px;
    height: 1000px;
  }
  .right__content {
    position: absolute;
  }
  .n-th,
  .mode-head .right .right__content .minerparams-wrap {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .n-th .n-th__name {
    font-size: 24px;
  }
  .right__content .minerparams-wrap {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .antminer {
    padding-top: 20px;
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    li:first-child::before {
      content: "-";
    }
    li:last-child::after {
      padding-left: 5px;
      content: "-";
    }
  }
}
.mode-body {
  padding: 20px 16px 0;
  border: 1px solid #eae8f2;
  background-color: #f4f4f4;
  overflow: auto;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  .m-item {
    margin-bottom: 20px;
    margin-right: 10px;
    .el-progress-bar {
      width: 70%;
    }
  }
  .card-product {
    width: 284px;
    display: inline-block;
    padding: 30px 0 20px;
    background: #fff;
    border-radius: 2px;
    text-align: center;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  }
  .ant-day,
  .card-product .ant-mount {
    font-size: 24px;
    color: #1f2740;
    text-align: center;
    padding-bottom: 10px;
  }
  .ant-mount {
    font-size: 24px;
    color: #1f2740;
    text-align: center;
    padding-bottom: 10px;
  }
  .card-product {
    .line {
      width: 80%;
      margin: 20px auto 30px;
      border-bottom: 1px solid #eee;
    }
    .ant-mount-pos {
      padding-bottom: 0;
    }
    .discount-price {
      margin: 10px 0;
      font-size: 22px;
      color: #fe8b0f;
    }
    .discount-price .large {
      font-size: 40px;
      line-height: 28px;
    }
    .sold-out-icon {
      padding: 0 10px;
      height: 35px;
      border: 4px solid #cb152b;
      position: absolute;
      top: 38%;
      left: 50%;
      -webkit-transform: rotate(-15deg) translate(-50%, 50%);
      transform: rotate(-15deg) translate(-50%, 50%);
      font-size: 20px;
      color: #cf132a;
      text-align: center;
      white-space: nowrap;
    }
    .el-progress-wrap {
      overflow: hidden;
      display: -webkit-box;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-flow: row nowrap;
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 222px;
      margin: 0 auto;
      -webkit-box-align: center;
      align-items: center;
      white-space: nowrap;
      .el-progress-container {
        width: 148px;
      }
      .txt-progress {
        font-size: 14px;
        color: #999;
        margin-left: 6px;
      }
    }
    .btn-reserve {
      margin: 20px auto;
      width: 240px;
      height: 48px;
      line-height: 48px;
      font-size: 16px;
      text-align: center;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      cursor: pointer;
    }
    .btn-reserve {
      background: #5c82ff;
      box-shadow: 0 2px 24px 0 rgba(92, 130, 255, 0.35);
      border-radius: 4px;
      color: #fff;
    }
    .ant-des1 {
      font-size: 14px;
      color: #999;
      text-align: center;
      padding-bottom: 10px;
    }
  }
  .m-item:nth-child(4n) {
    margin-right: 0;
  }
}
.rubik-medium {
  font-family: Microsoft Yahei, PingFang SC, Arial !important;
}
.rubik-medium {
  font-weight: 700 !important;
}
.mode4 {
  margin-top: -1px !important;
  .custom-purchase-c {
    height: 350px;
    padding: 0 17px 30px;
    border: 1px solid #eae8f2;
    border-top-color: rgb(234, 232, 242);
    border-top-style: solid;
    border-top-width: 1px;
    border-top: none;
    background-color: #f4f4f4;
    .c-p-back {
      width: 1166px;
      height: 320px;
      background: #fff;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
      display: -webkit-box;
      display: flex;
      .c-left {
        margin: 36px 42px 0 30px;
        .c-left-duration {
          width: 85px;
          height: 24px;
          font-size: 20px;
          color: #1c1f28;
          margin-bottom: 24px;
          .duration-day {
            font-size: 16px;
          }
        }
        .time-items {
          overflow: hidden;
          span {
            padding-left: 26px;
            font-size: 16px;
            color: #1c1f28;
            float: left;
            line-height: 28px;
            margin-right: 31px;
            position: relative;
            cursor: pointer;
          }
          span.active::before {
            border: 5px solid #5c82ff;
          }
          span::before {
            content: "";
            display: block;
            box-sizing: border-box;
            width: 18px;
            height: 18px;
            border: 1px solid #979797;
            border-radius: 18px;
            position: absolute;
            left: 0;
            top: 5px;
          }
        }
        .c-left-mining {
          margin-top: 48px;
          margin-bottom: 24px;
          font-size: 20px;
          color: #1c1f28;
          .mining-t {
            font-size: 16px;
          }
        }
      }
      .c-middle {
        width: 1px;
        height: 280px;
        margin-right: 30px;
        margin-top: 26px;
        background-image: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(hsla(0, 0%, 93.3%, 0)),
          color-stop(51%, #d8d8d8),
          to(hsla(0, 0%, 84.7%, 0))
        );
        background-image: linear-gradient(
          -180deg,
          hsla(0, 0%, 93.3%, 0),
          #d8d8d8 51%,
          hsla(0, 0%, 84.7%, 0)
        );
      }
      .c-right {
        width: 302px;
        margin-top: 36px;
        text-align: center;
        .c-right-bit {
          width: 68px;
          height: 24px;
          margin: auto;
          font-size: 20px;
          color: #434343;
        }
        .line {
          width: 80%;
          margin: 20px auto 30px;
          border: 1px solid #eee;
          opacity: 0.6;
        }
        .discount-price {
          margin: 10px 0;
          font-size: 22px;
          color: #fe8b0f;
          white-space: nowrap;
          .large {
            font-size: 50px;
            line-height: 28px;
          }
        }
        .btn-reserve {
          margin: 22px auto;
          width: 240px;
          height: 48px;
          line-height: 48px;
          background: #5c82ff;
          box-shadow: 0 2px 24px 0 rgba(92, 130, 255, 0.35);
          border-radius: 4px;
          font-size: 16px;
          color: #fff;
          text-align: center;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          cursor: pointer;
        }
        .ant-des1 {
          font-size: 14px;
          color: #999;
          text-align: center;
          padding-bottom: 10px;
        }
      }
    }
  }
}
.slider-c .slider {
  position: relative;
  width: 716px;
  height: 24px;
  background: #f3f3f3;
  border-radius: 14.5px;
}
</style>
