<template>
  <div class="abilityPage">
    <div class="head">
      <div class="headTitle active">算力套餐订单</div>
      <div class="headTitle">电费订单</div>
      <div class="headTitle">合并支付电费单</div>
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
import { getUserOrder } from "@/api/myOrderList";
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
  mounted() {
    // 加载算力信息
    this.getUserOrder();
  },
  methods: {
    // 加载算力信息
    getUserOrder() {
      getUserOrder({ user_uuid: 'b1889ad2d1db416dada6f1a621258a8b'}).then(res => {
        console.log("*******************123123123**************", res);
        if (res.data.code == 200) {
          this.pageDataNode = res.data.data
        }
      });
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
