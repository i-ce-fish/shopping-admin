import request from '@/utils/request'

export function getSuppliercontacts(params) {
  return request({
    url: '/api/suppliercontacts',
    method: 'get',
    params
  })
}

export function getSuppliercontact(id) {
  return request({
    url: `/api/suppliercontacts/${id}`,
    method: 'get'
  })
}

export function addSuppliercontact(data) {
  return request({
    url: '/api/suppliercontacts',
    method: 'post',
    data
  })
}

export function putSuppliercontact(id, data) {
  return request({
    url: `/api/suppliercontacts/${id}`,
    method: 'put',
    data
  })
}

export function delSuppliercontact(id) {
  return request({
    url: `/api/suppliercontacts/${id}`,
    method: 'delete'
  })
}
