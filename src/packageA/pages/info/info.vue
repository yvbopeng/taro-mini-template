<template>
    <view>
        <text>{{ countStore.count }}</text>
    </view>
</template>
<script>
import { ref } from 'vue';
import { useCounterStore } from '../../../stores/counter';

export default {
  data() {
    return {
    }
  },
  setup() {
    const countStore = useCounterStore()
    
    console.log(process.env.TARO_APP_ENV_NAME)

    return {
      countStore
    }
  }
}
</script>