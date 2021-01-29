<template>
	<view>
		<view class="header">
			<u-search class="search"
			placeholder="日照香炉生紫烟" 
			v-model="keyword" 
			:clearabled="true" 
			border-color="orange"
			bg-color="white"></u-search>
		</view>
		
		<view class="contentContainer">
			<view class="leftContainer">
				<scroll-view class="navScroll" scroll-y="true" show-scrollbar="false">
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
					<view class="navItem">1111</view>
				</scroll-view>
			</view>
			<view class="rightContainer">
				<view class="rightHeader">
					<scroll-view class="navScroll" enable-flex scroll-x show-scrollbar="false">
						<view class="navItem">全部分类</view>
						<view class="navItem">222</view>
						<view class="navItem">222</view>
						<view class="navItem">222</view>
						<view class="navItem">222</view>
						<view class="navItem">222</view>
						<view class="navItem">222</view>
						<view class="navItem">222</view>
						<view class="navItem">222</view>
					</scroll-view>
				</view>

				<view class="rightContent">
					<scroll-view class="navScroll" scroll-y="true" >
						<view class="rightDropDown">
							<u-dropdown class="dropDown" menu-icon="arrow-down"  menu-icon-size="20" title-size="26" >
								<u-dropdown-item class="item" v-model="value1" title="配送时效" :options="options1"></u-dropdown-item>
								<u-dropdown-item class="item" v-model="value2" title="默认排序" :options="options2"></u-dropdown-item>
							</u-dropdown>
							<!-- <sl-filter :themeColor="themeColor" :menuList="menuList" @result="result"></sl-filter> -->
							<view class="filter" @click="show = true">打开</view>
							<u-popup v-model="show" mode="right" height="100%" width="90%">
								<sl-filter/>
							</u-popup>
						</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
						<view class="navItem">2222</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import slFilter from '../../components/slFilter/slFilter.vue'; 
	export default {
		components:{
			"sl-filter":slFilter
		},
		data() {
			return {
				show:false,
				data:"阿巴阿巴",
				value1:1,
				value2:1,
				options1:[
					{
						label: '全部时效',
						value: 1
					},
					{
						label: '今日达',
						value: 2
					},
					{
						label: '品牌直发',
						value: 3
					}
				],
				options2:[
					{
						label: '默认排序',
						value: 1
					},
					{
						label: '销量排序',
						value: 2
					},
					{
						label: '价格从高到低',
						value: 3
					},
					{
						label: '价格从低到高',
						value: 4
					}
				],
				// menuList:[
				// 	{
				// 		title:"title1",
				// 		detailTitle:"子title1",
				// 		isMutiple:true,
				// 		key:"key_1",
				// 		detailList:[
				// 			{
				// 				title:"不限",
				// 				value:" "
				// 			},
				// 			{
				// 				title:"001",
				// 				value:"val_01"
				// 			},
				// 			{
				// 				title:"002",
				// 				value:"val_02"
				// 			},
				// 		]
				// 	}
				// ],
				// themeColor:"orange",
			};
		}
	}
</script>

<style lang="scss">
	.header{
		display: flex;
		padding:20upx;
	}
	.header .search{
		flex: 1;
	}
	.contentContainer{
		display: flex;
		height: calc(100vh - 104upx);
	}
	.leftContainer{
		width: 20%;
		background-color: pink;
	}
	.leftContainer .navScroll{
		height: 100%;
	}
	.leftContainer .navScroll .navItem{
		position: relative;
		font-size: 26upx;
		text-align: center;
		line-height: 80upx;
	}
	.rightContainer{
		width: 80%;
	}
	.rightContainer .rightHeader{
		height:60upx;
		background-color: skyblue;
	}
	.rightContainer .rightHeader .navScroll{
		display: flex;
		white-space: nowrap;
	}
	.rightContainer .rightHeader .navScroll .navItem{
			display: inline-block;
			margin: 8upx 10upx;
			font-size: 28upx;
			padding: 14upx;
		    height: 44upx;
			line-height: 24upx;
			text-align: center;
			border-radius: 20upx;
			background-color: #C0C0C0;
		    box-sizing: border-box;
	}
	.rightDropDown{
		width: 100%;
		display: flex;
		position: relative;
		height: 60upx;
		margin-top: 10upx;
		background-color: pink;
	}
	.rightDropDown .dropDown{
		width: 100%;
		height: 100%;
	}
	.rightDropDown .dropDown .item{
		display: flex;
		height: 100%;
		line-height: 40upx;
	}
	.rightDropDown .filter{
		width: 30%;
		height: 40upx;
		// position: absolute;
		// right: 20upx;
		// top: 8upx;
		display: inline-block;
		font-size: 26upx;
		text-align: center;
		line-height: 60upx;
	}
	.rightContent{
		background-color: red;
		
		height: calc(100vh - 136upx);
	}
	.rightContent .navScroll{
		// display: flex;
		height: 100%;
	}
	.rightContent .navScroll .navItem{
		margin: 10upx;
		background-color: pink;
	}
</style>
