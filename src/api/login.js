import request from "@/utils/request"

export function login(data) {
  return request({
    url: "/api/auth/login",
    method: "post",
    data
  })
}

export function register(data) {
  return request({
    url: "/api/users",
    method: "post",
    data
  })
}

export function getInfo(params) {
  return request({
    url: "/api/auth/info",
    method: "get",
    params
  })
}
