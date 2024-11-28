import Taro from '@tarojs/taro';

const apiUrl = '/api/v1/quotes/random';
const domainUrl = 'https://animechan.io';
const corsApi = '/cors-api'

const envVal = Taro.getEnv()
export const getInfo = () => {
    const url = (envVal === 'WEB' ? corsApi : domainUrl) + apiUrl
    return new Promise((resolve, reject) => {
        Taro.request({
            url,
            method: 'GET',
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}