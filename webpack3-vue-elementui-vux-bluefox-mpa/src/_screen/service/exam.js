// 争分夺秒答题详情
import request from "./_request";

// 获取进度
export function getProgress() {
    return request({
        url: '/exam/process',
        method: 'get',
    })
}