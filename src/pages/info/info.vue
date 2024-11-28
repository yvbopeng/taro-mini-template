<template>
    <view>
        <text>{{ countStore.count }}</text>
    </view>
</template>
<script>
import { ref } from 'vue';
import { useCounterStore } from '../../stores/counter';

export default {
  data() {
    return {
    }
  },
  setup() {
    const message = ref("");
    const countStore = useCounterStore()

    console.log(countStore.count)
    // console.log(countStore.getCounter())


    return {
      message,
      countStore
    }
  }
}
</script>