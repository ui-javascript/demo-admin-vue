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
        url: '/exam/saveOneProblem',
        method: 'post',
        // json
        data: params
    })
}

// 获取当前进度
export function getProgress(params) {
    return request({
        url: '/exam/process',
        method: 'get',
    })
}


