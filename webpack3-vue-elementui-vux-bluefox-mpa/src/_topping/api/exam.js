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

// 获取每个模块结束的分数信息
export function getScore(params) {
    return request({
        url: 'exam/detail',
        method: 'get',
        params
    })
}

// 获取用户的考试结果
export function getGrade(params) {
    return request({
        url: 'exam/userScores',
        method: 'get',
        data: params
    })
}

// 狭路相逢选择是否参与
export function confirmPartner(params) {
    return request({
        url: '/exam/partner',
        method: 'post',
        data: params
    })
}

// 狭路相逢选择是否参与
export function getUserRanking() {
    return request({
        url: '/exam/userRanking',
        method: 'get',
    })
}