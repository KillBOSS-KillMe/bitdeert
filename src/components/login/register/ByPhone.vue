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
        <el-form-item prop="phoneNum">
          <el-row class="uc-mobile-item">
            <el-col :span="7">
              <el-select v-model="ruleForm.NationalNum" placeholder="请选择">
                <el-option-group v-for="group in numOp" :key="group.label" :label="group.label">
                  <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    style="max-height: 274px; width: 340px;"
                  >
                    <span style="float: left">{{ item.value }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.label }}</span>
                  </el-option>
                </el-option-group>
              </el-select>
            </el-col>
            <el-col :span="17">
              <el-input v-model="ruleForm.phoneNum" placeholder="请输入手机号码"></el-input>
            </el-col>
          </el-row>
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
              <i v-show="!isPassing6" slot="textBefore" class="el-icon-lock"></i>
            </drag-verify>
          </el-col>
        </el-form-item>
        <el-form-item prop="code">
          <el-row class="verificationbox">
            <el-col :span="24">
              <el-input v-model.number="ruleForm.code" placeholder="短信验证码"></el-input>
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
        <el-form-item>
          <el-button
            type="primary"
            style="width:100%"
            v-loading.fullscreen.lock="fullscreenLoading"
            @click="submitForm('ruleForm')"
          >立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import dragVerify from "@/components/drag/dragVerify";
import { registerdata, getCode } from "@/api/login";
import { Message } from "element-ui";
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
    var phoneNo = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入电话号码"));
      } else {
        if (!/^1[34578]\d{9}$/.test(value)) {
          callback(new Error("手机号码格式不正确"));
        } else {
          callback();
        }
      }
    };
    var passNo = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else if (value.length > 6) {
        callback(new Error("密码必须大于6位"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        type: 0,
        NationalNum: "+86",
        phoneNum: "",
        checkPass: "",
        code: ""
      },
      disabledB: "disabled",
      onWay: "pwd",
      isPassing6: false,
      rules: {
        phoneNum: [{ validator: phoneNo, trigger: "blur" }],
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
  watch: {
    $route: function(newUrl, oldUrl) {
      if (newUrl != oldUrl) {
        this.onWay = this.$route.query.info;
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.fullscreenLoading = true;
          var { type, phoneNum, code } = this.ruleForm;
          registerdata({ type, phoneNum, code }).then(res => {
            this.fullscreenLoading = false;
            console.log(res);
            if (res.data.code !== 200) {
              Message({
                message: res.data.msg || "登陆错误",
                type: "error",
                duration: 5 * 1000
              });
            } else {
              this.$store.dispatch("user/getInfo", res.data);
              this.$router.push({ path: "/" });
            }
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
      var { type, phoneNum } = this.ruleForm;
      this.sendAuthCode = false;
      this.auth_time = 60;
      var auth_timetimer = setInterval(() => {
        this.auth_time--;
        if (this.auth_time <= 0) {
          this.sendAuthCode = true;
          clearInterval(auth_timetimer);
        }
      }, 1000);
      getCode({ type, phoneNum })
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
