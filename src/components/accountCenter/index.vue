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
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">账号管理</span>
          </el-menu-item>
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
