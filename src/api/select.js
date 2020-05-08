import request from "@/utils/request"

export function getCourses() {
  return request({
    url: "/api/selects",
    method: "get"
  })
}
