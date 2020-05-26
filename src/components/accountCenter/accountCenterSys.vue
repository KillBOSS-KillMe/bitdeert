<template>
  <div class="abilityPage">
    <ul class="sysList">
      <li>
        <label>登录密码</label>
        <span>已设定</span>
        <button @click="passwordModel = true">修改</button>
      </li>
      <li>
        <label>手机账号</label>
        <span>86-18700458359</span>
        <button @click="phoneModel = true">修改</button>
      </li>
      <li>
        <label>邮箱账号</label>
        <span>未设定</span>
        <button @click="mailboxModel = true">去绑定</button>
      </li>
    </ul>
    <ul class="sysList">
      <li>
        <label>谷歌身份验证器</label>
        <span>用于添加钱包地址时安全校验</span>
        <button @click="googleIdModel = true">去绑定</button>
      </li>
    </ul>
    <el-dialog
      title="登录密码"
      :visible.sync="passwordModel"
      width="20%"
      center
      :before-close="handleClose"
    >
      <div class="formModel">
        <el-input placeholder="请输入内容" v-model="input10" clearable></el-input>
        <el-input placeholder="请输入内容" v-model="input10" clearable></el-input>
        <el-button type="info" plain>确认</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="手机账号"
      :visible.sync="phoneModel"
      width="20%"
      center
      :before-close="handleClose"
    >
      <div class="formModel">
        <label>当前手机号</label>
        <el-input placeholder="当前手机号" v-model="input10" :disabled="true" clearable></el-input>
        <el-input placeholder="短信验证码" v-model="input4">
          <template slot="append">发送验证码</template>
        </el-input>
        <label>新的手机号</label>
        <el-input placeholder="请输入新的手机号" v-model="input5" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="+86" value="1"></el-option>
          </el-select>
        </el-input>
        <el-input placeholder="短信验证码" v-model="input4">
          <template slot="append">发送验证码</template>
        </el-input>
        <el-button type="info" plain>确认修改</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="邮箱账号"
      :visible.sync="mailboxModel"
      width="20%"
      center
      :before-close="handleClose"
    >
      <div class="formModel">
        <el-input placeholder="请输入邮箱" v-model="input10" clearable></el-input>
        <el-input placeholder="邮箱验证码" v-model="input4">
          <template slot="append">发送验证码</template>
        </el-input>
        <el-button type="info" plain>确认绑定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="绑定谷歌身份验证器"
      :visible.sync="googleIdModel"
      width="30%"
      center
      :before-close="handleClose"
    >
      <span>绑定谷歌身份验证器</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="googleIdModel = false">取 消</el-button>
        <el-button type="primary" @click="googleIdModel = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordModel: false,
      phoneModel: false,
      mailboxModel: false,
      googleIdModel: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(done) {
      done();
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => {});
    }
  }
};
</script>
<style lang="scss" scoped>
.abilityPage {
  width: 1250px;
  height: auto;
  padding: 10px;
  .sysList {
    width: 100%;
    height: auto;
    padding: 0 20px;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    li {
      width: 100%;
      height: auto;
      padding: 20px 0;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      label {
        width: 152px;
        font-size: 16px;
        color: #1c1f28;
      }
      span {
        width: 270px;
        font-size: 14px;
        color: #999;
        margin-right: 20px;
        overflow-x: hidden;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        color: #fff;
        background-color: #5c82ff;
        border-color: #5c82ff;
        border: 0;
      }
    }
  }
}
.formModel {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  label {
    font-size: 12px;
    color: #333;
    margin-bottom: 10px;
  }
  .el-input {
    margin-bottom: 20px;
  }
  .el-button {
    width: 100%;
  }
}
</style>
