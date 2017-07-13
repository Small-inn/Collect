<template>
	<div class="left">
		<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
		<el-submenu index="1">
			<template slot="title">导航一</template>
			<el-menu-item index="1-1">选项1</el-menu-item>
			<el-menu-item index="1-2">选项2</el-menu-item>
			<el-menu-item index="1-3">选项3</el-menu-item>
			<el-menu-item index="1-4">选项4</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
			<template slot="title">导航二</template>
			<el-menu-item index="2-1">选项1</el-menu-item>
			<el-menu-item index="2-2">选项2</el-menu-item>
			<el-menu-item index="2-3">选项3</el-menu-item>
			<el-menu-item index="2-4">选项4</el-menu-item>
	  </el-submenu>
      <el-submenu index="3">
		  	<template slot="title">导航三</template>
			<el-menu-item index="3-1">选项1</el-menu-item>
			<el-menu-item index="3-2">选项2</el-menu-item>
			<el-menu-item index="3-3">选项3</el-menu-item>
			<el-menu-item index="3-4">选项4</el-menu-item>
	  </el-submenu>
    </el-menu>
  </el-col>
  </div>
</template>

<script>
	export default {
	
		data() {
	
			return {
	
	
	
			}
	
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
	.left {
		width:150px; 
		height:100%;
		min-width: 150px;
		background:#F7F9FA;
		text-align: left;
		font-size: 14px;
	}
</style>