import Mock from 'mockjs';

// 轮播图
const swiper = [];
for(let i = 0; i < 6; i++){
    swiper.push(Mock.mock({
        id:Mock.Random.guid(),
        img:Mock.Random.image('375x200','#E02326')
    }))
}



export { swiper }