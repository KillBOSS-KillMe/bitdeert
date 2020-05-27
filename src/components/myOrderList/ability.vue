<template>
  <div class="abilityPage">
    <div class="head">
      <div class="headTitle">
        <i class="el-icon-info"></i>
        <div class="info">
          <h4>BTC</h4>
          <span>0个套餐正在挖矿</span>
        </div>
      </div>
    </div>
    <div class="dataInfo">
      <div class="allCalculation">
        <i class="modelIcon el-icon-info"></i>
        <div class="info">
          <span class="title">总算力</span>
          <div class="data">
            <div>
              0000
              <span>TH/s</span>
            </div>
          </div>
          <div class="botton">矿池分配</div>
        </div>
      </div>
      <div class="allOutput">
        <i class="modelIcon el-icon-info"></i>
        <div class="info">
          <span class="title">
            总算力
            <i class="el-icon-info"></i>
          </span>
          <div class="data">
            <div>
              0000
              <span>TH/s</span>
            </div>
            <span class="more">更多产出数据></span>
          </div>
          <div class="price">≈ $0.00</div>
        </div>
      </div>
    </div>
    <div class="listCon">
      <div class="titleCon">
        <div class="title">
          <i class="el-icon-info"></i>
          算力列表
        </div>
        <ul class="titlelist">
          <li>全部</li>
          <li>待生效</li>
          <li>生效中</li>
          <li>已结束</li>
        </ul>
      </div>
      <el-table :data="tableData3" height="550" border style="width: 100%">
        <el-table-column prop="date" label="相应订单号" width="180"></el-table-column>
        <el-table-column prop="name" label="算力信息" width="180"></el-table-column>
        <el-table-column prop="address" label="当前矿池"></el-table-column>
        <el-table-column prop="address" label="剩余电费天数(天)"></el-table-column>
        <el-table-column prop="address" label="累计产出"></el-table-column>
        <el-table-column prop="address" label="状态"></el-table-column>
        <el-table-column prop="address" label="操作"></el-table-column>
      </el-table>
      <div class="notList">
        <i class="el-icon-info"></i>
        <span>暂无数据...</span>
        <div>购买框架共享套餐</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserHashRate } from "@/api/myOrderList";
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
    // 显示默认组件列表
    this.getUserHashRate();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getUserHashRate() {
      getUserHashRate({ user_uuid: 'b1889ad2d1db416dada6f1a621258a8b'}).then(res => {
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
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    }
    .headTitle {
      width: 200px;
      height: 58px;
      padding: 0 20px;
      border-bottom: 3px solid #5c82ff;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      i {
        font-size: 30px;
        color: rgb(255, 157, 50);
      }
      .info {
        margin-left: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        h4 {
          font-size: 20px;
          font-weight: 700;
          color: #333;
        }
        span {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  .dataInfo {
    width: 100%;
    height: 190px;
    margin-bottom: 20px;
    background-color: #fafafa;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    .allCalculation,
    .allOutput {
      height: 190px;
      padding: 30px 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .modelIcon {
        width: 60px;
        height: 60px;
        border-radius: 60px;
        margin: 0 30px;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 152, 0, 0.1);
        color: #ff9800;
      }
      .info {
        // width: 370px;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        .title {
          font-size: 14px;
          color: #999;
          // margin-top: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            font-size: 14px;
            color: #999;
            margin-left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .data {
          width: 100%;
          font-size: 50px;
          // font-weight: 600;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            font-size: 25px;
          }
          .more {
            font-size: 14px;
            color: #5c82ff;
          }
        }
        .price {
          color: #999;
          font-size: 14px;
        }
      }
    }
    .allCalculation {
      width: 430px;
      .botton {
        width: 80px;
        height: 34px;
        color: #5c82ff;
        border: 1px solid #5c82ff;
        text-align: center;
        border-radius: 4px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .allOutput {
      width: 820px;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
      .info {
        width: 633px;
      }
      .data {
        border-bottom: 1px solid #ddd;
      }
    }
  }
  .listCon {
    width: 100%;
    height: auto;
    background-color: #fafafa;
    .titleCon {
      width: 100%;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: #333;
        i {
          font-size: 20px;
          color: #999;
          margin-right: 10px;
        }
      }
      .titlelist {
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
          font-size: 14px;
          color: #999;
          padding: 0 10px;
        }
        .active {
          color: #333;
        }
      }
    }
  }
  .notList {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 50px;
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
