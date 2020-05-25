<!-- 阴影边框
box-shadow: #f1fefb 1rpx 1rpx 10rpx 5rpx; -->

<!-- 
flexflexflexflexflexflexflexflex
display: flex;
align-items: center;
justify-content: space-between; -->

<!-- 竖向
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column; -->

<!-- 换行
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
flex-wrap: wrap; -->

<!-- 
换行隐藏
overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical; -->

<!-- 
居右
flex-direction:row;
justify-content:flex-end
vertical-align:middle; -->

<!-- 
自动换行
word-break:break-all; -->

<!-- 单行文本溢出
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap; -->

<!-- 多行文本溢出 -->
<!-- -webkit-line-clamp: 2;
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis; -->



<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss"></style>
