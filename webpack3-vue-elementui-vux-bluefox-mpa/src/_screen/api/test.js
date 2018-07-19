import request from './_request'

export function getRap(params) {
    return request({
        url: '/example/1531272496376',
        method: 'get',
        params
    })
}
