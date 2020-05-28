<template>
  <div class="abilityPage">
    <div class="form">
      <div class="set">
        <div class="title">提醒类型</div>
        <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model="value2"></el-switch>
      </div>
      <div class="set">
        <div class="title">套餐到期前7天提醒我</div>
        <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model="value2"></el-switch>
      </div>
      <div class="set">
        <div class="title">套餐到期前1天提醒我</div>
        <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model="value2"></el-switch>
      </div>
      <div class="set">
        <div class="title">订单失效后提醒我</div>
        <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model="value2"></el-switch>
      </div>
      <div class="sub">
        <div>保存</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value2: true
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
  background-color: #fff;
  .form {
    width: 700px;
    height: auto;
    padding: 20px;
    .set {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 0;
      color: #333;
      border-bottom: 1px dashed #999;
    }
    .sub {
      width: 100%;
      height: auto;
      padding: 30px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        width: 115px;
        height: 38px;
        cursor: pointer;
        border-radius: 5px;
        color: #fff;
        background-color: #5c82ff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
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
