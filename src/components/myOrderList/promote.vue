<template>
  <div class="abilityPage">
    <img class="banner" src="@/assets/img/ffed004.jpg" alt>
    <ul class="lvList">
      <li class="active">
        <div class="title">
          <span>-</span>
          等级 2
          <span>-</span>
        </div>
        <img src="@/assets/img/ffed004.jpg" alt>
        <div class="listText">
          白银
          <span style="margin-left: 0px;">
            <i class="el-tooltip el-icon-info"></i>
          </span>
        </div>
        <span class="line"></span>
        <span class="scaleNum">1.5%返佣</span>
      </li>
      <li v-for="(item, index) in 4" :key="index">
        <div class="title">
          <span>-</span>
          等级 2
          <span>-</span>
        </div>
        <img src="@/assets/img/ffed004.jpg" alt>
        <div class="listText">
          白银
          <span style="margin-left: 0px;">
            <i class="el-tooltip el-icon-info"></i>
          </span>
        </div>
        <span class="line"></span>
        <span class="scaleNum">1.5%返佣</span>
      </li>
    </ul>
    <div class="invitation-dashboard">
      <div class="main-info">
        <div class="info-title">
          <div class="info-title__item">
            <span class="total-title">累计返佣金额</span>
            <span class="measure-word rubik-medium">0</span>
            <span class="unit">BTC</span>
          </div>
          <div class="info-title__item">
            <span>累计邀请人数</span>
            <span class="measure-word rubik-medium">0</span>
          </div>
          <div class="info-title__item info-title__item--current">
            <span>当前等级</span>
            <span class="measure-word rubik-medium">青铜</span>
            <span style="margin-left: 4px;">
              <i
                class="el-tooltip el-icon-info"
                aria-describedby="el-tooltip-5010"
                tabindex="0"
                style="font-size: 14px; color: rgb(204, 204, 204); opacity: 1;"
              ></i>
            </span>
          </div>
        </div>
        <div class="my-link">
          <label>我的邀请链接</label>
          <span class="hit-value">
            <div class="invite-url rubik-medium el-input">
              <input
                type="text"
                value="https://www.bitdeer.com/i/MTM3LDEyOCwxMzcsMTI4LDEzMiwxMjksMTM3"
              >
            </div>
          </span>
          <button
            type="button"
            class="el-button el-button--primary"
            id="copyInviteUrl"
            ga="refferal_copy"
          >
            <span>复制</span>
          </button>
        </div>
        <div class="intro">
          <h3 class="rubik-medium">详细规则：</h3>
          <p>被邀请者使用邀请者链接成功注册并下单，订单成功生效后，邀请者可获得被邀请者首单算力费金额的百分比返佣，比例由邀请者的等级决定，每次返佣金额最高为$200</p>
        </div>
      </div>
      <div class="withdraw-info">
        <div class="withdraw-num">
          <div class="invite-text hit-value">
            <label>可提佣金</label>
            <span class="invite-value">0.00000000</span>
            BTC
          </div>
          <div class="inv-tips withdraw-btn">
            <button
              disabled="disabled"
              type="button"
              class="el-button el-button--primary el-button--small is-disabled is-plain"
            >
              <span>申请提取</span>
            </button>
            <span style="margin-left: 4px;">
              <i
                class="el-tooltip el-icon-info"
                aria-describedby="el-tooltip-8431"
                tabindex="0"
                style="font-size: 14px; color: rgb(204, 204, 204); opacity: 1;"
              ></i>
            </span>
          </div>
        </div>
        <ul class="address-box">
          <li class="row">
            <label class="address-label">提币地址</label>
            <button type="button" class="el-button el-button--primary el-button--small is-plain">
              <i class="el-icon-plus"></i>
              <span>添加</span>
            </button>
          </li>
        </ul>
      </div>
      <div class="listModel">
        <ul class="titleModel">
          <li class="active">
            返佣记录
            <i class="el-tooltip el-icon-info"></i>
          </li>
          <li>
            借款记录
            <i class="el-tooltip el-icon-info"></i>
          </li>
        </ul>
        <el-table :data="tableData3" height="550" border style="width: 100%">
          <el-table-column prop="date" label="下单日期" width="180"></el-table-column>
          <el-table-column prop="name" label="订单ID" width="180"></el-table-column>
          <el-table-column prop="address" label="商品名称"></el-table-column>
          <el-table-column prop="address" label="订单总金额"></el-table-column>
          <el-table-column prop="address" label="全部"></el-table-column>
        </el-table>
        <div class="notList">
          <i class="el-icon-info"></i>
          <span>暂无数据...</span>
        </div>
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.abilityPage {
  width: 1250px;
  height: auto;
  padding: 10px;
  background-color: #f5f6fa;
  .banner {
    width: 100%;
    height: 240px;
  }
  .lvList {
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .active {
      width: 230px;
      height: 345px;
      padding-bottom: 40px;
      background-color: rgb(103, 130, 219);
      img {
        width: 184px;
        height: 158px;
        margin-bottom: 16.5px;
      }
    }
    li {
      width: 200px;
      height: 300px;
      border-radius: 5px;
      padding-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      background-color: #666;
      box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
      color: #fff;
      font-size: 14px;
      .title {
        margin-top: 10px;
      }
      img {
        width: 158px;
        height: 135px;
        margin: 12px 0;
      }
      .name {
        width: 100%;
        font-size: 16px;
        color: #fff;
        letter-spacing: 0;
        text-align: center;
        margin-bottom: 15px;
        i {
          font-size: 14px;
          color: #fff;
        }
      }
      .line {
        width: 160px;
        height: 1px;
        background: linear-gradient(
          90deg,
          hsla(0, 0%, 100%, 0),
          #fff,
          hsla(0, 0%, 100%, 0)
        );
        display: block;
      }
    }
  }
  .invitation-dashboard {
    padding-bottom: 20px;
    .main-info {
      background: #fafafa;
      box-shadow: 0 2px 6px 0 rgba(4, 4, 4, 0.1);
      border-radius: 2px;
      .info-title {
        height: 110px;
        line-height: 50px;
        padding: 30px 0;
        background: #fff;
        display: flex;
        align-items: center;
        .info-title__item {
          padding: 0 30px;
          padding-left: 40px;
          margin-right: 15px;
          border-right: 1px solid #ddd;

          .total-title {
            margin-right: 10px;
          }
          .measure-word {
            font-size: 30px;
          }
          .rubik-medium {
            font-weight: 700 !important;
          }
          .unit {
            font-size: 14px;
          }
        }
      }
    }
  }
  .my-link {
    width: 100%;
    height: auto;
    padding: 30px 0;
    margin: 0 20px;
    border-bottom: 1px solid #ddd;
    color: #999;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    input {
      background: #fafafa;
      border: 1px solid #ebebeb;
      font-size: 16px;
      color: #1c1f28;
      height: 40px;
      line-height: 40px;
      margin: 0 50px;
      padding: 0 20px;
      width: 450px;
      font-family: Rubik-Medium;
    }
  }
  .intro {
    width: 100%;
    height: auto;
    padding: 30px;
    h3 {
      font-size: 14px;
      font-weight: 700;
      color: #333;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      color: #999;
    }
  }
  .withdraw-info {
    width: 100%;
    height: auto;
    padding: 30px;
    margin-top: 20px;
    background-color: #fff;
    box-shadow: 0 2px 6px 0 rgba(4, 4, 4, 0.1);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .withdraw-num,
    .address-box {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .withdraw-num {
      border-right: 1px solid #ddd;
    }
    .invite-value {
      font-weight: 700;
      font-size: 30px;
      color: #1c1f28;
      margin: 0 10px 0 20px;
    }
    .inv-tips {
      margin: 0 50px 0 22px;
      button {
        padding: 8px 15px;
        border-color: #ccc;
        color: #fff;
        background-color: #ccc;
      }
      i {
        margin-left: 4px;
        color: #fff;
      }
    }
    .address-box {
      .row {
        padding-left: 50px;
      }
      .address-label {
        margin-right: 20px;
        font-size: 16px;
        color: #666;
      }
    }
  }
  .listModel {
    width: 100%;
    height: auto;
    margin-top: 20px;
    background-color: #fff;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
    .titleModel {
      width: 100%;
      height: auto;
      padding: 20px 20px 0;
      font-size: 20px;
      color: #1c1f28;
      border-bottom: 1px solid #d8d8d8;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .active {
        border-bottom: 3px solid #5c82ff;
      }
      li {
        margin-right: 48px;
        padding-bottom: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-bottom: 3px solid #fff;
        i {
          margin-left: 10px;
          color: #999;
        }
      }
    }
    .notList {
      width: 100%;
      height: auto;
      padding: 80px 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      color: #ddd;
      i {
        font-size: 80px;
        margin-bottom: 20px;
      }
    }
    .el-pagination {
      text-align: center;
      background-color: #fff;
      padding: 30px 0;
    }
  }
}
</style>
