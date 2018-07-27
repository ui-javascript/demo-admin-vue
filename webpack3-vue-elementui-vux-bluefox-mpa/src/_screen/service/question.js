import request from "./_request";

// 争分夺秒一组问题
export function getQuestions(params) {
    return request({
        url: '/screen/subProblems',
        method: 'get',

        // 注意是data
        data: params
    })
}

// 争分夺秒答题详情
export function getOverview(params) {
    return request({
        url: '/screen/subProblemsDetail',
        method: 'get',

        // 注意是data
        data: params
    })
}

// 获取单题答题详情(包含争分夺秒，一比高下，狭路相逢)
export function getDetails(params) {
    return request({
        url: '/screen/singleProblemDetail',
        method: 'get',
        // 注意是data
        data: params
    })
}

// 一道题目的详细信息（一比高下和狭路相逢）
export function getProblem(params) {
    return request({
        url: '/screen/problemDetail',
        method: 'get',
        // 注意是data
        data: params
    })
}

// 单个问题晋级人数统计
export function getPassUser(params) {
    return request({
        url: '/screen/passUserCount',
        method: 'get',
        // 注意是data
        data: params
    })
}
