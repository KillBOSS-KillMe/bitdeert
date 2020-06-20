<template>
  <div class="abilityPage">
    <ul class="sysList">
      <li>
        <label>身份认证</label>
        <div>
          <el-input v-model="input" placeholder="真实姓名"></el-input>
          <el-input v-model="input" placeholder="身份证号码"></el-input>
        </div>
        <button>修改</button>
      </li>
      <li>
        <label>绑定手机</label>
        <div>
          <el-input v-model="input" placeholder=""></el-input>
        </div>
        <button>修改</button>
      </li>
      <li>
        <label>绑定邮箱</label>
        <div>
          <el-input v-model="input" placeholder=""></el-input>
        </div>
        <button>修改</button>
      </li>
      <li>
        <label>修改密码</label>
        <div>
          <el-input v-model="input" placeholder="8-14位，建议英文，数字，下划线组合"></el-input>
        </div>
        <button>修改</button>
      </li>
    </ul>
    <div class="sub">
      <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    // margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    li {
      width: 100%;
      height: auto;
      padding: 10px 0;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: space-between;
      label {
        width: 152px;
        font-size: 16px;
        color: #1c1f28;
      }
      div {
        width: 900px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        .el-input {
          width: 400px;
          margin: 10px 0;
        }
      }
    }
  }
  .sub{
    width: 100%;
    height: auto;
    padding: 100px 0;
    background-color: #fff;
    display: flex;
      align-items: center;
      justify-content: center;
  }
  button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        cursor: pointer;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        color: #fff;
        background-color: #5c82ff;
        border-color: #5c82ff;
        border: 0;
      }
}
</style>
