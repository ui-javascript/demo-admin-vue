import request from "./_request";

// 推送争分夺秒
export function pushType1(params) {
    return request({
        url: '/push/all/type1/users',
        method: 'post',
        params: params
    })
}

// 推送一比高下
export function pushType2(params) {
    return request({
        url: '/push/group/type2/users',
        method: 'post',
        params: params
    })
}

// 推送狭路相逢
export function pushType3(params) {
    return request({
        url: '/push/all/type3/users',
        method: 'post',
        params: params
    })
}