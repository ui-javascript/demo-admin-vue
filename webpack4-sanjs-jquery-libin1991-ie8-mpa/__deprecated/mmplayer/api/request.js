import axios from 'axios'

const service = axios.create({
    // baseURL: process.env.BASE_API, // api 的 base_url
    // timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    config => {
        console.log(config)
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

export default service