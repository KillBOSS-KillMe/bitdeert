<template>
  <div>
    <div class="order-wrap">
      <div class="order-summary">
        <div class="o-head">
          <div class="o-head-title">订单信息</div>
        </div>
        <el-form
          ref="form"
          :model="Oform"
          class="form-box"
          label-position="left"
          label-width="150px"
        >
          <div class="form-item-wrap">
            <el-form-item label="币种">
              <el-select v-model="Oform.currency" style="width:230px" placeholder="请选择">
                <el-option
                  v-for="item in currencyOp"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span class="change-tip">BTC</span>
            </el-form-item>
            <!-- <el-form-item label="机型">
              <span class="form-label-txt">{{ Oform.models }}</span>
            </el-form-item>
            <el-form-item label="算力">
              <el-input
                v-model="Oform.force"
                type="text"
                disabled="disabled"
                autocomplete="off"
                maxlength="6"
                style="width:160px"
                placeholder="请输入数值"
              />
              <el-button disabled="disabled" style="margin-left:-1px;background-color:#F5F7FA">TH/s</el-button>
            </el-form-item>
            <el-form-item label="币种">
              <el-select
                v-model="Oform.setCycle"
                disabled="disabled"
                style="width:230px"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in setCycleOp"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span class="change-tip">(2020.05.20~2021.12.29)</span>
            </el-form-item>
            <el-form-item label="延长天数">
              <div class="coupon-container">
                <div class="coupon-summary">
                  <p class="no-coupon">
                    <span>无可用礼品券</span>
                    <span class="coupon-toggle">
                      <i class="el-icon-caret-bottom"></i>
                    </span>
                  </p>
                </div>
                <div class="coupon-detail" style="display:none;">
                  <div class="coupon-list"></div>
                  <div class="see-all-coupon">
                    <a href="/zh/dashboard/coupon" target="_blank" class="rubik-medium">查看全部礼品券</a>
                  </div>
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <label slot="label" class="el-form-item__label" style="width:150px;">
                矿池
                <span style="margin-left:0px;" class="pool-tip">
                  <i
                    class="el-tooltip el-icon-info"
                    style="font-size:14px;color:#ccc;opacity:1;"
                    aria-describedby="el-tooltip-3535"
                    tabindex="0"
                  ></i>
                </span>
              </label>
              <div>
                <section class="pool-list">
                  <p class>AntPool</p>
                  <p class>BTC.com</p>
                  <p class="selected">F2Pool</p>
                  <p class>ViaBTC</p>
                  <p class>BTC.TOP</p>
                </section>
                <div class="change-tip">订单生效之后可以再修改矿池</div>
              </div>
            </el-form-item>-->
            <ul class="infoDom">
              <li>
                <span>总产量：100.00BTC</span>
                <span>日产量：100.00BTC</span>
              </li>
              <li>
                <span>总成本：100.00</span>
                <span>日成本：100.00</span>
              </li>
              <li>
                <span>总收益：100.00</span>
                <span>日收益：100.00</span>
              </li>
              <li>
                <span>剩余时间：100.00天</span>
                <span>回本周期：100.00天</span>
              </li>
            </ul>
            <ul class="chartsDom">
              <li>
                <h4>总份额图表</h4>
                <div id="allShareChartsID">图表内容</div>
              </li>
              <li>
                <h4>产品份额</h4>
                <div id="productShareChartsID">图表内容</div>
              </li>
              <li>
                <h4>在线Pos值</h4>
                <div id="onlinePosChartsID">图表内容</div>
              </li>
              <li>
                <h4>产品Pos值</h4>
                <div id="productPosChartsID">图表内容</div>
              </li>
            </ul>
          </div>
          <div class="money">
            <div class="money-section">
              <span class="total-section">商品金额</span>
              <div class="num-and-tip">
                <span class="num">
                  $
                  <span>604.</span>
                  20
                </span>
              </div>
            </div>
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
          </div>

          <div class="confirm-box">
            <el-button type="primary" class="confirm-btn" @click="showBuyShow = true">
              <span>确定</span>
            </el-button>
            <!-- <el-button type="primary" class="confirm-btn" disabled="disabled">
              <span>确定</span>
            </el-button>-->
            <el-dialog :visible.sync="showBuyShow" width="1100px" :before-close="showBuyShow">
              <div class="showBuyDom">
                <div class="formDom">
                  <div class="topInfo">
                    <div class="titleInfo">
                      <span>代付金额</span>
                      4780.00
                    </div>
                    <div class="timeInfo">
                      订单将在倒计时结束后失效，请及时支付
                      <div>
                        <span>05</span>:
                        <span>05</span>:
                        <span>05</span>
                      </div>
                    </div>
                  </div>
                  <div class="formCon">
                    <label>收款账户信息</label>
                    <el-input v-model="input" placeholder="银行"></el-input>
                    <el-input v-model="input" placeholder="账号"></el-input>
                    <el-input v-model="input" placeholder="收款方"></el-input>
                    <div class="button">
                      <el-button type="primary">已支付</el-button>
                      <el-button>以后支付</el-button>
                    </div>
                  </div>
                </div>
                <div class="orderInfo">
                  <div class="itemInfo">
                    <label>订单说明</label>
                    <div>1010101010101010101010</div>
                  </div>
                  <div class="itemInfo">
                    <div>
                      <label>订单ID</label>
                      101010101010
                    </div>
                    <div>
                      <label>收款方</label>
                      纽狮科技
                    </div>
                  </div>
                  <div class="itemInfo">
                    <div>
                      <label>订单说明</label>
                      100.00美元
                    </div>
                    <div>
                      <label>订单说明</label>
                      100.00美元
                    </div>
                    <div>
                      <label>合计</label>
                      <span>100.00美元</span>
                    </div>
                  </div>
                  <div class="program">
                    <label>BTC计算方案(130D * 100T)</label>
                    <div>
                      <span>100.00美元</span>
                      ✕1
                    </div>
                  </div>
                </div>
              </div>
              <!-- <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="showBuyShow = false">确 定</el-button>
              </span>-->
            </el-dialog>
            <div>
              <el-checkbox v-model="Oform.checked">我接受</el-checkbox>
              <a href="/zh/info/121" class target="_blank" ga="order_terms_view">比特小鹿用户服务协议</a>
            </div>
            <p class="confirm-txt">如果你没有以下支付方式，请通过右下角的反馈入口联系客服</p>
          </div>
        </el-form>
        <div class="support-payment">
          <div class="support-tex rubik-medium">支付方式</div>
          <div class="icons">
            <p class="grid-content bg-purple">
              <i class="font_family icon-BTC" style="color: rgb(255, 153, 1);"></i>
              <span>BTC</span>
            </p>
            <p class="grid-content bg-purple">
              <i class="font_family icon-BCH" style="color: rgb(64, 226, 102);"></i>
              <span>BCH</span>
            </p>
            <p class="grid-content bg-purple">
              <i class="font_family icon-ETH" style="color: rgb(177, 136, 255);"></i>
              <span>ETH</span>
            </p>
            <p class="grid-content bg-purple">
              <i class="font_family icon-LTC" style="color: rgb(0, 0, 0);"></i>
              <span>LTC</span>
            </p>
            <p class="grid-content bg-purple">
              <i class="font_family icon-USDT" style="color: rgb(38, 161, 123);"></i>
              <span>USDT(ERC20)</span>
            </p>
            <p class="grid-content bg-purple">
              <i class="font_family icon-SWIFT" style="color: rgb(1, 133, 242);"></i>
              <span>T/T</span>
            </p>
            <p class="grid-content bg-purple">
              <i class="font_family icon-USDTOMNI" style="color: rgb(29, 70, 145);"></i>
              <span>USDT(OMNI)</span>
            </p>
          </div>
        </div>
        <div class="payment-notice">
          <div class="sub-amount">注意事项:</div>
          <div class="notice-item">
            <h4 class="rubik-medium">法律声明</h4>
            <div
              class="tips-text"
            >矿机共享共享服务在以下国家或地区被禁止:巴尔干半岛、白俄罗斯、缅甸、科特迪瓦(象牙海岸)，克里米亚-乌克兰、古巴、刚果民主共和国、伊朗、伊拉克、利比里亚、朝鲜、苏丹、叙利亚、委内瑞拉、津巴布韦、中国香港和中国大陆。请确认矿机共享服务在您的国家或地区是合法的。否则，您将承担一切法律后果。</div>
          </div>
          <div class="notice-item">
            <h4 class="rubik-medium">无法退款</h4>
            <div class="tips-text">按照协议规定，一旦订单已付款，将不支持退款。</div>
          </div>
          <div class="notice-item">
            <h4 class="rubik-medium">定价规则</h4>
            <div
              class="tips-text"
            >矿机共享套餐的定价会根据数字货币价格等多因素调整。实际购买价格以用户付款时为准，后续即使价格发生变化，BitDeer也不会对这个订单进行差价补偿。</div>
          </div>
          <div class="notice-item">
            <h4 class="rubik-medium">算力波动说明</h4>
            <div class="tips-text">BitDeer提供的套餐对应的为真实算力，真实算力由于网络、矿机功率等不稳定因素会导致波动，BitDeer不承诺100%稳定运行。</div>
          </div>
          <div class="notice-item">
            <h4 class="rubik-medium">不可控风险声明</h4>
            <div
              class="tips-text"
            >BitDeer不对以下不可控风险所造成的损失负责：不能预见、不能避免或不能克服的客观事件，包括自然灾害如洪水、火山爆发、地震、山崩、火灾、被中国政府部门评定为百年不遇级别以上的风暴和恶劣气候等，政府行为和政府指令，城市级别的电网供电事故，以及社会异常事件如战争、罢工、动乱等。</div>
          </div>
          <div class="notice-item">
            <h4 class="rubik-medium">使用范围声明</h4>
            <div class="tips-text">用户不得将BitDeer提供的算力用于攻击网络等违法违规行为，否则BitDeer有权强行收回您的算力。</div>
          </div>
        </div>
        <div class="payment-instructions">
          <h3>付款说明:</h3>
          <ul>
            <li>1.付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明</li>
            <li>1.付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明</li>
            <li>1.付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明</li>
            <li>1.付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明</li>
            <li>1.付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明</li>
            <li>1.付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明</li>
            <li>1.付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明付款说明</li>
          </ul>
        </div>
      </div>
      <div class="pledge-dialog">
        <div class="el-dialog__wrapper" style="display: none;">
          <div class="el-dialog el-dialog--center" style="margin-top: 18%; width: 480px;">
            <div class="el-dialog__header">
              <span class="el-dialog__title"></span>
              <!---->
            </div>
            <!---->
            <div class="el-dialog__footer">
              <span class="dialog-footer">
                <div class="pledge-check">
                  <div class="el-row">
                    <div class="el-col el-col-2">
                      <label
                        role="checkbox"
                        aria-checked="true"
                        class="el-checkbox pledge-check-btn is-checked"
                      >
                        <span aria-checked="mixed" class="el-checkbox__input is-checked">
                          <span class="el-checkbox__inner"></span>
                          <input
                            type="checkbox"
                            aria-hidden="true"
                            class="el-checkbox__original"
                            value
                          >
                        </span>
                        <!---->
                      </label>
                    </div>
                    <div class="el-col el-col-22">
                      <span class="check-txt">本人保证上述声明属实，并承担一切法律后果。</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="el-button el-button--primary"
                  ga="order_pledge_confirm"
                >
                  <!---->
                  <!---->
                  <span>确定</span>
                </button>
                <button type="button" class="el-button el-button--default">
                  <!---->
                  <!---->
                  <span>取消</span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="el-dialog__wrapper add-addr-dialog" style="display: none;">
          <div class="el-dialog el-dialog--center" style="margin-top: 15vh; width: 600px;">
            <div class="el-dialog__header">
              <span class="el-dialog__title">添加新的BTC地址</span>
              <!---->
            </div>
            <!---->
            <div class="el-dialog__footer">
              <span class="dialog-footer">
                <button type="button" class="el-button el-button--primary">
                  <!---->
                  <!---->
                  <span>确定</span>
                </button>
                <button type="button" class="el-button el-button--default">
                  <!---->
                  <!---->
                  <span>取消</span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="to-bind">
        <div class="el-dialog__wrapper safe-tip-dialog" style="display: none;">
          <div class="el-dialog el-dialog--center" style="margin-top: 15vh; width: 360px;">
            <div class="el-dialog__header">
              <span class="el-dialog__title"></span>
              <!---->
            </div>
            <!---->
            <div class="el-dialog__footer">
              <span class="dialog-footer">
                <button type="button" class="el-button el-button--primary">
                  <!---->
                  <!---->
                  <span>去绑定</span>
                </button>
                <button type="button" class="el-button el-button--default">
                  <!---->
                  <!---->
                  <span>取消</span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
      Oform: {
        currency: "1",
        models: "蚂蚁矿机S19 Pro",
        force: "5",
        setCycle: "1",
        renewal: false,
        checked: false
      },
      currencyOp: [
        {
          value: 1,
          label: "Bitcoin"
        },
        {
          value: 2,
          label: "Bitcoin Cash"
        }
      ],
      setCycleOp: [
        {
          value: "1",
          label: "588天"
        },
        {
          value: "2",
          label: "688天"
        }
      ],
      showBuyShow: false
    };
  },
  mounted() {
    // 加载算力信息
    this.allShareCharts();
    this.productShareCharts();
    this.onlinePosCharts();
    this.productPosCharts();
  },
  methods: {
    // 总份额图表
    allShareCharts() {
      let chartDomNode = this.$echarts.init(
        document.getElementById("allShareChartsID")
      );
      chartDomNode.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      });
    },
    // 产品份额
    productShareCharts() {
      let chartDomNode = this.$echarts.init(
        document.getElementById("productShareChartsID")
      );
      chartDomNode.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      });
    },
    // 在线Pos值
    onlinePosCharts() {
      let chartDomNode = this.$echarts.init(
        document.getElementById("onlinePosChartsID")
      );
      chartDomNode.setOption({
        xAxis: {
          type: "category",
          boundaryGap: false
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "30%"]
        },
        visualMap: {
          type: "piecewise",
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            {
              gt: 1,
              lt: 3,
              color: "rgba(0, 180, 0, 0.5)"
            },
            {
              gt: 5,
              lt: 7,
              color: "rgba(0, 180, 0, 0.5)"
            }
          ]
        },
        series: [
          {
            type: "line",
            smooth: 0.6,
            symbol: "none",
            lineStyle: {
              color: "green",
              width: 5
            },
            markLine: {
              symbol: ["none", "none"],
              label: { show: false },
              data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
            },
            areaStyle: {},
            data: [
              ["2019-10-10", 200],
              ["2019-10-11", 400],
              ["2019-10-12", 650],
              ["2019-10-13", 500],
              ["2019-10-14", 250],
              ["2019-10-15", 300],
              ["2019-10-16", 450],
              ["2019-10-17", 300],
              ["2019-10-18", 100]
            ]
          }
        ]
      });
    },
    // 产品Pos值
    productPosCharts() {
      let chartDomNode = this.$echarts.init(
        document.getElementById("productPosChartsID")
      );
      chartDomNode.setOption({
        xAxis: {
          type: "category",
          boundaryGap: false
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "30%"]
        },
        visualMap: {
          type: "piecewise",
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            {
              gt: 1,
              lt: 3,
              color: "rgba(0, 180, 0, 0.5)"
            },
            {
              gt: 5,
              lt: 7,
              color: "rgba(0, 180, 0, 0.5)"
            }
          ]
        },
        series: [
          {
            type: "line",
            smooth: 0.6,
            symbol: "none",
            lineStyle: {
              color: "green",
              width: 5
            },
            markLine: {
              symbol: ["none", "none"],
              label: { show: false },
              data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
            },
            areaStyle: {},
            data: [
              ["2019-10-10", 200],
              ["2019-10-11", 400],
              ["2019-10-12", 650],
              ["2019-10-13", 500],
              ["2019-10-14", 250],
              ["2019-10-15", 300],
              ["2019-10-16", 450],
              ["2019-10-17", 300],
              ["2019-10-18", 100]
            ]
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.order-wrap {
  background: #f7f7f7;
  height: 100%;
  padding-top: 30px;
}
.payment-instructions {
  width: 100%;
  height: auto;
  background-color: #ffffcc;
  color: #e6a23c;
  font-size: 15px;
  margin: 20px 0;
  padding: 20px;
  h3 {
    font-size: 20px;
    font-weight: 800;
  }
  ul {
    li {
      width: 100%;
      margin: 20px 10px;
    }
  }
}
.infoDom {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  li {
    width: 24%;
    height: auto;
    // padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    span {
      margin: 10px 20px;
    }
  }
  li:nth-child(1) {
    background-color: #67c23a;
    color: #fff;
  }
  li:nth-child(2) {
    background-color: #e6a23c;
    color: #fff;
  }
  li:nth-child(3) {
    background-color: #f56c6c;
    color: #fff;
  }
  li:nth-child(4) {
    background-color: #32374a;
    color: #fff;
  }
}
.chartsDom {
  width: 100%;
  height: auto;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    width: 24.5%;
    height: auto;
    background-color: #32374a;
    h4 {
      width: 100%;
      height: auto;
      padding: 20px;
      color: #fff;
    }
    div {
      width: 100%;
      height: 200px;
    }
  }
  li:nth-child(2) {
    margin-right: 2%;
  }
}
.showBuyDom {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .formDom {
    width: 710px;
    .topInfo {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding: 20px 0;
      .titleInfo {
        font-size: 20px;
        color: #f56c6c;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        span {
          font-weight: 800;
          color: #343434;
        }
      }
      .timeInfo {
        display: flex;
        align-items: center;
        justify-content: center;
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff3300;
          span {
            width: 40px;
            height: 30px;
            font-size: 20px;
            margin: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f56c6c;
          }
        }
      }
    }
    .formCon {
      width: 100%;
      height: auto;
      border-top: 1px solid #999;
      padding: 20px 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      label {
        font-size: 15px;
        color: #343434;
      }
      .el-input {
        width: 250px;
        margin: 10px 50px;
      }
      .button {
        width: 100%;
        height: auto;
        padding-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        .el-button {
          width: 200px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .orderInfo {
    width: 300px;
    height: auto;
    padding: 20px;
    border: 1px solid #ddd;
    font-size: 12px;
    color: #343434;
    .itemInfo {
      width: 100%;
      height: auto;
      border-bottom: 1px solid #ddd;
      text-align: left;
      margin: 25px 0;
      label {
        color: #999;
      }
      span {
        color: #3c63e3;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0;
      }
    }
    .program {
      margin-top: 20px;
      padding: 20px;
      width: 100%;
      height: auto;
      border-radius: 10px;
      background-color: #ddd;
      text-align: left;
      label {
        font-size: 15px;
        font-weight: 700;
        margin: 10px 0;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0;
        span {
          color: #3c63e3;
        }
      }
    }
  }
}

.order-summary {
  width: 1200px;
  margin: 0 auto 30px;
  padding: 50px;
  background: #fff;
  box-shadow: 0 2px 6px 0 rgba(4, 4, 4, 0.1);
  border-radius: 2px;
  .o-head {
    margin: 10px 0 0;
    border-bottom: 1px solid #d8d8d8;
    .o-head-title {
      font-family: Rubik-Medium;
      font-size: 20px;
      color: #1c1f28;
      padding-bottom: 10px;
      border-bottom: 3px solid #5c82ff;
      display: inline-block;
    }
  }
  .form-box {
    padding: 20px 0 0;
    .form-item-wrap {
      background: #f7f7f7;
      padding: 34px 50px 0;
      border-bottom: 1px dotted #999;
    }
  }
  .change-tip {
    margin-left: 14px !important;
    margin-top: 10px;
  }
  .form-label-txt {
    font-size: 20px;
    color: #32374a;
  }
}
.order-wrap .coupon-container {
  width: 170px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 2px;
  line-height: 1;
  .coupon-summary {
    padding: 16px 20px;
    font-size: 14px;
    color: #3c4156;
    .no-coupon {
      color: #999;
      .coupon-toggle {
        background-color: #ccc;
      }
    }
  }
  .coupon-toggle {
    padding: 1px;
    background-color: #fe8b0f;
    border-radius: 50%;
    margin-left: 20px;
    cursor: pointer;
    width: 18px;
    height: 18px;
    display: inline-block;
  }
}
.order-wrap .coupon-container .coupon-toggle i {
  color: #fff;
  font-size: 16px;
}
container .coupon-toggle i {
  color: #fff;
  font-size: 16px;
}
.pool-list > p {
  display: inline-block;
  min-width: 120px;
  padding: 9px 22px;
  font-size: 18px;
  color: #32374a;
  margin-right: 30px;
  border: 1px solid #999;
  border-radius: 4px;
  background: #fff;
  line-height: 1.2;
  text-align: center;
  cursor: pointer;
}
.pool-list > p.selected {
  color: #32374a;
  border: none;
  box-shadow: 0 0 0 2px #5c82ff;
}
.order-summary .label-item.select-item .change-tip {
  margin-left: 0;
  margin-top: 10px;
}
.order-summary .label-item .receive-way-box {
  display: -webkit-box;
  display: flex;
}
.receive-way-box {
  display: -webkit-box;
  display: flex;
}
.receive-way-item.active {
  border: none;
  box-shadow: 0 0 0 2px #5c82ff;
  color: #2a2d3a;
}
.receive-way-item {
  position: relative;
  display: inline-block;
  padding: 0 22px;
  color: #666;
  border: 1px solid #999;
  cursor: pointer;
  margin-right: 30px;
  height: 40px;
  white-space: nowrap;
  border-radius: 3px;
  background: #fff;
}
.triangle {
  position: absolute;
  top: -30px;
  right: 0;
  padding: 2px 5px;
  line-height: 20px;
  background: #fe8b0f;
  border: 2px solid #fe8b0f;
  border-radius: 2px;
  font-size: 12px;
  color: #fff;
  text-align: center;
}
.triangle::before {
  position: absolute;
  content: "";
  top: 26px;
  left: 34px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #fe8b0f;
}
.matrix-tips {
  position: relative;
  margin: 21px 0 0 -2px;
  font-size: 14px;
  background: #fff4e2;
  color: #fe8b0f;
  line-height: 1.3;
  padding: 12px 10px 12px 46px;
  border: 1px solid rgba(255, 171, 9, 0.2);
}
.order-summary .label-item .matrix-box .matrix-tips {
  font-size: 14px;
  color: #fe8b0f;
  line-height: 1.3;
}
.address-list.no-addr {
  background: transparent;
  border: none;
  .add-addr {
    height: 60px;
    line-height: 60px;
    background: #fff;
    margin: 0;
  }
}
.address-list {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 0 20px 20px 0;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  max-height: 280px;
  overflow-y: auto;
  .add-addr {
    line-height: 70px;
    padding: 0 10px;
    text-align: center;
    width: auto;
  }
}
.address-list > p {
  display: inline-block;
  font-size: 14px;
  box-sizing: border-box;
  width: 250px;
  height: 70px;
  padding: 18px 10px;
  margin: 20px 0 0 20px;
  border: 1px solid #999;
  border-radius: 4px;
  line-height: 1.2;
  cursor: pointer;
  color: #1c1f28;
}
.order-summary .fee-info-box {
  padding-left: 50px;
  font-size: 20px;
  max-height: 160px;
  line-height: 80px;
  .fee-title {
    font-family: Rubik-Medium;
    font-size: 20px;
    color: #1c1f28;
    width: 344px !important;
  }
}
.mining-days-wrap {
  border: 1px dotted #999;
  border-right-color: rgb(153, 153, 153);
  border-right-style: dotted;
  border-right-width: 1px;
  border-left-color: rgb(153, 153, 153);
  border-left-style: dotted;
  border-left-width: 1px;
  border-left: 0;
  border-right: 0;
  padding: 40px 50px;
  background: #f7f7f7;
}
.day-container {
  .recommand-day {
    display: -webkit-box;
    display: flex;
    margin-bottom: 30px;
    .day {
      position: relative;
      width: 120px;
      height: 40px;
      line-height: 40px;
      background: #fff;
      border: 1px solid #999;
      border-radius: 3px;
      font-size: 18px;
      color: #32374a;
      text-align: center;
      margin-right: 30px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      cursor: pointer;
    }
    .day.active {
      border: none;
      box-shadow: 0 0 0 2px #5c82ff;
    }
  }
}
.order-summary .mining-days-wrap .maintenance-fee-tips {
  width: auto !important;
}
.common-tips .tips-ico {
  position: absolute;
  left: 20px;
  top: 0;
}
.common-tips {
  position: relative;
  width: 800px;
  margin: 20px 0 0 150px;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  background: #fff4e2;
  color: #fe8b0f;
  padding-left: 46px;
  border: 1px solid rgba(255, 171, 9, 0.2);
}
.custom-day {
  position: relative;
}
.custom-day input {
  -moz-appearance: textfield;
}
.custom-day input {
  width: 292px;
  border-radius: 0;
  font-size: 18px;
  border: none;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: medium;
  border-bottom: 1px solid #8d8d8d;
  box-shadow: 0 0 0 0;
  outline: none;
  text-align: center;
  background: #f7f7f7;
  padding-bottom: 10px;
}
.custom-day input:focus {
  border-bottom: 2px solid #5c82ff;
}
.autopay-electricity-bill {
  margin-top: 20px;
  margin-left: 150px;
  background: #fff;
  padding: 0 20px;
  .switch-item {
    height: 66px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    .auto-pay-title {
      margin: 0 6px 0 20px;
    }
  }
}
.rule-link {
  cursor: pointer;
  color: #3c63e3;
  text-decoration: underline;
}
.fee-info-box.maintance-fee {
  border-bottom: 1px dotted #999;
}
.fee-info-box {
  padding-left: 50px;
  font-size: 20px;
  max-height: 160px;
  line-height: 80px;
  .fee-title {
    font-family: Rubik-Medium;
    font-size: 20px;
    color: #1c1f28;
    width: 344px !important;
  }
  .mining-days-tips {
    left: -92px !important;
  }
}
.cal-line {
  color: #999;
}
.price-detail {
  font-size: 16px;
}
.electric-coupon-wrap {
  padding-left: 50px;
  border-bottom: 1px dotted #999;
}
.coupon-section {
  display: -webkit-box;
  display: flex;
  height: 56px;
  -webkit-box-align: center;
  align-items: center;
}
.coupon-section .nouse-txt {
  color: #999;
}
.coupon-section .no-coupon-btn {
  cursor: not-allowed;
  color: #999;
}
.coupon-section .no-coupon-btn .coupon-toggle {
  cursor: not-allowed;
  background-color: #ccc;
}
.coupon-section .coupon-toggle {
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #fe8b0f;
  margin-left: 20px;
  cursor: pointer;
  display: inline-block;
  color: #fff;
}
.money {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.money-section {
  font-size: 24px;
  margin: 25px 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .total-section {
    display: inline-block;
    font-size: 20px;
    text-align: right;
    width: auto;
  }
  .num-and-tip {
    max-width: 706px;
    .num {
      padding: 0 10px 4px;
    }
  }
}
.confirm-box {
  width: 700px;
  text-align: center;
  margin: 25px auto 30px;
  .confirm-btn {
    width: 310px;
    height: 60px;
    margin: 0 0 25px;
  }
}
a {
  text-decoration: none;
  color: #5c82ff;
}
.confirm-txt {
  margin-top: 10px;
  font-size: 14px;
}
.order-summary .support-payment {
  margin-bottom: 20px;
}
.support-payment {
  padding: 0 30px;
  background: #f7f7f7;
  border: 1px solid #eee;
  display: -webkit-box;
  display: flex;
}
.rubik-medium {
  font-weight: 700 !important;
}
.support-payment > div.icons {
  padding: 15px 0;
}
.support-payment > div.support-tex {
  font-size: 16px;
  color: #1c1f28;
  min-width: 170px;
  padding-top: 35px;
}
.support-payment > div.icons > p {
  display: -webkit-inline-box;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 10px 50px 10px 0;
}
.support-payment > div.icons > p i.font_family {
  font-size: 34px;
  vertical-align: middle;
  margin-right: 5px;
}
.payment-notice {
  background: #f7f7f7;
  border: 1px solid #eee;
  padding: 30px;
}
.payment-notice .sub-amount {
  color: #999;
}
.payment-notice .notice-item {
  margin-top: 15px;
}
.payment-notice .notice-item h4 {
  font-size: 16px;
  font-weight: 400;
  color: #1c1f28;
  margin-bottom: 4px;
}
.payment-notice .notice-item .tips-text {
  font-size: 16px;
  color: #666;
  line-height: 19px;
}
</style>
<style>
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #606266;
}
</style>
