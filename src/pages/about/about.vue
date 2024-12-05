<template>
    <view class="about">
        <view class="button-warp">
            <nut-button @click="handleClick" type="primary">获取信息</nut-button>
        </view>
        <view class="text-warp">

            <text class="about-title" :user-select="true">
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
            getInfo().then(res => {
                console.log(res)
                this.content = res.data.content
            })
        }
    }
}
</script>
<style lang="scss">
.about {
    width: 100%;
    height: 100%;
    .button-warp {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text-warp {
        padding-top: 30px;
        text {
            width: 100%;
        }
        .about-title {
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }

    }
}
</style>