import request from './_request'

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