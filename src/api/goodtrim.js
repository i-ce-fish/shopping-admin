import request from '@/utils/request'

export function getGoodtrims(params) {
  return request({
    url: '/api/goodtrims',
    method: 'get',
    params
  })
}

export function getGoodtrim(id) {
  return request({
    url: `/api/goodtrims/${id}`,
    method: 'get'
  })
}

export function addGoodtrim(data) {
  return request({
    url: '/api/goodtrims',
    method: 'post',
    data
  })
}

export function putGoodtrim(id, data) {
  return request({
    url: `/api/goodtrims/${id}`,
    method: 'put',
    data
  })
}

export function delGoodtrim(id) {
  return request({
    url: `/api/goodtrims/${id}`,
    method: 'delete'
  })
}
