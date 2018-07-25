import request from './_request'

export function getList(params) {
    return request({
        url: '/exam/problems',
        method: 'get',
        params
    })
}

export function submitOne(params) {
    return request({
        url: 'exam/saveOneProblem',
        method: 'post',
        // json
        data: params
    })
}


