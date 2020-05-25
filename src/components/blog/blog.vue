<template>
  <div class="news">
    <section class="head">
      <div class="content">
        <p class="title">博客</p>
        <p class="desc">
          亲爱的读者，请在下方查阅媒体关于BitDeer最新的文章报道
          <br />有关资讯媒体，请通过contact@bitdeer.com联系我们
        </p>
      </div>
    </section>
    <section class="body">
      <ul>
        <li>
          <a href="/zh/news/1504" class>
            <div class="left">
              <img src="https://oss.bitdeer.com/U8Gv1OowaUWEq3e169WE.jpg" alt />
            </div>
            <div class="right">
              <p class="title">
                比特小鹿（BitDeer）全球首发超大算力19世代套餐
                迎减半抗风险永不关机
              </p>
              <p class="summary">北京时间今天中午12：00，比特小鹿（BitDeer）全球首发蚂蚁矿机S19系列套餐，这也是全球首家最先采用该系列矿机机型的挖矿平台。</p>
              <p class="origin">
                <span>金色财经</span>&nbsp;&nbsp;
                <span>2020.03.10</span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="/zh/news/1506" class>
            <div class="left">
              <img src="https://oss.bitdeer.com/8QJfpSlxf11TjqxQqYEQ.png" alt />
            </div>
            <div class="right">
              <p class="title">一图读懂：小鹿新套餐蚂蚁矿机S19系列</p>
              <p class="summary">北京时间3月10日中午12点，比特小鹿新套餐蚂蚁矿机S19系列正式上线！</p>
              <p class="origin">
                <span>比特小鹿</span>&nbsp;&nbsp;
                <span>2020.03.10</span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="/zh/news/1495" class>
            <div class="left">
              <img src="https://oss.bitdeer.com/Hu4oSEZKlgqh0jAO0zOn.jpg" alt />
            </div>
            <div class="right">
              <p class="title">重磅! 比特小鹿（BitDeer）即将于明天全球首发最新机型19世代套餐</p>
              <p class="summary">
                比特小鹿（BitDeer）官方宣布将于北京时间3月10日 12：00
                全网首发最新机型蚂蚁矿机S19系列套餐，这是比特大陆发布新品13天后首次登陆比特小鹿（BitDeer），并成为全球首家最先采用该系列矿机机型的挖矿平台。
              </p>
              <p class="origin">
                <span>金色财经</span>&nbsp;&nbsp;
                <span>2020.03.09</span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="/zh/news/1483" class>
            <div class="left">
              <img src="https://oss.bitdeer.com/rjDwBdhdDtd5mxyfwJ67.jpg" alt />
            </div>
            <div class="right">
              <p class="title">比特小鹿百万复工大礼包 无惧下跌安心迎减半</p>
              <p
                class="summary"
              >当前全球不确定因素加强，比特币也在过去一段时间出现大幅度的波动震荡，对于资金体量小的矿工，再投资新型矿机的成本较高，风险较大；而从整个交易市场看，尽管相较于此前破万的高位，比特币已经有所回调，但对于此时想入场的投资新手来说，仍是个极具风险的投资点位。</p>
              <p class="origin">
                <span>金色财经</span>&nbsp;&nbsp;
                <span>2020.03.03</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
      <div class="load-more">
        <button>
          加载更多
          <i class="el-icon-arrow-down"></i>
        </button>
      </div>
    </section>
    <!---->
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
.news {
  background-color: #eff2f5;
  padding-bottom: 40px;
  .head {
    padding: 40px 0 20px;
    background-color: #fff;
    .content {
      width: 1200px;
      margin: 0 auto;
      color: #999;
      text-align: center;
      .title {
        font-size: 20px;
        color: #2a2d3a;
        padding-bottom: 16px;
        font-weight: 700;
      }
      .desc {
        line-height: 1.2;
      }
    }
  }
  .body {
    width: 1200px;
    margin: 20px auto 30px;
    background-color: #fff;
    border-radius: 4px;
    ul {
      padding: 0 20px;
      li > a {
        padding: 22px 0;
        border-bottom: 1px solid #f7f7f7;
        display: -webkit-box;
        display: flex;
        cursor: pointer;
        .left {
          width: 320px;
          height: 180px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .right {
          -webkit-box-flex: 1;
          flex: 1;
          padding: 10px 0 10px 20px;
          position: relative;
          .title {
            font-size: 24px;
            color: #2a2d3a;
            line-height: 1.3;
          }
          .summary {
            color: #666;
            padding-top: 12px;
            line-height: 1.4;
            height: 58px;
            overflow: hidden;
          }
          .origin {
            position: absolute;
            bottom: 10px;
            font-size: 14px;
            color: #999;
          }
        }
      }
      li > a:hover .title {
        color: #3c63e3;
      }
    }
    .load-more {
      text-align: center;
      padding: 30px 0;
      button {
        color: #a4a4a4;
        background-color: #eff2f5;
        padding: 10px 15px;
        border: none;
        border-radius: 20px;
        font-size: 16px;
        cursor: pointer;
        outline: none;
      }
      button:hover {
        background-color: #5c82ff;
        color: #fff;
      }
    }
  }
}
</style>
