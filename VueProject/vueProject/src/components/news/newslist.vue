<template>
	<section>
		<ul class="mui-table-view">
			<li v-for="item in newslist" class="mui-table-view-cell mui-media">
				<router-link v-bind="{ to:'/news/newsshow/'+item.id}">
					<!--<router-link :to="{name:'/news/newslist',params:{id:'123'}}">-->
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						{{item.title}}
						<p class="mui-ellipsis">发布时间:{{item.add_time | datafmt}}
							<span>点击次数:{{item.click}}</span>
						</p>
					</div>
				</router-link>
			</li>
	
		</ul>
	</section>
</template>
<script>
export default {
	data() { 
		return {
			newslist: [
				{
					id: 13,
					title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
					add_time: "2015-04-16T03:50:28.000Z",
					zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
					click: 1,
					img_url: "http://ofv795nmp.bkt.clouddn.com//upload/201504/16/201504161149414479.jpg"
				},
				{
					id: 14,
					title: "买房还是炒股，2015年买房无法拒绝的5大理由",
					add_time: "2015-04-16T04:05:34.000Z",
					zhaiyao: "转眼间2015年已经过去了4个月，在这短短的四个月",
					click: 2,
					img_url: "http://ofv795nmp.bkt.clouddn.com//upload/201504/16/201504161205596364.jpg"
				}
			]
		}
	}
}
</script>
<style scoped lang="scss">
.mui-media-body {
	text-align: left;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.mui-ellipsis {
	color: #0094ff;
	margin-top: 5px;
}

.mui-ellipsis span {
	position: absolute;
	right: 20px;
}
</style>
