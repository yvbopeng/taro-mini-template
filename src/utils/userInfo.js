import Taro from '@tarojs/taro'

export const getUserInfo = () => {

    const scopeUserInfo = 'scope.userInfo';

    function info(resolve) {
        Taro.getUserInfo({
            success: function (resUser) {
                resolve(resUser)
            }
        })
    }

    return new Promise((resolve, reject) => {
        console.log('Taro.getEnv()', Taro.getEnv())
        if (Taro.getEnv() !== 'WEAPP') {
            reject('当前环境非微信小程序, 无法获取用户信息');
            return;
        }

        Taro.getSetting({
            success: function (res) {
                console.log('Taro.getSetting()', res)
                if (!res.authSetting[scopeUserInfo]) {
                    Taro.authorize({
                        scope: scopeUserInfo,
                        success: function () {
                            info(resolve)
                        },
                        fail: function (err) {
                            console.log('授权失败')
                            reject(err)
                        }
                    })
                } else {
                    info(resolve)
                }
            },
            fail: function (err) {
                console.log('获取设置失败', err)
                reject(err)
            }
        })

    })
}