import request from './_request'

export function login(userName, password) {
    return request({
        url: '/account/screen/login',
        method: 'post',
        data: {
            'userName': userName,
            'password': password
        }
    })
}

export function getInfo(token) {
    return request({
        url: '/user/info',
        method: 'get',
        params: { token }
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}
