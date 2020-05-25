<template>
  <div class="abilityPage">
    <div class="head">
      <div class="headTitle active">BTC</div>
      <div class="headTitle">BCH</div>
      <div class="headTitle">LTC</div>
      <div class="headTitle">ETH</div>
      <div class="headTitle">DCR</div>
      <div class="headTitle">ZEC</div>
      <div class="headTitle">DASH</div>
      <div class="headTitle">ETC</div>
      <div class="headTitle">CKB</div>
    </div>
    <div class="listCon">
      <div class="listShow">
        CKB 币种已支持的矿池：AntPool
      </div>
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
      <div class="newAddress">
        <div>+ 添加新的CKB地址</div>
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
  border: 1px solid #333;
  .head {
    width: 100%;
    height: 60px;
    // margin-bottom: 10px;
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
    }
    .active {
      height: 58px !important;
      border-bottom: 3px solid #5c82ff;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    }
  }
  .listShow {
    padding: 20px 30px;
    background-color: #fff;
    font-size: 12px;
    color: #333;
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
  .newAddress {
    width: 100%;
    height: auto;
    padding: 40px 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    div:hover {
      background-color: #5c82ff;
      color: #fff;
    }
    div {
      width: 165px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border:1px solid #5c82ff;
      border-radius: 5px;
      color: #5c82ff;
      font-size: 14px;
    }
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
