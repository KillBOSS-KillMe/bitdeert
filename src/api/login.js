import request from "@/utils/request";

export function registerdata(data) {
  return request({
    url: "user/register",
    method: "post",
    data
  });
}
export function getCode(data) {
  return request({
    url: "user/getCode",
    method: "post",
    data
  });
}

export function login(data) {
  console.log(data);
  return request({
    url: "user/login",
    method: "post",
    data
  });
}

export function getInfo(token) {
  return request({
    url: "/user/loginInfo",
    method: "post",
    data: token
  });
}

export function logout(token) {
  return request({
    url: "/user/logout",
    method: "post",
    data: token
  });
}
