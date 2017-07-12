<template>
	<el-row class="container">
		<el-col :span="24" class="header"><top></top></el-col>
		<el-col :span="24" class="main">
			<aside class="">
				<el-menu default-active="2" unique-opened class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>导航一</template>
							<el-menu-item index="1-1">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
							<el-menu-item index="1-3">选项3</el-menu-item>
							<el-menu-item index="1-4">选项4</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>导航二</template>
							<el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
							<el-menu-item index="2-3">选项3</el-menu-item>
							<el-menu-item index="2-4">选项4</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-d-caret"></i>导航三</template>
							<el-menu-item index="3-1">选项1</el-menu-item>
							<el-menu-item index="3-2">选项2</el-menu-item>
							<el-menu-item index="3-3">选项3</el-menu-item>
							<el-menu-item index="3-4">选项4</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-star-on"></i>导航四</template>
							<el-menu-item index="4-1">选项1</el-menu-item>
							<el-menu-item index="4-2">选项2</el-menu-item>
							<el-menu-item index="4-3">选项3</el-menu-item>
							<el-menu-item index="4-4">选项4</el-menu-item>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-document"></i>导航五</template>
							<el-menu-item index="5-1">选项1</el-menu-item>
							<el-menu-item index="5-2">选项2</el-menu-item>
							<el-menu-item index="5-3">选项3</el-menu-item>
							<el-menu-item index="5-4">选项4</el-menu-item>
					</el-submenu>
				</el-menu>
			</aside>
			<section class=""></section>
		</el-col>
		<el-col :span="24" class="bottom"><bottom></bottom></el-col>
	</el-row>
</template>

<script>
	import top from './common/top.vue'
	import bottom from './common/bottom.vue'
	export default{
		data() {
			return {

			}	
		},
		components:{
			top,
			bottom
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
    	}
	}
</script>

<style scoped lang="scss">
	@import './static/css/base.scss';
	.container{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		.header{
			height: 60px;
			line-height: 60px;
			// background-color: hotpink;
		}
		.main{
			position: absolute;
			top:60px;
			bottom:40px;
			background-color: skyblue;
			display: flex;
			overflow: hidden;
			aside{
				// flex的全写顺序：flex-grow/flex-shrink/flex-basis
				flex: 0 0 200px;
				height: 100%;
				background-color: #EEF1F6;
			}
			section{
				flex: 1;
				overflow-y: scroll;
			}
		}
		.bottom{
			position: absolute;
			bottom: 0;
			height: 40px;
			// background-color: yellow;
		}
	}
</style>
