import Taro from '@tarojs/taro';

const baseUrl = 'https://animechan.io/api/v1/quotes/random'
export const getInfo = () => {
    return new Promise((resolve, reject) => {
        Taro.request({
            url: baseUrl,
            method: 'GET',
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}