<template>
  <div class="pricing">
    <div class="top-desc">
      <div class="c-head">
        <p class="icons" style="transform: translateX(4px);">
          <i
            class="font_family icon-btclogo"
            style="color: rgb(255, 157, 50); transform: translateX(0px);"
          ></i>
          <i
            class="font_family icon-bchlogo"
            style="color: rgb(16, 208, 120); transform: translateX(-8px);"
          ></i>
        </p>
        <p class="currenct-text Rubik-Medium">BTC/BCH</p>
        <p class="desc">
          SHA256算法矿机是目前矿工最常用的挖矿工具。SHA256矿机共享套餐目前支持挖掘BTC/BCH。
        </p>
      </div>
      <!---->
    </div>
    <mode :medes="dataList" />
    <div class="des" data-v-a29cf934>
      <p class="price-state rubik-medium" data-v-a29cf934>价格调整声明:</p>
      <p class="price-des pos1" data-v-a29cf934>
        BitDeer是一个真实挖矿服务的平台。
      </p>
      <p class="price-des pos2">
        为了保证套餐价格在市场上具有竞争力，商品的价格会根据市场情况、需求和挖掘难度进行动态调整。这是BitDeer相比于其他平台的优势之一。例如，当采矿难度大幅下降时，我们会迅速推出新的价格调整。
      </p>
    </div>
  </div>
</template>
<script>
import Mode from "./Mode";
import { getHashRateSale } from "@/api/price.js";
export default {
  components: { Mode },
  data() {
    return {
      uuid: this.$route.params.id,
      dataList: []
    };
  },
  watch: {
    $route() {
      this.getHashRateSale(this.$route.params.id);
    }
  },
  created() {
    this.getHashRateSale(this.uuid);
  },
  methods: {
    async getHashRateSale(data) {
      const res = await getHashRateSale({ coinUuid: data });
      this.dataList = res.data.data;
    }
  }
};
</script>
<style lang="scss" scoped>
.pricing {
  width: 1200px;
  margin: 0 auto;
}
.top-desc .c-head {
  text-align: center;
  padding-top: 22px;
  .currenct-text {
    font-size: 32px;
    color: #3c4156;
    padding-top: 9px;
  }
  .desc {
    padding-top: 7px;
    opacity: 0.6;
    font-size: 16px;
    color: #3c4156;
    line-height: 20px;
    max-width: 750px;
    margin: 0 auto;
  }
}
.pricing {
  .des {
    margin-top: 50px;
    .price-des {
      width: 1200px;
      font-size: 16px;
      color: #666;
      line-height: 22px;
      margin: 0 auto;
      margin-bottom: 0px;
    }
    .price-des.pos2 {
      margin-bottom: 70px;
    }
    .price-des {
      width: 1200px;
      font-size: 16px;
      color: #666;
      line-height: 22px;
      margin: 0 auto;
      margin-bottom: 0px;
    }
    .price-state {
      width: 1200px;
      font-size: 16px;
      color: #3c4156;
      text-align: left;
      margin: 50px auto 15px;
    }
  }
}
.rubik-medium {
  font-weight: 700 !important;
}
.rubik-medium {
  font-family: Microsoft Yahei, PingFang SC, Arial !important;
}
</style>
