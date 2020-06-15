<template>
  <div class="nav-container">
    <div class="nav-container">
      <!-- <div class="notice-wrapper">
        <div class="notice-container">
          <div class="notice-list-container">
            <i class="font_family icon-notice"></i>
            <ul class="notice-slider">
              <li class="notice-item">
                <a href="/zh/notice/324" class>
                  <span class="notice-w">比特小鹿开通中文电报群 - 7月29日</span>
                  <i class="notice-t">查看详情</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>-->
      <div id="nav-wrapper" class="nav-wrapper">
        <div class="nav-header">
          <div class="navigation">
            <div class="nav-item">
              <router-link
                :to="{ name: 'Home' }"
                class="logo-link nuxt-link-exact-active nuxt-link-active"
              >
                <img src="@/assets/img/00b389e.png" alt="logo" class="logo" />
              </router-link>
              <ul class="nav">
                <li
                  v-for="(item, index) in navList"
                  :key="index"
                  :class="{
                    active: indexnav === index,
                    hoverActive: isActive === index
                  }"
                  @click="handleNavclick(index, item)"
                  @mouseenter="priceList(index, item)"
                  @mouseleave="leave(index, item)"
                >
                  <i class="vipIcon font_family icon-VIP"></i>
                  <span>{{ item.title }}</span>
                </li>
              </ul>
            </div>
            <div class="nav-item">
              <div id="nlogin" class="nlogin">
                <span id="login" class="login style-float-right" @click="hanldLogin">
                  <span>登录</span>
                </span>
                <span id="register" class="register style-float-right">
                  <span @click="hanldregister">注册</span>
                </span>
              </div>
              <div class="containerlogin">
                <el-dropdown background-color>
                  <span class="el-dropdown-link" style="color: #fff;margin-right:15px">
                    1312060268
                    <i class="el-icon-caret-bottom"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="dashboard-dropdown">
                    <el-dropdown-item>我的订单</el-dropdown-item>
                    <el-dropdown-item>我的电费</el-dropdown-item>
                    <el-dropdown-item>推广</el-dropdown-item>
                    <el-dropdown-item>
                      退出
                      <i class="el-icon-right"></i>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div class="locales">
                <div class="el-dropdown">
                  <span class="el-dropdown-link locale-dp-link">
                    <img src="@/assets/svg/CN.svg" />
                    <span style="color:#fff;">简体中文</span>
                    <i class="el-icon-caret-bottom" style="color:#fff;"></i>
                  </span>
                  <ul
                    trigger="click"
                    class="el-dropdown-menu el-popper locale-dropdown dashboard-dropdown"
                    style="display:none;"
                  >
                    <li tabindex="-1" class="el-dropdown-menu__item">
                      <a>
                        <img src="EN.svg" />
                        <span>English</span>
                      </a>
                    </li>
                    <li tabindex="-1" class="el-dropdown-menu__item">
                      <a>
                        <img src="CN.svg" />
                        <span>繁體中文</span>
                      </a>
                    </li>
                    <li tabindex="-1" class="el-dropdown-menu__item">
                      <a>
                        <img src="RU.svg" />
                        <span>Pусский</span>
                      </a>
                    </li>
                    <li tabindex="-1" class="el-dropdown-menu__item">
                      <a>
                        <img src="DE.svg" />
                        <span>Deutsch</span>
                      </a>
                    </li>
                    <li tabindex="-1" class="el-dropdown-menu__item">
                      <a>
                        <img src="ES.svg" />
                        <span>Español</span>
                      </a>
                    </li>
                    <li tabindex="-1" class="el-dropdown-menu__item">
                      <a>
                        <img src="JA.svg" />
                        <span>日本語</span>
                      </a>
                    </li>
                    <li tabindex="-1" class="el-dropdown-menu__item">
                      <a>
                        <img src="KO.svg" />
                        <span>한국어</span>
                      </a>
                    </li>
                    <li tabindex="-1" class="el-dropdown-menu__item">
                      <a>
                        <img src="FR.svg" />
                        <span>Français</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="pricing-layer"
          v-if="lookprice"
          @mouseleave="leave()"
          @mouseenter="priceList(1, { title: '价格' })"
        >
          <div class="p-content zh">
            <ul>
              <li
                v-for="(item, index) in pricingList"
                :key="index"
                @click="pricingClick()"
              >
                <router-link
                  :to="{ name: 'pricing', params: { id: item.coinUuid } }"
                >
                  <section>
                    <div class="p-icon">
                      <img :src="item.coin_icon" alt />
                    </div>
                    <div>
                      <p title="BTC/BCH" class="name">{{ item.coin_symbol }}</p>
                      <p class="desc">{{ item.miner_nanme }}</p>
                    </div>
                  </section>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
import { getSaleCoin } from "@/api/nav.js";
import { Message } from "element-ui";
export default {
  name: "index",
  data() {
    return {
      currentPage: "/",
      lookprice: false,
      isActive: -1,
      indexnav: null,
      navList: [
        { title: "首页", link: "homePage", icon: "" },
        { title: "价格", link: "pricing", icon: "" },
        { title: "产品", link: "Vip", icon: "" },
        { title: "数据模块", link: "Pool", icon: "" },
        { title: "新闻", link: "News", icon: "" },
        { title: "博客", link: "Blog", icon: "" },
        { title: "我的算力", link: "myOrderList", icon: "" }
      ],
      pricingList: []
    };
  },
  watch: {
    $route(to, from) {
      console.log("buibuibui", this.$route.path === "/pricing", to, from);
      if (this.$route.path === "/pricing") {
        this.indexnav = 1;
      }
    }
  },
  created() {
    this.currentPage = this.$router.currentRoute.path;
    this.getSaleCoin();
  },
  methods: {
    async getSaleCoin() {
      const res = await getSaleCoin();
      console.log("数字货币", res.data);
      if (res.data.code !== 200) {
        console.log("不等于数字货币", res.code);
        Message({
          message: "为获取到数字货币",
          type: "error",
          duration: 5 * 1000
        });
      } else {
        console.log("数字货币", res.data);
        this.pricingList = res.data.data;
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    priceList(index, item) {
      if (item.title === "价格") {
        this.isActive = index;
        this.lookprice = true;
      }
    },
    pricingClick() {
      this.indexnav = 1;
      this.lookprice = false;
      this.isActive = -1;
    },
    leave() {
      this.isActive = -1;
      this.lookprice = false;
    },
    hanldLogin() {
      this.$router.push({ name: "Login" });
    },
    hanldregister() {
      this.$router.push({ name: "Register" });
    },
    handleNavclick(index, item) {
      console.log(index, item);
      if (item.title === "价格") {
        return;
      } else {
        this.indexnav = index;
        this.$router.push({ name: item.link });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-container {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2020;
  .notice-wrapper {
    background: #262a37;
  }
  .notice-container {
    margin: 0 auto;
    height: 40px;
    font-size: 14px;
    color: #fff;
    line-height: 40px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    .notice-list-container {
      display: -webkit-box;
      display: flex;
      height: 40px;
      overflow-y: hidden;
      width: 1200px;
      margin: 0 auto;
      .font_family {
        color: #b4b5b8;
        font-family: iconfont !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      ul.notice-slider {
        margin-left: 5px;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        .notice-item {
          height: 40px;
          a {
            text-decoration: none;
            color: #5c82ff;
          }
          .notice-w {
            font-size: 14px;
            color: hsla(0, 0%, 100%, 0.6);
            cursor: pointer;
          }
          .notice-t {
            font-size: 12px;
            color: hsla(0, 0%, 100%, 0.6);
            padding: 3px 10px;
            cursor: pointer;
            border: 1px solid hsla(0, 0%, 100%, 0.6);
            border-radius: 10px;
            text-align: center;
            margin-left: 20px;
          }
        }
      }
    }
  }
}
.nav-wrapper {
  position: relative;
  display: block;
  top: 0;
  width: 100%;
  background: #32374a;
  box-shadow: 0 4px 10px 0 rgba(50, 55, 74, 0.2);
  .nav-header {
    width: 1200px;
    margin: 0 auto;
    .navigation {
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      position: relative;
      min-width: 960px;
      height: 72px;
      line-height: 72px;
      font-size: 14px;
      color: #fff;
      text-align: left;
      overflow: hidden;
      ul li:hover {
        cursor: pointer;
      }
      .nav-item {
        display: -webkit-box;
        display: flex;
      }
      .logo-link {
        display: inline-block;
        img.logo {
          display: inline-block;
          width: 105px;
          height: 18px;
          vertical-align: middle;
        }
      }
      .nav {
        margin-left: 34px;
        display: inline-block;
        li.hoverActive::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-bottom-color: transparent;
          border-bottom-color: #fff;
        }
        li.active {
          position: relative;
          color: #4c84ff;
        }
        li {
          margin-right: 40px;
          position: relative;
        }
      }
      ul li {
        display: inline-block;
      }
    }
  }
  .pricing-layer {
    position: absolute;
    width: 100%;
    background: #fff;
    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.1);
    z-index: 999;
    .p-content {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      ul {
        display: -webkit-box;
        display: flex;
        flex-wrap: wrap;
        margin: 37px 0;
        li {
          width: 49%;
          padding-left: 50px;
          padding-bottom: 15px;
          section {
            display: -webkit-inline-box;
            display: inline-flex;
            -webkit-box-align: center;
            align-items: center;
            padding: 9px 50px 9px 9px;
            border-radius: 30px;
            cursor: pointer;
            .p-icon {
              margin-right: 10px;
              img {
                width: 36px;
                border-radius: 18px;
              }
            }
            .name {
              font-size: 20px;
              color: #333;
              max-width: 400px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            .desc {
              font-size: 12px;
              color: #666;
              padding-top: 5px;
            }
          }
          section:hover {
            background-color: #eaeaea;
          }
        }
      }
    }
    .p-content::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      left: 49%;
      width: 1px;
      height: 100%;
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(hsla(0, 0%, 93.3%, 0)),
        color-stop(51%, #d8d8d8),
        to(hsla(0, 0%, 84.7%, 0))
      );
      background-image: linear-gradient(
        -180deg,
        hsla(0, 0%, 93.3%, 0),
        #d8d8d8 51%,
        hsla(0, 0%, 84.7%, 0)
      );
    }
  }
}
a {
  text-decoration: none;
  color: #5c82ff;
}
.vipIcon {
  width: 14px;
  height: 11px;
  position: absolute;
  top: -16px;
  left: 3px;
  font-size: 12px;
}
.nav-wrapper .nav-header .navigation .nlogin {
  text-align: center;
  margin-top: 21px;
  .style-float-right {
    display: block;
    float: left;
  }
  .login {
    font-size: 12px;
    color: #fff;
    width: 84px;
    height: 30px;
    background: #32374a;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    line-height: 28px;
    border: 1px solid #fff;
    margin-right: 5px;
    cursor: pointer;
  }
  .register {
    font-size: 12px;
    color: #fff;
    padding: 0 10px;
    height: 30px;
    background: #4c84ff;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    border: 1px solid #4c84ff;
    line-height: 28px;
    min-width: 84px;
  }
}
.nav-wrapper .nav-header .navigation .nav-item .locales {
  cursor: pointer;
  margin-left: 15px;
}
.el-dropdown {
  display: inline-block;
  position: relative;
  color: #606266;
  font-size: 14px;
}
.nav-item .locales .locale-dp-link {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  img {
    margin-right: 10px;
  }
  .el-dropdown-link span {
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    float: left;
    margin-right: 10px;
  }
}
.containerlogin {
  height: 72px;
  line-height: 72px;
  padding: 0 10px 0 0;
}
.dashboard-dropdown {
  z-index: 5000 !important;
  margin-top: 0 !important;
  padding: 0;
  background: #262a37;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  font-family: Rubik-Medium;
  border: none;
  border-radius: 0;
}
.popper__arrow::after {
  top: 1px;
  margin-left: -6px;
  border-top-width: 0;
  border-bottom-color: #333749;
}
</style>
<style>
.el-popper .popper__arrow,
.el-popper .popper__arrow::after {
  top: -1px;
  margin-left: -6px;
  border-top-width: 0;
  display: none !important;
  border-bottom-color: #333749 !important;
}
.dashboard-dropdown .el-dropdown-menu__item {
  border-bottom: 1px solid #3b3e4a;
  color: #fff;
}
.dashboard-dropdown li:hover {
  background-color: #32374a !important;
  color: #5c82ff !important;
}
</style>
