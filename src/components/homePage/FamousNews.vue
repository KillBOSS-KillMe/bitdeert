<template>
  <div class="famous-news">
    <div class="news-wrap">
      <section>
        <router-link :to="{name:'pricing', params:{id:12}}" class="card">
          <div class="icon">
            <img
              alt
              data-src="https://oss.bitdeer.com/VkoGReu3O2ot2yXxo0bl.png"
              src="https://oss.bitdeer.com/VkoGReu3O2ot2yXxo0bl.png"
              lazy="loaded"
            />
          </div>
          <div class="c-body">
            <h3>比特小鹿（BitDeer）全球首发超大算力19世代套餐 迎减半抗风险永不关机</h3>
            <p>北京时间今天中午12：00，比特小鹿（BitDeer）全球首发蚂蚁矿机S19系列套餐，这也是全球首家最先采用该系列矿机机型的挖矿平台。</p>
            <div class="cover">
              <img
                alt
                data-src="https://oss.bitdeer.com/U8Gv1OowaUWEq3e169WE.jpg?x-oss-process=image/resize,w_320"
                src="https://oss.bitdeer.com/U8Gv1OowaUWEq3e169WE.jpg?x-oss-process=image/resize,w_320"
                lazy="loaded"
              />
            </div>
          </div>
        </router-link>
        <a href="https://www.bitdeer.com/zh/news/1506" target="_blank" class="card">
          <div class="icon">
            <img
              alt
              data-src="https://oss.bitdeer.com/edKh95GTYkRwMf17VWvJ.png"
              src="https://oss.bitdeer.com/edKh95GTYkRwMf17VWvJ.png"
              lazy="loaded"
            />
          </div>
          <div class="c-body">
            <h3>一图读懂：小鹿新套餐蚂蚁矿机S19系列</h3>
            <p>北京时间3月10日中午12点，比特小鹿新套餐蚂蚁矿机S19系列正式上线！</p>
            <div class="cover">
              <img
                alt
                data-src="https://oss.bitdeer.com/8QJfpSlxf11TjqxQqYEQ.png?x-oss-process=image/resize,w_320"
                src="https://oss.bitdeer.com/8QJfpSlxf11TjqxQqYEQ.png?x-oss-process=image/resize,w_320"
                lazy="loaded"
              />
            </div>
          </div>
        </a>
        <a href="https://www.jinse.com/blockchain/599126.html" target="_blank" class="card">
          <div class="icon">
            <img
              alt
              data-src="https://oss.bitdeer.com/VkoGReu3O2ot2yXxo0bl.png"
              src="https://oss.bitdeer.com/VkoGReu3O2ot2yXxo0bl.png"
              lazy="loaded"
            />
          </div>
          <div class="c-body">
            <h3>比特小鹿百万复工大礼包 无惧下跌安心迎减半</h3>
            <p>当前全球不确定因素加强，比特币也在过去一段时间出现大幅度的波动震荡，对于资金体量小的矿工，再投资新型矿机的成本较高，风险较大；而从整个交易市场看，尽管相较于此前破万的高位，比特币已经有所回调，但对于此时想入场的投资新手来说，仍是个极具风险的投资点位。</p>
            <div class="cover">
              <img
                alt
                data-src="https://oss.bitdeer.com/rjDwBdhdDtd5mxyfwJ67.jpg?x-oss-process=image/resize,w_320"
                src="https://oss.bitdeer.com/rjDwBdhdDtd5mxyfwJ67.jpg?x-oss-process=image/resize,w_320"
                lazy="loaded"
              />
            </div>
          </div>
        </a>
      </section>
      <div class="fa-footer">
        <button class="buy" @click="buyclick('pricing')">选购套餐</button>
        <br />
        <a href="/zh/news" target="_blank" class="see-all">查看所有报道</a>
      </div>
    </div>
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
.famous-news {
  .news-wrap {
    width: 1200px;
    margin: 0 auto;
    background: #f7f8fb;
    border: 1px solid #f1f3f8;
    border-radius: 2px;
    padding: 30px 30px 40px;
    section {
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      .card:hover {
        background-color: #fff;
        box-shadow: 0 10px 10px 0 #f1f1f1;
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        img {
          -webkit-transform: scale(1.05);
          transform: scale(1.05);
        }
      }
      .card {
        padding: 30px;
        -webkit-box-flex: 1;
        flex: 1;
        cursor: pointer;
        -webkit-transition: -webkit-transform 0.5s ease-in-out;
        transition: -webkit-transform 0.5s ease-in-out;
        transition: transform 0.5s ease-in-out;
        transition: transform 0.5s ease-in-out,
          -webkit-transform 0.5s ease-in-out;
        .icon {
          height: 32px;
          text-align: center;
          img {
            height: 100%;
          }
        }
        .c-body {
          position: relative;
          padding-top: 20px;
          h3 {
            font-size: 20px;
            line-height: 1.3;
            color: #2a2d3a;
            font-weight: 700;
            height: 56px;
            overflow-y: hidden;
          }
          p {
            margin: 16px 0 20px;
            font-size: 14px;
            color: #666;
            line-height: 24px;
            box-sizing: content-box;
            height: 96px;
            overflow-y: hidden;
          }
          .cover {
            width: 320px;
            height: 170px;
            overflow: hidden;
            img {
              width: 100%;
              -webkit-transition: -webkit-transform 0.5s ease-in-out;
              transition: -webkit-transform 0.5s ease-in-out;
              transition: transform 0.5s ease-in-out;
              transition: transform 0.5s ease-in-out,
                -webkit-transform 0.5s ease-in-out;
            }
          }
        }
      }
    }
  }
}
.famous-news .news-wrap .fa-footer {
  padding-top: 46px;
  text-align: center;
  .buy {
    padding: 16px 98px;
    font-size: 16px;
    background-color: #5c82ff;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    outline: none;
  }
  .see-all {
    font-size: 14px;
    color: #3c4156;
    margin-top: 10px;
    padding: 10px;
    display: inline-block;
  }
}
</style>
