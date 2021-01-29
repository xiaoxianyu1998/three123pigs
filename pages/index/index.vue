<template>
	<view class="content">
		<!-- 头部定位以及搜索框 -->
		<view class="header">
			<text>奥林匹克花园</text>
			<u-icon class="local" name="arrow-down" color="#333" size="28"></u-icon>
			<u-search class="search" placeholder="金龙鱼油99元2桶" v-model="keyword"></u-search>
		</view>

		<!-- 轮播图 -->
		<view class="wrap"><u-swiper :list="pictures"></u-swiper></view>

		<!-- 产品导航 -->
		<scroll-view scroll-x="true" class="navScroll" enable-flex v-if="result">
			<view class="navItem" :class="{ activeClass: navIndex === 0 }" @click="changeNav(0, 0)">好货秒杀</view>
			<view
				class="navItem"
				:class="{ activeClass: navIndex === index + 1 }"
				@click="changeNav(index + 1, navItem.L1Id)"
				v-for="(navItem, index) in indexData.kingKongModule.kingKongList"
				:key="navItem.L1Id"
			>
				{{ navItem.text }}
			</view>
		</scroll-view>

		<!-- 产品列表 -->
		<div class="proList">
			<div class="proItem" v-for="(proItem, index) in result" :key="index">
				<image class="proBigImg" :src="proItem.images.small"></image>
				<scroll-view scroll-x class="proScroll">
					<view class="scrollItem" v-for="(item, index) in proItem.itemList" :key="item.id">
						<image :src="item.primaryPicUrl"></image>
						<view>{{ item.name }}</view>
					</view>
				</scroll-view>
			</div>
		</div>

		<!-- 底部导航栏 -->
		<u-tabbar v-model="current" :list="list" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
import request from '../../utils/request.js';
export default {
	data() {
		return {
			//搜索关键字
			keyword: '',
			//轮播图数据
			pictures: [
				{
					image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}
			],
			//底部导航栏数据
			list: [
				{
					iconPath: 'home',
					selectedIconPath: 'home-fill',
					text: '首页',
					customIcon: false
				},
				{
					iconPath: 'grid',
					selectedIconPath: 'grid-fill',
					text: '分类',
					customIcon: false
				},
				{
					iconPath: 'shopping-cart',
					selectedIconPath: 'shopping-cart-fill',
					text: '购物车',
					count: 2,
					customIcon: false
				},
				{
					iconPath: 'account',
					selectedIconPath: 'account-fill',
					text: '我的',
					isDot: false,
					customIcon: false
				}
			],
			current: 0,
			//产品列表数据
			cateList: []
		};
	},
	methods: {
		//发送请求 获取产品列表数据
		async getCateListData() {
			let cateListData = await request('/production');
			console.log(cateListData);
			this.cateList = await cateListData;
		}
	},
	mounted() {
		//调用函数 初始化页面
		this.getCateListData();
	}
};
</script>

<style lang="scss">
/* 头部 */
.header {
	margin-left: 20rpx;
}
.header text {
	margin-bottom: 30rpx;
}
.local {
	margin-left: 14rpx;
}

/* 轮播图 */
.wrap {
	margin: 30rpx;
}
</style>
