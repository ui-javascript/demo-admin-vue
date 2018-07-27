import request from "./_request";

// 获取用户排名
export function getRanking(params) {
    return request({
        url: '/screen/userRanking',
        method: 'get',
        // 注意是data
        data: params
    })
}

