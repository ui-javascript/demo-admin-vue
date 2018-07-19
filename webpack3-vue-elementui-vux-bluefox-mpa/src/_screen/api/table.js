import request from './_request'

export function getList(params) {
    return request({
        url: '/table/list',
        method: 'get',
        params
    })
}
