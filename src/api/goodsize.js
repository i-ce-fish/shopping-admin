import request from '@/utils/request'

/**
 * 获取列表
 * @param params 分页参数
 * @return {Promise<*>}
 */
export function getGoodsizes(params) {
  return request({
    url: '/api/goodsizes',
    method: 'get',
    params
  })
}

export function getGoodsize(id) {
  return request({
    url: `/api/goodsizes/${id}`,
    method: 'get'
  })
}

export function addGoodsize(data) {
  return request({
    url: '/api/goodsizes',
    method: 'post',
    data
  })
}

export function putGoodsize(id, data) {
  return request({
    url: `/api/goodsizes/${id}`,
    method: 'put',
    data
  })
}

export function delGoodsize(id) {
  return request({
    url: `/api/goodsizes/${id}`,
    method: 'delete'
  })
}
