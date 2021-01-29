<template>
	<view class="container">
		<view class="header">筛 选</view>
		<view class="commend">推荐品牌</view>
		<view class="categorys">
			<view class="item">111</view>
			<view class="item">111</view>
			<view class="item">111</view>
			<view class="item">111</view>
			<view class="item">111</view>
			<view class="item">111</view>
			<view class="item">111</view>
		</view>
		<view class="footer">
			<view class="item cancel">重置</view>
			<view class="item confirm">确定</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.container{
		position: relative;
		height: 100%;
		width: 100%;
	}
	.header{
		font-size: 40upx;
		font-weight: bold;
		height: 80upx;
		text-align: center;
		line-height: 80upx;
		background-color: pink;
	}
	.commend{
		font-size: 30upx;
		font-weight: bold;
		height: 60upx;
		line-height: 60upx;
		background-color: skyblue;
		padding:0 10upx;
	}
	.categorys{
		width: 100%;
		// height: 613upx;
		margin-top: 20upx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		// align-items: center;
	}
	.categorys .item{
		width: 30%;
		height: 60upx;
		background-color: #999999;
		padding: 10upx;
		margin: 8upx;
		font-size: 26upx ;
		line-height: 40upx;
		text-align: center;
		box-sizing: border-box;
		border-radius: 50upx;
	}
	.footer{
		width: 100%;
		display: flex;
		white-space: nowrap;
		position: absolute;
		bottom: 10%;
		left: 0;
	}
	.footer .item{
		width: 50%;
		margin: 20upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		border-radius: 40upx;
		border: 2upx solid #333;
	}

</style>
