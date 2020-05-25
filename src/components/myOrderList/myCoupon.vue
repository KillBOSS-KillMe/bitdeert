<template>
  <div class="abilityPage">
    <ul class="couponList">
      <li>
        <h4>新人礼包套餐</h4>
        <div class="coupon">
          <img src="@/assets/img/ffed004.jpg" alt="">
          <div class="info">
            <div>绑定邮箱即可获得新人礼</div>
            <span>去绑定</span>
           
          </div>
        </div>
      </li>
    </ul>
    <div class="head">
      <div class="headTitle active">可用卡券<span>(0)</span></div>
      <div class="headTitle">已用&失效<span>(0)</span></div>
    </div>
    <div class="listCon">
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
  border: 1px solid #333;
  .couponList {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    li {
      width: 310px;
      height: auto;
      h4 {
        font-size: 12px;
        color: #999;
        margin-bottom: 10px;
      }
      .coupon {
        position: relative;
        width: 100%;
        height: 160px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .info {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
          color: #fff;
          padding: 20px;
          div {
            padding: 30px 0;
            font-size: 20px;
          }
          span {
            // width: auto;
            // height: auto;
            border-radius: 40px;
            padding: 5px 10px;
            background-color: #fafafa;
            color: #fe8b0f;
          }
        }
      }
    }
  }
  .head {
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #fafafa;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    .headTitle:hover {
      height: 58px;
      border-bottom: 3px solid #5c82ff;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    }
    .headTitle {
      width: auto;
      height: 60px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      span {
        color: #5c82ff;
        font-weight: 500;
      }
    }
    .active {
      height: 58px !important;
      border-bottom: 3px solid #5c82ff;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    }
  }
  .listCon {
    width: 100%;
    height: auto;
    background-color: #fafafa;
  }
  .el-pagination {
    text-align: center;
    background-color: #fff;
    padding: 30px 0;
  }
  .notList {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 50px;
    background-color: #fff;
    i {
      font-size: 160px;
      color: #ddd;
    }
    span {
      font-size: 14px;
      color: #999;
    }
    div {
      color: #5c82ff;
      border: 1px solid #5c82ff;
      font-size: 14px;
      border-radius: 4px;
      padding: 10px;
      margin: 15px 0;
    }
  }
}
.tac {
  overflow: hidden;
  width: 10%;
  .el-col {
    width: 100%;
  }
  .el-menu-item {
    width: 100%;
  }
}
</style>
