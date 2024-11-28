<template>
  <view>
    <text class="title">{{ counter.count }}</text>
    <view class="button" @tap="onAdd">ADD</view>
  </view>
</template>

<script>
import './counter.scss'
import { useCounterStore } from '../stores/counter'

export default {
  setup() {
    const counter = useCounterStore()

    const onAdd = () => {
      counter.increment()
    }

    return {
      counter,
      onAdd
    }
  }
}
</script>

