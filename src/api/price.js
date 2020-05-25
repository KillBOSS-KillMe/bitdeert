import request from "@/utils/request";

export function getHashRateSale(data) {
  return request({
    url: "/hashRate/getHashRateSale",
    method: "post",
    data
  });
}
