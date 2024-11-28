<template>
  <view class="demo">
    <view>
      欢迎使用 NutUI 开发 Taro 多端项目 <Dongdong />
    </view>
    <view>
    </view>
    <view>
      <button type="primary" @click="goInfoPage">信息页面</button>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { Dongdong } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';




function goInfoPage() {
  Taro.navigateTo({
    url: '/pages/info/info'
  })
}

</script>

<style scoped>
.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>