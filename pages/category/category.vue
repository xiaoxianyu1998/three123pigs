<template>
	<view>
		<u-search class="search" 
		placeholder="日照香炉生紫烟" 
		v-model="keyword" 
		:clearabled="true" 
		border-color="orange"
		bg-color="white"></u-search>
		
		<view class="contentContainer">
			<scroll-view scroll-y="true" class="leftNavScroll">
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				<view class="leftNavItem">1111</view>
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:"阿巴阿巴"
			};
		}
	}
</script>

<style lang="scss">
	.search{
		padding: 20upx;
	}
	.contentContainer{
		width: 100%;
		margin-top: 20rpx;
	}
	.leftNavScroll{
		width: 20%;
		background-color: pink;
		padding: 10rpx;
	}
	.leftNavScroll .leftNavItem{
		padding: 8rpx;
		
	}
</style>
