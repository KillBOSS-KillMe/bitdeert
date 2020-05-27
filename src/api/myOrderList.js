import request from "@/utils/request";

export function getUserHashRate(data) {
  return request({
    url: "user/getUserHashRate",
    method: "post",
    data
  });
}