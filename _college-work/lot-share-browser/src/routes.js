import Vue from 'vue'
import Router from 'vue-router'

// import axios from 'axios';
// Vue.prototype.$axios = axios;

import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'

import Car from './views/home/analyse/car.vue'
import Income from './views/home/analyse/income.vue'
import Order from './views/home/analyse/order.vue'
import Space from './views/home/analyse/space.vue'
import Yourself from './views/home/analyse/yourself.vue'

import OwnerInfo from './views/home/manage/ownerinfo.vue'
import SpaceInfo from './views/home/manage/spaceinfo.vue'
import Verification from './views/home/manage/verification.vue'

import Chat from './views/home/support/chat.vue'
import Message from './views/home/support/message.vue'
import News from './views/home/support/news.vue'

import Account from './views/home/settings/account.vue'
import Community from './views/home/settings/community.vue'
import Person from './views/home/settings/person.vue'

import AllIncome from './views/platform/analyse/allincome.vue'
import AllOrder from './views/platform/analyse/allorder.vue'

import AllCommunity from './views/platform/info/allcommunity.vue'
import AllOwner from './views/platform/info/allowner.vue'
import AllRenter from './views/platform/info/allrenter.vue'
import AllSpace from './views/platform/info/allspace.vue'

import Resource from './views/platform/rbac/resource.vue'
import Role from './views/platform/rbac/role.vue'
import User from './views/platform/rbac/user.vue'

import Arg from './views/platform/sys/arg.vue'
import Log from './views/platform/sys/log.vue'
import Timetask from './views/platform/sys/timetask.vue'

Vue.use(Router)

let routes = [{
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  // { path: '/', component: Main },
  {
    path: '/home',
    component: Home,
    name: '物业管理',
    iconCls: 'fa fa-building', //图标样式class
    children: [
      // { path: '/', component: Main, name: '主页', hidden: true },
      {
        path: '/home/manage/spaceinfo',
        component: SpaceInfo,
        name: '车位管理'
      },
      {
        path: '/home/manage/ownerinfo',
        component: OwnerInfo,
        name: '业主信息'
      },
      {
        path: '/home/manage/verification',
        component: Verification,
        name: '车位审核'
      },
    ]
  },
  {
    path: '/home',
    component: Home,
    name: '统计分析',
    iconCls: 'fa fa-bar-chart',
    children: [{
        path: '/home/analyse/income',
        component: Income,
        name: '收益统计'
      },
      {
        path: '/home/analyse/order',
        component: Order,
        name: '订单统计'
      },
      {
        path: '/home/analyse/space',
        component: Space,
        name: '车位统计'
      },
      {
        path: '/home/analyse/car',
        component: Car,
        name: '车辆统计'
      },
      {
        path: '/home/analyse/yourself',
        component: Yourself,
        name: '自定义统计'
      }
    ]
  },
  {
    path: '/home',
    component: Home,
    name: '客服支持',
    iconCls: 'fa fa-comments',
    // leaf: true,//只有一个节点
    children: [{
        path: '/home/support/message',
        component: Message,
        name: '讯息列表'
      },
      {
        path: '/home/support/news',
        component: News,
        name: '讯息发布'
      },
      {
        path: '/home/support/chat',
        component: Chat,
        name: '社区反馈'
      }
    ]
  },
  {
    path: '/home',
    component: Home,
    name: '安全设置',
    iconCls: 'el-icon-setting',
    children: [{
        path: '/home/settings/account',
        component: Account,
        name: '账号设置'
      },
      {
        path: '/home/settings/community',
        component: Community,
        name: '社区信息'
      },
      {
        path: '/home/settings/person',
        component: Person,
        name: '物业负责人信息'
      }
    ]
  },
  {
    path: '/platform',
    component: Home,
    name: '系统管理',
    iconCls: 'fa fa-wrench',
    children: [{
        path: '/platform/sys/arg',
        component: Arg,
        name: '系统参数'
      },
      {
        path: '/platform/sys/log',
        component: Log,
        name: '系统日志'
      },
      {
        path: '/platform/sys/timetask',
        component: Timetask,
        name: '定时任务'
      }
    ]
  },
  {
    path: '/platform',
    component: Home,
    name: '信息管理',
    iconCls: 'fa fa-file-text',
    children: [{
        path: '/platform/info/community',
        component: AllCommunity,
        name: '小区档案'
      },
      {
        path: '/platform/info/owner',
        component: AllOwner,
        name: '业主档案'
      },
      {
        path: '/platform/info/renter',
        component: AllRenter,
        name: '租客档案'
      },
      {
        path: '/platform/info/space',
        component: AllSpace,
        name: '车位档案'
      }
    ]
  },
  {
    path: '/platform',
    component: Home,
    name: 'RBAC',
    iconCls: 'fa fa-address-card-o',
    children: [{
        path: '/platform/rbac/resource',
        component: Resource,
        name: '权限管理'
      },
      {
        path: '/platform/rbac/role',
        component: Role,
        name: '角色管理'
      },
      {
        path: '/platform/rbac/user',
        component: User,
        name: '用户管理'
      }
    ]
  },
  {
    path: '/platform',
    component: Home,
    name: '平台统计',
    iconCls: 'fa fa-bar-chart',
    children: [{
        path: '/platform/analyse/order',
        component: AllIncome,
        name: '收益总览'
      },
      {
        path: '/platform/analyse/income',
        component: AllOrder,
        name: '订单总览'
      }
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: {
      path: '/404'
    }
  }
];

export default routes;
