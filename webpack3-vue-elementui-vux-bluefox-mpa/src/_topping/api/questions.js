import request from './_request'

export function getList(params) {
    return request({
        url: '/exam/problems',
        method: 'get',
        params
    })
}
