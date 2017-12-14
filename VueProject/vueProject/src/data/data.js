import Mock from 'mockjs';

// 轮播图
const swiper = [];
for(let i = 0; i < 3; i++){
    swiper.push(Mock.mock({
        img:Mock.Random.dataImage()
    }))
}



export { swiper }