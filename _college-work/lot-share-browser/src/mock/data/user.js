import Mock from 'mockjs';

// 登录账号
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    avatar: 'https://avatars0.githubusercontent.com/u/16240829?v=3&s=460',
    name: '朝阳小区'
  }
];

// 填充假数据
const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
