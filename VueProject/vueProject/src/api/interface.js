// import $axios from './config.js'

// console.log($axios);

// export const swiperList = params => {
//     return $axios('img/list', 'get', params)
// }


import axios from 'axios'
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



let baseUrl = '';


export default {
    // 首页轮播图
  swiperList: params => {
    return axios.get('img/list',{
        params:params
    })
  },

}
