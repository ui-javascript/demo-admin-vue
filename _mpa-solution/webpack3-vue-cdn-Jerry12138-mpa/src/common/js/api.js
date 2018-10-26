/*
 * @Author: Jerry.chenshisong
 * @Date: 2018-09-27 15:08:57
 * @Last Modified by: Jerry.chenshisong
 * @Last Modified time: 2018-09-29 14:22:04
 * api接口
 */

import axios from './request'

export const help = params => {
  return axios.post('/help', params)
  // return Promise.resolve(true)
}

export const getHelpOtherList = params => {
  return axios.post('/getHelpOtherList', params)
	// 帮助别人的列表，可以放到本地存储中，在进入给别人助力时不用再发起请求，帮助过别人后加到数组中
	// 自己的信息，在帮助别人和发起助力时需要自己的信息
  // const userInfo = {
  //   id: 'bcsugjnbuiv1hvt3omcg',
  //   avatar: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epLF0kzHIEeoTia4icafayic9S1UwwRjh4O0b2W6pTXrUpnd7da31FEpIVvupkcS6tm6D71qcpLuxpTw/132'
  // }
  // const helpOtherList = [{
  //   id: 'bcsugjnbuiv1hvt3omcr',
  //   avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIH2ichgBK4uMK4QpicianJjpd0DLtnEhPZq38iaAZkC8d2RibzjjLc9HY58ic8ym8jictyEtqfRcWoBmL6Q/132'
  // }, {
  //   id: 'bcsugjnbuiv1hvt3omvn',
  //   avatar: 'https://wx.qlogo.cn/mmopen/vi_32/q021alznpB5fzHAVBkqtz2a2e7WTx5NicsTq1VqA4ACPBpayec0G7kjsQMn6y0bECSwKOmibwbXvfTUXegnBdAibw/132'
  // }]
  // const basic = {
  // // 这个活动的id，防止多个助力活动同时发起，本地存储混乱的问题
  //   id: 'bcsugjnbuiv1hvt3omer',
  // // 结束时间，这个时间一般是固定的，也可以放到本地存储，不需要多次请求，过了时间可以clear这个
  //   endTime: '2018.9.30',
  // // 需要助力的人数
  //   needFriendsNumber: 5,
  // // 直接购买的价格
  //   directBuyPrice: 19.9
  // }
  // return Promise.resolve({ userInfo, helpOtherList, ...basic })
}

export const getActiveInfo = params => {
  return axios.post('/getActiveInfo', params)

  // const info = {
  //   // 这个活动的id，防止多个助力活动同时发起，本地存储混乱的问题
  //   id: 'bcsugjnbuiv1hvt3omer',
  //   // 结束时间，这个时间一般是固定的，也可以放到本地存储，不需要多次请求，过了时间可以clear这个
  //   endTime: '2018.9.30',
  //   // 需要助力的人数
  //   needFriendsNumber: 5,
  //   // 直接购买的价格
  //   directBuyPrice: 19.9,
  //   // 自己的信息，在帮助别人和发起助力时需要自己的信息
  //   userInfo: {
  //     id: 'bcsugjnbuiv1hvt3omcg',
  //     avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIH2ichgBK4uMK4QpicianJjpd0DLtnEhPZq38iaAZkC8d2RibzjjLc9HY58ic8ym8jictyEtqfRcWoBmL6Q/132'
  //   },
  //   // 帮助过我的人列表，显示帮助我的页面需要用，根据需求看，这个列表人数不会太多，也可以放到本地存储
  //   helpMeList: [
  //     {
  //       id: 'bcsugjnbuiv1hvt3omkl',
  //       avatar: 'https://wx.qlogo.cn/mmopen/vi_32/q021alznpB5fzHAVBkqtz2a2e7WTx5NicsTq1VqA4ACPBpayec0G7kjsQMn6y0bECSwKOmibwbXvfTUXegnBdAibw/132'
  //     }, {
  //       id: 'bcsugjnbuiv1hvt3omer',
  //       avatar: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epLF0kzHIEeoTia4icafayic9S1UwwRjh4O0b2W6pTXrUpnd7da31FEpIVvupkcS6tm6D71qcpLuxpTw/132'
  //     }
  //   ]
  // }
  // return Promise.resolve(info)
}
