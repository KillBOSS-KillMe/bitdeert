<template>
  <div class="page-container">
    <div class="logo">
      <img src="https://passport.bitdeer.com/logo.png" />
    </div>
    <div class="navs">
      <ul class="nav-list">
        <router-link :to="{ path: 'byPhone' }" active-class="active" tag="li">
          <a>手机登陆</a>
        </router-link>
        <router-link :to="{ path: 'byEmail' }" active-class="active" tag="li">
          <a>邮箱登陆</a>
        </router-link>
      </ul>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "1"
    };
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
