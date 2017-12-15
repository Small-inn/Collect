import $axios from './config.js'

console.log($axios);

export const swiperList = params => {
    return $axios('img/list', 'get', params)
}