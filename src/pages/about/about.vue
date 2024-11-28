<template>
    <view class="about">
        <view class="button-warp">
            <nut-button @click="handleClick" type="primary">获取信息</nut-button>
        </view>
        <view class="text-warp">

            <text class="about-title">
                {{ content }}
            </text>
        </view>
        <view>
            <Counter />
        </view>
    </view>
</template>
<script>
import { getInfo } from '../../services';
import './about.scss'
import Counter from '../../components/Counter.vue'

export default {
    data() {
        return {
            content: ''
        }
    },
    components: {
        Counter
    },
    methods: {
        handleClick() {
            // getInfo().then(res => {
            //     console.log(res)
            //     this.content = res.data.content
            // })
        }
    }
}
</script>
<style lang="scss" >
.about {
    color: red;
}
</style>