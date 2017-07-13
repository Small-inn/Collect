<template>
	<div id="app">
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>


<script>
	export default {
		components:{

		}
	}
</script>

<style scoped lang="scss">
	.fade-enter-active,.fade-leave-active{
		transition: all .3s ease;
	}
	.fade-enter,.fade-leave-active{
		opacity: 0;
	}
</style>
