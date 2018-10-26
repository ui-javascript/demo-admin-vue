const activeRules = {
  detail: [
    '每位用户同一时间内只能开1个助力团，同一个商品每位用户只能通过助力团免费获得1次',
    '开团后需分享给微信好友，召唤好友参团',
    '只有新注册用户才可助力成功，每个用户只能助力1次',
    '助力商品有数量限制，抢先凑齐人数的团长先得。优先凑齐人数的团长会获得直播免费观看资格。',
    '助力团商品抢光/助力团结束/不是新用户/自我助力等都不算助力成功，我们会告知您失败原因，如商品数量已抢光，已开的助力团也无法助力成功。'
  ],
  weight: /免费获得1次|分享给微信好友|新注册用户|助力1次|直播免费观看/g
}

export default {
  activeRules,
  btn: {
    hasPeopleAndEnd: {
      height: 42,
      bgColor: 'linear-gradient(to top, #E6042C, #F3536F)',
      borderColor: '#fff',
      detail: [{
        text: '去看看其他亲子福利',
        size: 18,
        color: '#fff'
      }]
    },
    noPeopleAndStart: {
      height: 48,
      detail: [{
        text: '9.9元直接购买',
        size: 21,
        bold: true,
        color: '#EA274A'
      }]
    },
    hasPeopleButNotSuccess: {
      continue: {
        height: 42,
        bgColor: 'linear-gradient(to top, #E6042C, #F3536F)',
        borderColor: '#fff',
        detail: [{
          text: '继续邀请好友帮忙助力',
          size: 18,
          color: '#fff'
        }]
      },
      direct: {
        height: 42,
        borderColor: 'rgba(236,41,76,1)',
        detail: [{
          text: '不差钱，想直接购买',
          size: 18,
          color: '#EC294C'
        }]
      }
    }
  }
}
