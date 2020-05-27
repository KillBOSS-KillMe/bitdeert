import request from "@/utils/request";

// 获取算力信息
export function getUserHashRate(data) {
  return request({
    url: "user/getUserHashRate",
    method: "post",
    data
  });
}
// 获取订单列表
export function getUserOrder(data) {
  return request({
    url: "user/getUserOrder",
    method: "post",
    data
  });
}

// 获取我的礼券
export function getGiftCertificate(data) {
  return request({
    url: "order/getGiftCertificate",
    method: "post",
    data
  });
}

// 获取推广信息
// export function getUserOrder(data) {
//   return request({
//     url: "user/getUserOrder",
//     method: "post",
//     data
//   });
// }

// 获取收益地址
export function getRevenueAddress(data) {
  return request({
    url: "user/getRevenueAddress",
    method: "post",
    data
  });
}

// 提醒设置--获取
export function getRemindSetting(data) {
  return request({
    url: "user/getRemindSetting",
    method: "post",
    data
  });
}
// 提醒设置--设置
export function setRemindSetting(data) {
  return request({
    url: "user/setRemindSetting",
    method: "post",
    data
  });
}

// 账号设置
// export function getGiftCertificate(data) {
//   return request({
//     url: "order/getGiftCertificate",
//     method: "post",
//     data
//   });
// }