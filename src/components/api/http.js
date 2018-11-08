import axios from 'axios'
import mui from '../../assets/js/mui.js'
axios.defaults.baseURL = "http://localhost:7012";  // 默认地址
var instanceAxios = axios.create()
const that = this;
instanceAxios.interceptors.request.use(
    res => {
        return res
    },
    err => {
        // 这里显示网络异常
        return Promise.reject(err)
    },
)

// Add a response interceptor
instanceAxios.interceptors.response.use(
    res => {
        let resData = res.data;
        if (resData.code == 200) {
            return resData
        }
        else {
            mui.toast(resData.msg, { duration: 'long', type: 'div' })
            return resData;
        }
    },
    err => {
        // 这里显示网络异常
        return {
            code: 404,
            msg: '服务端挂了',
        }
    },
)

instanceAxios.defaults.withCredentials = true
instanceAxios.defaults.timeout = 115000
export default instanceAxios
