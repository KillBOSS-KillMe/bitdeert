import axios from "axios";
import { getToken, setToken } from "@/utils/auth";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
const service = axios.create({
  baseURL: "http://139.196.228.37:8080/api",
  withCredentials: true,
  timeout: 5000
});
service.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response;
    if (res.status !== 200) {
      Message({
        message: res.data.msg || "登陆错误",
        type: "error",
        duration: 5 * 1000
      });
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm("Token已失效，请重新登陆", "确认登出", {
          confirmButtonText: "登陆",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          store.dispatch("user/resetToken").then(() => {
            location.reload();
          });
        });
      }
      return Promise.reject(new Error(res.msg || "Error"));
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
