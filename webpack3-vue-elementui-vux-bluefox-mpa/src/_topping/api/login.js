import request from './_request'

export function login(userName, password) {
    return request({
        url: 'account/login',
        method: 'post',
        data: {
            'userName': userName,
            'password': password
        }
    })
}

export function getInfo(token) {
    return request({
        url: '/User/GetUsersList',
        method: 'get',
        // params: { token }
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}
