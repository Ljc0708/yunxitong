

import axios from "axios"
import { ElMessage } from 'element-plus'
enum MSGG {
    "操作成功" = 1,
    "操作失败" = 0,
    "用户名错误" = 207,
    "用户密码错误" = 208
}

const $http = axios.create({
    baseURL: "http://192.168.100.114:8085/",
    timeout: 2000,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})
$http.interceptors.request.use(config => {
    config.headers = config.headers || {}
    if (sessionStorage.getItem('token')) {
        config.headers.token = sessionStorage.getItem('token') || ''
    }
    return config
})
$http.interceptors.response.use(res => {

    const status: number = res.data.status
    if (status !== 1) {
        ElMessage({
            message: MSGG[status],
            type: 'error',
        })
        return Promise.reject(res.data)
    }

    return res.data
}, err => {
    console.log(err)
})


export default $http