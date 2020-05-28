<template>
  <div class="abilityPage">
    <div class="returnPage" @click="returnPage">
      <i class="el-icon-info"></i>
      <span>我的算力</span>
    </div>
    <div class="listCon">
      <div class="titleCon">
        <div class="title">每日产出</div>
        <div class="time">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
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
      </div>
    </div>
  </div>
</template>

<script>
import { getUserHashRate } from "@/api/myOrderList";
export default {
  data() {
    return {
      value1: "",
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
    this.getUserHashRate();
  },
  methods: {
    // 返回上一页
    returnPage() {
      this.$router.go(-1);
    },
    // 加载算力信息
    getUserHashRate() {
      getUserHashRate({ user_uuid: "b1889ad2d1db416dada6f1a621258a8b" }).then(
        res => {
          console.log("*******************123123123**************", res);
          if (res.data.code == 200) {
            this.pageDataNode = res.data.data;
          }
        }
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.abilityPage {
  width: 1250px;
  height: auto;
  padding: 10px;
  .returnPage {
    width: 120px;
    height: auto;
    padding: 10px 0;
    color: #999;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      margin-right: 10px;
    }
  }
  .listCon {
    width: 100%;
    height: auto;
    background-color: #fff;
    .titleCon {
      width: 100%;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        color: #333;
        padding: 13px 0;
        border-bottom: 3px solid #5c82ff;
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
    .el-table {
      margin-top: 20px;
    }
  }
  .notList {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 50px 0;
    i {
      font-size: 160px;
      color: #ddd;
    }
    span {
      font-size: 14px;
      color: #999;
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
