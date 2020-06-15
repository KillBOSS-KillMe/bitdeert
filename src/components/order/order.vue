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
            <el-form-item label="机型">
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
            </el-form-item>
            <el-form-item label="收款方式">
              <div class="receive-way-box">
                <div class="receive-way-item active">打款至我的个人钱包</div>
                <div class="matrix-box">
                  <div class="receive-way-item">
                    打款至我的Matrixport钱包
                    <div class="triangle">续电费更方便</div>
                  </div>
                  <div class="maintenance-fee-tips matrix-tips" style="display: none;">
                    <i class="font_family icon-explain tips-ico"></i>
                    <span>为保证您的资金安全，提币时需进行KYC认证。</span>
                  </div>
                </div>
              </div>
            </el-form-item>
            <el-form-item label="BTC收币地址">
              <section class="address-list no-addr">
                <p class="add-addr">
                  <span>+ 添加新的BTC地址</span>
                </p>
              </section>
            </el-form-item>
          </div>
          <el-row class="fee-info-box contract-fee">
            <el-col class="fee-title" :span="10">算力费</el-col>
            <el-col :span="14">
              $ 909
              <!---->
            </el-col>
          </el-row>
          <div class="mining-days-wrap">
            <el-form-item label="电费缴纳天数">
              <div class="day-container">
                <div class="recommand-day">
                  <div class="day">10</div>
                  <div class="day">20</div>
                  <div class="day">40</div>
                  <div class="day active">60</div>
                </div>
                <div class="custom-day">
                  <input min="10" max="588" placeholder="输入天数（≥10）" type="number" value />
                </div>
              </div>
            </el-form-item>
            <div class="maintenance-fee-tips common-tips">
              <i class="icon-explain tips-ico"></i>
              套餐中未交纳的电费剩余天数可以后续支付
            </div>
            <div class="autopay-electricity-bill">
              <div class="switch-item">
                <el-switch v-model="Oform.renewal" active-color="#13ce66" />
                <span class="auto-pay-title">后续电费从Matrixport钱包中自动扣除</span>
                <span class="rule-wrap">
                  <span class="rule-link">规则说明</span>
                </span>
              </div>
              <!---->
            </div>
          </div>
          <el-row class="fee-info-box maintance-fee">
            <el-col :span="10">
              电费
              <span style="margin-left: 12px;" class="mining-days-tips">
                <i
                  class="el-tooltip el-icon-info"
                  style="font-size:14px;color:#ccc;opacity:1;"
                  aria-describedby="el-tooltip-6103"
                  tabindex="0"
                ></i>
              </span>
            </el-col>
            <el-col :span="14">
              $0.00
              <span class="cal-line">
                <span class="price-detail">= $0.0406/T/天 × 50T × 0天</span>
              </span>
            </el-col>
          </el-row>
          <div class="electric-coupon-wrap">
            <div>
              <div class="coupon-section">
                <div class="coupon-title">
                  <span class="nouse-txt">当前无优惠券可用</span>
                </div>
                <div class="coupon-btn no-coupon-btn">
                  <span class="coupon-toggle">选择</span>
                </div>
              </div>
            </div>
          </div>
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
          <div class="confirm-box">
            <el-button type="primary" class="confirm-btn" disabled="disabled">
              <span>确定</span>
            </el-button>
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
                          />
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
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.order-wrap {
  background: #f7f7f7;
  height: 100%;
  padding-top: 30px;
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
.money-section {
  font-size: 24px;
  margin: 25px 0 0 50px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: baseline;
  align-items: baseline;
  .total-section {
    display: inline-block;
    font-size: 20px;
    text-align: right;
    width: 344px;
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
