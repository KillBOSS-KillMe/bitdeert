import request from "@/utils/request";

export function getSaleCoin() {
  return request({
    url: "/coin/getSaleCoin",
    method: "get"
  });
}
