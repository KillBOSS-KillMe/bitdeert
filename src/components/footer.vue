<template>
  <div class="g-footer" data-v-2dc7326a>
    <div class="footer-wrap el-row">
      <div class="el-col el-col-6">
        <div class="col-left">
          <div class="g-f-name"></div>
          <div class="g-f-rights">
            Copyright © 2019 BitDeer All Rights Reserved
          </div>
          <div class="g-f-records" style="display:none;">
            津ICP备19002698号-1
          </div>
          <div class="g-f-share">
            <div class="el-row">
              <div class="el-col el-col-1">
                <a
                  href="/zh/link?target=https%3A%2F%2Fwww.facebook.com%2FBitDeerplatform%2F"
                  target="_blank"
                  rel="nofollow"
                  class="g-f-s-ico"
                >
                  <i class="font_family icon-facebook"></i>
                </a>
              </div>
              <div class="el-col el-col-1">
                <a
                  href="/zh/link?target=https%3A%2F%2Ftwitter.com%2FBitDeerOfficial"
                  target="_blank"
                  rel="nofollow"
                  class="g-f-s-ico"
                >
                  <i class="font_family icon-twitter"></i>
                </a>
              </div>
              <div class="el-col el-col-1">
                <a
                  href="/zh/link?target=https%3A%2F%2Fvk.com%2Fpublic174640639"
                  target="_blank"
                  rel="nofollow"
                  class="g-f-s-ico"
                >
                  <i class="font_family icon-VK"></i>
                </a>
              </div>
              <div class="el-col el-col-1">
                <a
                  href="/zh/link?target=https%3A%2F%2Ft.me%2FBitDeer_CN"
                  target="_blank"
                  rel="nofollow"
                  class="g-f-s-ico"
                >
                  <i class="font_family icon-telegram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="el-col el-col-11">
        <div class="col-right">
          <div class="el-row">
            <div class="el-col el-col-8">
              <div class="g-f-title">产品</div>
              <div class="g-f-link">
                <!---->
                <span>矿机共享套餐</span>
              </div>
              <div class="g-f-link">
                <!---->
                <a href="/zh/calculator" class>计算器</a>
              </div>
            </div>
            <div class="el-col el-col-8">
              <div class="g-f-title">信息</div>
              <div class="g-f-link">
                <!---->
                <a href="/zh/contactUs" class>关于我们</a>
              </div>
              <div class="g-f-link">
                <!---->
                <a href="/zh/contactUs" class>联系我们</a>
              </div>
              <div class="g-f-link">
                <!---->
                <a href="/zh/notice" class>公告中心</a>
              </div>
              <div class="g-f-link">
                <!---->
                <a href="/zh/news" class>新闻</a>
              </div>
            </div>
            <div class="el-col el-col-8">
              <div class="g-f-title">支持</div>
              <div class="g-f-link">
                <!---->
                <a href="/zh/cooperation" class>商务合作</a>
              </div>
              <div class="g-f-link">
                <!---->
                <a
                  href="/zh/link?target=https%3A%2F%2Fbitdeersupport.zendesk.com%2Fhc%2Fen-us"
                  target="_blank"
                  rel="nofollow"
                >
                  帮助中心
                </a>
              </div>
              <div class="g-f-link">
                <!---->
                <a
                  href="/zh/link?target=https%3A%2F%2Fbitdeersupport.zendesk.com%2Fhc%2Fzh-cn%2Frequests%2Fnew"
                  target="_blank"
                  rel="nofollow"
                >
                  提交工单
                </a>
              </div>
              <div class="g-f-link">
                <!---->
                <a href="/zh/info/127" class>隐私条款</a>
              </div>
              <div class="g-f-link">
                <!---->
                <a href="/zh/info/121" class>用户条款</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rate el-col el-col-7">
        <div class="el-row">
          <div class="title rubik-medium">主要汇率</div>
          <div class="list">
            <span>1 BTC = 8890.21 美元</span>
            <span>1 BCH = 332.00 美元</span>
            <span>1 ETH = 239.50 美元</span>
            <span>1 ETC = 7.85 美元</span>
            <span>1 DCR = 18.44 美元</span>
            <span>1 LTC = 60.64 美元</span>
            <span>1 ZEC = 51.05 美元</span>
            <span>1 DASH = 88.25 美元</span>
          </div>
        </div>
      </div>
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
.g-footer {
  background: #31384a;
  width: 100%;
  padding: 0;
  color: #fff;
  .footer-wrap {
    width: 1200px;
    margin: 0 auto;
    padding: 70px 0 20px;
    .g-f-name {
      width: 105px;
      height: 18px;
      background: url(../assets/img/4afb937.png);
      background-size: auto;
      background-size: 105px 18px;
    }
    .g-f-rights {
      text-align: left;
      font-size: 12px;
      padding: 20px 0 10px;
      color: #fff;
      opacity: 0.45;
    }
  }
}
.col-right .g-f-title {
  font-family: Rubik-Medium;
  margin-bottom: 5px;
}
.g-footer .g-f-link {
  padding-top: 15px;
}
.g-footer .g-f-link span {
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  opacity: 0.45;
  cursor: pointer;
}
.g-footer .g-f-link a,
.g-footer .g-f-link span {
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  opacity: 0.45;
  cursor: pointer;
}
.rubik-medium {
  font-weight: 700 !important;
}
.rubik-medium {
  font-family: Microsoft Yahei, PingFang SC, Arial !important;
}
.g-footer .footer-wrap .rate .title {
  font-size: 16px;
  color: #fff;
}
.g-footer .footer-wrap .rate .list {
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
}
.g-footer .footer-wrap .rate .list span:nth-child(2n + 1) {
  text-align: left;
  width: 160px;
}
.g-footer .footer-wrap .rate .list span {
  margin-top: 20px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  opacity: 0.45;
  cursor: pointer;
}
</style>
