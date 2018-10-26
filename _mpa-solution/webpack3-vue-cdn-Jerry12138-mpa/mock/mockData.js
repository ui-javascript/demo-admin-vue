module.exports = {
  help: true,
  helpOtherInfo: {
    // 这个活动的id，防止多个助力活动同时发起，本地存储混乱的问题
    id: 'bcsugjnbuiv1hvt3omer',
  // 结束时间，这个时间一般是固定的，也可以放到本地存储，不需要多次请求，过了时间可以clear这个
    endTime: '2018.10.1',
  // 需要助力的人数
    needFriendsNumber: 5,

  // 直接购买的价格
    directBuyPrice: 19.9,
    userInfo: {
      id: 'bcsugjnbuiv1hvt3omcg',
      avatar: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epLF0kzHIEeoTia4icafayic9S1UwwRjh4O0b2W6pTXrUpnd7da31FEpIVvupkcS6tm6D71qcpLuxpTw/132'
    },
    helpOtherList: [
      {
        id: 'bcsugjnbuiv1hvt3omcr',
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIH2ichgBK4uMK4QpicianJjpd0DLtnEhPZq38iaAZkC8d2RibzjjLc9HY58ic8ym8jictyEtqfRcWoBmL6Q/132'
      }, {
        id: 'bcsugjnbuiv1hvt3omvn',
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/q021alznpB5fzHAVBkqtz2a2e7WTx5NicsTq1VqA4ACPBpayec0G7kjsQMn6y0bECSwKOmibwbXvfTUXegnBdAibw/132'
      }
    ]
  },
  helpMeInfo: {
    id: 'bcsugjnbuiv1hvt3omer',
      // 结束时间，这个时间一般是固定的，也可以放到本地存储，不需要多次请求，过了时间可以clear这个
    endTime: '2018.10.1',
      // 需要助力的人数
    needFriendsNumber: 5,
      // 直接购买的价格
    directBuyPrice: 19.9,
      // 自己的信息，在帮助别人和发起助力时需要自己的信息
    userInfo: {
      id: 'bcsugjnbuiv1hvt3omcg',
      avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIH2ichgBK4uMK4QpicianJjpd0DLtnEhPZq38iaAZkC8d2RibzjjLc9HY58ic8ym8jictyEtqfRcWoBmL6Q/132'
    },
      // 帮助过我的人列表，显示帮助我的页面需要用，根据需求看，这个列表人数不会太多，也可以放到本地存储
    helpMeList: [
      {
        id: 'bcsugjnbuiv1hvt3omkl',
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/q021alznpB5fzHAVBkqtz2a2e7WTx5NicsTq1VqA4ACPBpayec0G7kjsQMn6y0bECSwKOmibwbXvfTUXegnBdAibw/132'
      }, {
        id: 'bcsugjnbuiv1hvt3omer',
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epLF0kzHIEeoTia4icafayic9S1UwwRjh4O0b2W6pTXrUpnd7da31FEpIVvupkcS6tm6D71qcpLuxpTw/132'
      }
    ]
  }
}

