<template>
  <div class="myOrderListPage">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1" @click="goPage(1, 'ability')">
            <i class="el-icon-menu"></i>
            <span slot="title">我的算力</span>
          </el-menu-item>
          <el-menu-item index="2" @click="goPage(1, 'orderList')">
            <i class="el-icon-menu"></i>
            <span slot="title">我的订单</span>
          </el-menu-item>
          <el-menu-item index="3" @click="goPage(1, 'myCoupon')">
            <i class="el-icon-menu"></i>
            <span slot="title">我的礼券</span>
          </el-menu-item>
          <el-menu-item index="4" @click="goPage(1, 'promote')">
            <i class="el-icon-menu"></i>
            <span slot="title">推广</span>
          </el-menu-item>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1" @click="goPage(1, 'incomeAddress')">收益地址</el-menu-item>
              <el-menu-item index="5-2" @click="goPage(1, 'reminderSettings')">提醒设置</el-menu-item>
              <el-menu-item index="5-3" @click="goPage(1, 'ability')">账号设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
import { getSaleCoin } from "@/api/nav.js";
export default {
  data() {
    return {};
  },
  watch: {
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goPage(index, path) {
      this.indexnav = index;
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.myOrderListPage {
  width: 1400px;
  min-height: 100vh;
  height: auto;
  margin:  auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #f5f6fa;
}
.tac {
  
  overflow: hidden;
  height: 100vh;
  width: 150px;
  background-color: #e7e9f1;
  .el-col {
    width: 100%;
  }
  .el-menu-item {
    width: 100%;
  }
}
</style>
