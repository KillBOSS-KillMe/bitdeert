import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/login/login/index.vue";
import Reset from "../components/login/reset/index.vue";
import Register from "../components/login/register/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/homePage",
    children: [
      {
        name: "homePage",
        path: "/homePage",
        component: () => import("@/components/homePage/index"),
        meta: { title: "首页" }
      },
      {
        path: "/pricing/:id?",
        name: "pricing",
        component: () => import("@/components/PricePage/index"),
        meta: { title: "价格" }
      },
      {
        path: "Vip",
        name: "Vip",
        component: () => import("@/components/vip/index"),
        meta: { title: "Vip" }
      },
      {
        path: "News",
        name: "News",
        component: () => import("@/components/news/index"),
        meta: { title: "新闻" }
      },
      {
        path: "Blog",
        name: "Blog",
        component: () => import("@/components/blog/blog"),
        meta: { title: "博客" }
      },
      {
        path: "Pool",
        name: "Pool",
        component: () => import("@/components/pool/index"),
        meta: { title: "博客" }
      },
      {
        path: "/order",
        name: "order",
        component: () => import("@/components/order/order"),
        meta: { title: "订单", auth: true }
      },
      {
        path: "/myOrderList",
        name: "myOrderList",
        component: () => import("@/components/myOrderList/index"),
        redirect: "/ability",
        meta: { title: "我的算力", auth: true },
        children: [
          {
            name: "Ability",
            path: "/ability",
            component: () => import("@/components/myOrderList/ability"),
            meta: { title: "我的算力" }
          },
          {
            name: "OrderList",
            path: "/orderList",
            component: () => import("@/components/myOrderList/orderList"),
            meta: { title: "我的订单" }
          },
          {
            name: "MyCoupon",
            path: "/myCoupon",
            component: () => import("@/components/myOrderList/myCoupon"),
            meta: { title: "我的礼券" }
          },
          {
            name: "IncomeAddress",
            path: "/incomeAddress",
            component: () => import("@/components/myOrderList/IncomeAddress"),
            meta: { title: "收益地址" }
          },
          {
            name: "ReminderSettings",
            path: "/reminderSettings",
            component: () => import("@/components/myOrderList/reminderSettings"),
            meta: { title: "提醒设置" }
          },
          {
            name: "Promote",
            path: "/promote",
            component: () => import("@/components/myOrderList/promote"),
            meta: { title: "推广" }
          },
        ]
      },
      {
        path: "/AccountCenter",
        name: "accountCenter",
        component: () => import("@/components/accountCenter/index"),
        meta: { title: "账号中心", auth: true },
        redirect: "/accountCenterSys",
        children: [
          {
            name: "AccountCenterSys",
            path: "/accountCenterSys",
            component: () => import("@/components/accountCenter/accountCenterSys"),
            meta: { title: "账号设置" }
          }
        ]
      }
    ]
  },
  {
    name: "Login",
    path: "/Login",
    component: Login,
    redirect: "/Login/byPhone",
    meta: { title: "登陆" },
    children: [
      {
        path: "byPhone",
        name: "byPhone",
        component: () => import("@/components/login/login/ByPhone"),
        meta: { title: "手机登陆" }
      },
      {
        path: "byEmail",
        name: "byEmail",
        component: () => import("@/components/login/login/byEmail"),
        meta: { title: "邮箱登陆" }
      }
    ]
  },
  {
    name: "Reset",
    path: "/Reset",
    component: Reset,
    redirect: "/Reset/byPhone",
    meta: { title: "重置" },
    children: [
      {
        path: "byPhone",
        name: "setbyPhone",
        component: () => import("@/components/login/reset/ByPhone"),
        meta: { title: "手机重置" }
      },
      {
        path: "byEmail",
        name: "setbyEmail",
        component: () => import("@/components/login/reset/byEmail"),
        meta: { title: "邮箱重置" }
      }
    ]
  },
  {
    name: "Register",
    path: "/Register",
    component: Register,
    redirect: "/Register/byPhone",
    meta: { title: "注册" },
    children: [
      {
        path: "byPhone",
        name: "RebyPhone",
        component: () => import("@/components/login/register/ByPhone"),
        meta: { title: "手机注册" }
      },
      {
        path: "byEmail",
        name: "RebyEmail",
        component: () => import("@/components/login/register/byEmail"),
        meta: { title: "邮箱注册" }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
