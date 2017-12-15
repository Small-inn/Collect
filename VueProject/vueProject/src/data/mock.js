import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { swiper } from './data.js';


export default {
    bootStrap(){
        let mock = new MockAdapter(axios);
        // mock成功的请求
        mock.onGet('/success').reply(200,{
            msg:'success'
        })
        // mock失败的请求
        mock.onGet('/error').reply(200,{
            msg:'error'
        })


        // 获取首页轮播数据
        mock.onGet('img/list').reply(200, {
            imgList:swiper
        })
    }
}
