<template>
	<view class="content">
		<!-- 头部 -->
		<view class="header">
			<u-icon name="map-fill" color="#333" size="28"></u-icon>
			<text>上海大江商厦</text>
			<u-search class="search" placeholder="金龙鱼油99元2桶" v-model="keyword"></u-search>
		</view>

		<!-- 导航 -->
		<view class="navigation">
			<text>年货大街</text>
			<text>多点超市</text>
			<text>物美商城</text>
		</view>

		<!-- 轮播图 -->
		<view class="wrap"><u-swiper :list="pictures"></u-swiper></view>

		<!-- 底部导航栏 -->
		<u-tabbar v-model="current" :list="list" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
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
			current: 0
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="scss">
/* 头部 */
.header {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.search {
	margin-left: 80rpx;
}

/* 导航 */
.navigation{
	
}

/* 轮播图 */
.wrap {
	padding: 40rpx;
}
</style>
