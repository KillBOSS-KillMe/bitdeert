<template>
  <div class="abilityPage">
    <ul class="entranceList">
      <li @click="sysTopUp">充值</li>
      <li @click="reflect">提现</li>
      <li @click="newAddress">添加BTC地址</li>
    </ul>

    <el-dialog title="充值" :visible.sync="sysTopUpShow" width="20%" :before-close="handleClose" center="true">
      <div class="boxDom">
        <el-input v-model="input" placeholder="银行"></el-input>
        <el-input v-model="input" placeholder="账号"></el-input>
        <el-input v-model="input" placeholder="姓名"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="sysTopUpShow = false">取 消</el-button>
        <el-button type="primary" @click="sysTopUpShow = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="提现" :visible.sync="reflectDom" width="20%" :before-close="handleClose" center="true">
      <div class="boxDom">
        <el-input v-model="input" placeholder="银行"></el-input>
        <el-input v-model="input" placeholder="账号"></el-input>
        <el-input v-model="input" placeholder="姓名"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="reflectDom = false">取 消</el-button>
        <el-button type="primary" @click="reflectDom = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="添加BTC地址" :visible.sync="newAddressDom" width="20%" :before-close="handleClose" center="true">
      <div class="boxDom">
        <el-input v-model="input" placeholder="请输入BTC地址"></el-input>
        <el-input v-model="input" placeholder="请输入该地址的备注，可不填"></el-input>
        <span>注：为了您的资金安全，后续添加地址时需要进行双身份验证，双身份验证是指需要校验邮箱、手机号、等身份中的两种。</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="newAddressDom = false">取 消</el-button>
        <el-button type="primary" @click="newAddressDom = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sysTopUpShow: false,
      reflectDom: false,
      newAddressDom: false
    };
  },
  methods: {
    sysTopUp() {
      this.sysTopUpShow = !this.sysTopUpShow
    },
    reflect() {
      this.reflectDom = !this.reflectDom
    },
    newAddress() {
      this.newAddressDom = !this.newAddressDom
    }
  }
};
</script>
<style lang="scss" scoped>
.abilityPage {
  width: 100%;
  height: auto;
}
.entranceList {
  width: 100%;
  height: auto;
  background-color: #fff;
  padding: 200px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  li {
    width: 250px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 30px;
    background-color: #32374a;
    border-radius: 20px;
  }
}
.boxDom {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  .el-input {
    margin: 10px 0;
  }
  span {
    color: #343434;
    font-size: 12px;
  }
}
</style>
