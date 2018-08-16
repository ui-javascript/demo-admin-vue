import request from '../utils/request'

export function fetch () {
  return request('http://m.qmen.space:8080/api/city')
}

export function remove (id) {
  return request(`http://m.qmen.space:8080/api/city/${id}`, {
    method: 'DELETE',
  })
}

export function patch (id, values) {
  return request(`http://m.qmen.space:8080/api/city/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  })
}

export function create (values) {
  return request('http://m.qmen.space:8080/api/city/', {
    method: 'POST',
    body: JSON.stringify(values),
  })
}
