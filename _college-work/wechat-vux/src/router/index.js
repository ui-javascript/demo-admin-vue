import Vue from 'vue'
import Router from 'vue-router'
import {HomePage, ExplorePage, SettingsPage} from '@/views'
import {PersonInfo, ChangeNickname, ChangeArea, ChangeAddress, AddAddress, MyAddress} from '@/views/settings'
import {ChatRoom} from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/explore',
      name: 'Explore',
      component: ExplorePage
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsPage
    },
    {
      path: '/settings/personinfo',
      name: 'PersonInfo',
      component: PersonInfo
    },
    {
      path: '/settings/changenickname',
      name: 'ChangeNickname',
      component: ChangeNickname
    },
    {
      path: '/settings/changearea',
      name: 'ChangeArea',
      component: ChangeArea
    },
    {
      path: '/settings/changeaddress',
      name: 'ChangeAddress',
      component: ChangeAddress
    },
    {
      path: '/settings/myaddress',
      name: 'MyAddress',
      component: MyAddress
    },
    {
      path: '/settings/addaddress',
      name: 'AddAddress',
      component: AddAddress
    },
    {
      path: '/home/chatroom',
      name: 'ChatRoom',
      component: ChatRoom
    },
    {
      path: '*',
      name: 'NotFound',
      component: HomePage
    }
  ]
})
