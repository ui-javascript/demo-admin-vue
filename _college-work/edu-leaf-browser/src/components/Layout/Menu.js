/**
 * 导航菜单
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'
import { arrayToTree, queryArray } from '../../utils'
import pathToRegexp from 'path-to-regexp' // 路由/url生成


// 导航菜单
const Menus = ({ user, siderFold, darkTheme, location, handleClickNavMenu, navOpenKeys, changeOpenKeys, menu }) => {
  // 实际情况下应该根据查询到的JSON
  let resources

  if (user.username === 'stu') {
    resources = [1, 4, 5, 42, 52]
  } else if (user.username === 'tch') {
    resources = [1, 3, 4, 5, 31, 33, 43, 53]
  } else if (user.username === 'deptadmin') {
    resources = [1, 2, 3, 4, 5, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 41, 51]
  } else if (user.username === 'sysadmin') {
    resources = [1, 4, 6, 7, 44, 61, 62, 63, 71, 72, 73]
  } else {
    resources = [1, 2, 3, 4, 5, 6, 7, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 41, 42, 43, 44, 51, 52, 53, 54, 55, 61, 62, 63, 71, 72, 73]
  }

  // 生成树状
  const menuTree = arrayToTree(menu.filter(_ => _.mpid !== -1), 'id', 'mpid')
  // console.log(menuTree)
  const levelMap = {}

  // 递归生成菜单
  const getMenus = (menuTreeN, siderFoldN) => {
    return menuTreeN.map(item => {
      // 父级目录判断是否有子菜单
      if (item.children) {
        if (resources.indexOf(item.id) < 0) {
          return null
        }

        if (item.mpid) {
          levelMap[item.id] = item.mpid
        }

        return (
          <Menu.SubMenu
            key={item.id}
            title={<span>
              {item.icon && <Icon type={item.icon} />}
              {(!siderFoldN || menuTree.indexOf(item) < 0) && item.name}
            </span>}
          >
            {getMenus(item.children, siderFoldN)}
          </Menu.SubMenu>
        )
      }

      if (item.id !== 1 && (resources.indexOf(item.bpid) < 0 || resources.indexOf(item.id) < 0)) {
        return null
      }

      return (
        <Menu.Item key={item.id}>
          <Link to={item.router}>
            {item.icon && <Icon type={item.icon} />}
            {(!siderFoldN || menuTree.indexOf(item) < 0) && item.name}
          </Link>
        </Menu.Item>
      )
    })
  }
  const menuItems = getMenus(menuTree, siderFold)

  // 保持选中
  const getAncestorKeys = (key) => {
    let map = {}
    const getParent = (index) => {
      const result = [String(levelMap[index])]
      if (levelMap[result[0]]) {
        result.unshift(getParent(result[0])[0])
      }
      return result
    }
    for (let index in levelMap) {
      if ({}.hasOwnProperty.call(levelMap, index)) {
        map[index] = getParent(index)
      }
    }
    return map[key] || []
  }

  const onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => !(navOpenKeys.indexOf(key) > -1))
    const latestCloseKey = navOpenKeys.find(key => !(openKeys.indexOf(key) > -1))
    let nextOpenKeys = []
    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey)
    }
    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey)
    }
    changeOpenKeys(nextOpenKeys)
  }

  let menuProps = !siderFold ? {
    onOpenChange,
    openKeys: navOpenKeys,
  } : {}


  // 寻找选中路由
  let currentMenu
  let defaultSelectedKeys
  for (let item of menu) {
    if (item.router && pathToRegexp(item.router).exec(location.pathname)) {
      currentMenu = item
      break
    }
  }
  const getPathArray = (array, current, pid, id) => {
    let result = [String(current[id])]
    const getPath = (item) => {
      if (item && item[pid]) {
        result.unshift(String(item[pid]))
        getPath(queryArray(array, item[pid], id))
      }
    }
    getPath(current)
    return result
  }
  if (currentMenu) {
    defaultSelectedKeys = getPathArray(menu, currentMenu, 'mpid', 'id')
  }

  return (
    <Menu
      {...menuProps}
      mode={siderFold ? 'vertical' : 'inline'}
      theme={darkTheme ? 'dark' : 'light'}
      onClick={handleClickNavMenu}
      defaultSelectedKeys={defaultSelectedKeys}
    >
      {menuItems}
    </Menu>
  )
}

Menus.propTypes = {
  menu: PropTypes.array,
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  location: PropTypes.object,
  isNavbar: PropTypes.bool,
  handleClickNavMenu: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
  user: PropTypes.any,
}

export default Menus
