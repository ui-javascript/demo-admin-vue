import request from './_request'


// 获取争分夺秒
export function getList(params) {
    return request({
        url: '/exam/problems',
        method: 'get',
        params
    })
}

// 获取一比高下 | 狭路相逢
export function getProblem(params) {
    return request({
        url: '/exam/problem',
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


