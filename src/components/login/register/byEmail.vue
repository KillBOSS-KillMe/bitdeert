<template>
  <div>
    <div class="container">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="0"
        class="demo-ruleForm"
      >
        <el-form-item prop="email">
          <el-input
            v-model="ruleForm.email"
            placeholder="请输入邮箱"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-col style="user-select: none">
            <drag-verify
              ref="dragVerify"
              :width="340"
              :isPassing.sync="isPassing6"
              text="请按住滑块拖动"
              successText="验证通过"
              handlerIcon="el-icon-d-arrow-right"
              successIcon="el-icon-circle-check"
              @passcallback="passcallback2"
            >
              <i
                v-show="!isPassing6"
                slot="textBefore"
                class="el-icon-lock"
              ></i>
            </drag-verify>
          </el-col>
        </el-form-item>
        <el-form-item prop="code">
          <el-row class="verificationbox">
            <el-col :span="24">
              <el-input
                v-model.number="ruleForm.code"
                placeholder="邮箱验证码"
              ></el-input>
            </el-col>
            <el-col :span="10" class="verification">
              <el-button
                v-show="sendAuthCode"
                type="primary"
                :disabled="disabledB"
                size="mini"
                @click="hanldeGetCode"
              >获取验证码</el-button>
              <el-button
                v-show="!sendAuthCode"
                type="primary"
                disabled
                size="mini"
                @click="hanldeGetCode"
              >{{ auth_time }}后重新获取</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            style="width:100%"
            @click="submitForm('ruleForm')"
            >立即注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import dragVerify from "@/components/drag/dragVerify";
import { registerdata, getCode } from "@/api/login";
export default {
  components: { dragVerify },
  data() {
    var ageNo = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("验证码不能为空"));
      } else {
        callback();
      }
    };
    var emailNo = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入邮箱"));
      } else {
        var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!regEmail.test(value)) {
          callback(new Error("邮箱格式不正确"));
        } else {
          callback();
        }
      }
    };
    var passNo = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        type: 1,
        email: "",
        pass: "",
        checkPass: "",
        code: ""
      },
      disabledB: "disabled",
      isPassing6: false,
      rules: {
        email: [{ validator: emailNo, trigger: "blur" }],
        pass: [{ validator: passNo, trigger: "blur" }],
        code: [{ validator: ageNo, trigger: "blur" }]
      },
      auth_time: 0,
      sendAuthCode: true,
      fullscreenLoading: false,
      numOp: [
        {
          label: "热门国家及地区",
          options: [
            {
              value: "中国",
              label: "+86"
            },
            {
              value: "美国",
              label: "+1"
            },
            {
              value: "加拿大",
              label: "+1"
            },
            {
              value: "日本",
              label: "+81"
            },
            {
              value: "德国",
              label: "+49"
            },
            {
              value: "英国",
              label: "+44"
            }
          ]
        },
        {
          label: "国家及地区",
          options: [
            {
              value: "中国",
              label: "+86"
            },
            {
              value: "美国",
              label: "+1"
            },
            {
              value: "加拿大",
              label: "+1"
            },
            {
              value: "日本",
              label: "+81"
            },
            {
              value: "德国",
              label: "+49"
            },
            {
              value: "英国",
              label: "+44"
            }
          ]
        }
      ]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.fullscreenLoading = true;
          var { type, email, code } = this.ruleForm;
          registerdata({ type, email, code }).then(res => {
            this.fullscreenLoading = false;
            console.log(res);
            this.$router.push({ path: "/" });
            this.$store.dispatch("user/getInfo", "djsjhgdjhg");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    passcallback2() {
      this.disabledB = false;
    },
    hanldeGetCode() {
      var { type, email } = this.ruleForm;
      this.sendAuthCode = false;
      this.auth_time = 60;
      var auth_timetimer = setInterval(() => {
        this.auth_time--;
        if (this.auth_time <= 0) {
          this.sendAuthCode = true;
          clearInterval(auth_timetimer);
        }
      }, 1000);
      getCode({ type, email })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.el-button--primary {
  color: #fff;
  background-color: #5c82ff;
  border-color: #5c82ff;
}
.el-button.is-disabled,
.el-button.is-disabled:focus,
.el-button.is-disabled:hover {
  color: #fff;
  cursor: not-allowed;
  background-image: none;
  background-color: #ccc !important;
  border-color: #ccc !important;
}
.page-container {
  background-color: #fff;
  padding-top: 120px;
  .logo {
    text-align: center;
    img {
      width: 140px;
    }
  }
  .nav-list {
    width: 340px;
    text-align: center;
    li:not(.active) {
      border-bottom-color: #3c4156;
    }
  }

  .navs,
  .navs .nav-list {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    li:first-child {
      border-top-left-radius: 4px;
    }
    li {
      width: 50%;
      font-size: 18px;
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(2%, #fff),
        color-stop(97%, #eee)
      );
      background-image: linear-gradient(-180deg, #fff 2%, #eee 97%);
      border: 1px solid #d8d8d8;
      border-bottom-color: rgb(216, 216, 216);
      height: 46px;
      line-height: 46px;
      a {
        color: #1c1f28;
        display: block;
        cursor: pointer;
      }
    }
  }
  .navs {
    width: 100%;
    margin: 28px 0;
  }
}
.page-container .navs .nav-list li.active {
  background: #3c4156;
  border-color: #3c4156;
}
.page-container .navs .nav-list li.active a {
  color: #fff;
}
.page-container .main-content {
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
}
.uc-mobile-item {
  border: 1px solid #d8d8d8;
  border-radius: 4px;
}
.footer {
  width: 100%;
  max-width: 360px;
  text-align: center;
  margin: 0 auto;
  .agreement {
    font-size: 13px;
    color: #8a8888;
    padding-bottom: 20px;
    border-bottom: 1px solid #d8d8d8;
  }
  .links {
    margin-top: 15px;
    font-size: 12px;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    a {
      color: #5c82ff;
    }
  }
}
.footer .agreement a {
  font-size: 14px;
  text-decoration: underline;
  color: #5c82ff;
}
</style>
<style>
.form .el-row {
  border: 1px solid #d8d8d8;
  border-radius: 4px;
}
.uc-mobile-item .el-input__inner {
  border: none;
}
.verificationbox {
  position: relative;
}
.verification {
  position: absolute;
  top: 0;
  right: 10px;
  z-index: 100;
  text-align: right;
}
</style>
