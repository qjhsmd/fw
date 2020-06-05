/**
 * api 
 */
import axios from 'axios'
// import store from '@/store/user'
//  import { Message } from 'element-ui'
const public_url = 'http://192.168.1.30:9999'//
axios.defaults.withCredentials = true;
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.code && response.data.code != 200) {
        // let msg = '';
        // if (response.data.data) {
        //     msg = response.data.data
        // } else {
        //     msg = response.data.message
        // }
        //     Message({
        //         showClose: true,
        //         message: msg,
        //         type: 'error',
        //     })
         }
        return response.data
    }, function (error) {
        // 对响应错误做点什么
        if (error.status == 401) {
            window.location.href = '/login'
        } else if (error.status == 500) {
            if (error.responseJSON) {
                // Message.error(error.responseJSON.error)
            } else {
                // Message.error('服务器异常')
            }
        } else {
            //  window.location.href = '/login'
        }

        return Promise.reject(error)

    })

// let uploadConfig = function () {
//     return { //添加请求头
//         // headers: {
//         //     'Content-Type': 'multipart/form-data'
//         // },
//         withCredentials: true, // 默认的
//     }
// }

export default {
    login: (params) => {
        return axios.post(public_url + '/result', params)
    },
    userLogin: (params) => {
        console.log(params)
        return axios.post(public_url + '/api/login', params)
    },
    demo: (params) => {
        return axios.get(public_url + '/demo', params)
    },
    menu: (params) => {
        return axios.get(public_url + '/api/menu', params)
    },
    chicken: (params) => {
        return axios.get(public_url + '/api/chicken', params)
    },

}