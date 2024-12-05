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
        <view>
            <button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
                <image class="avatar" :src="avatarUrl"></image>
            </button>
            <label class="nickname-label" for="2" key="2">昵称
                <input type="nickname" id="2" class="weui-input" v-model="nickName" placeholder="请输入昵称" />
            </label>

        </view>
    </view>
</template>
<script>
import { getInfo } from '../../services';
import Counter from '../../components/Counter.vue'

export default {
    data() {
        return {
            content: '',
            nickName: "",
            avatarUrl: ""
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
        },
        onChooseAvatar(e) {
            console.log(e)
            this.avatarUrl = e.detail.avatarUrl
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


    .avatar-wrapper {
        padding: 0;
        width: 56px !important;
        border-radius: 8px;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .avatar {
        display: block;
        width: 56px;
        height: 56px;
    }

    .container {
        display: flex;
    }

    .nickname-label {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
}
</style>