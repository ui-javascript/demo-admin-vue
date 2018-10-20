/** ************************************
 *  ko 组件工具类：通常在组件component的<template/>中使用
 *************************************** **/

const nodeType = {
  ELEMENT: 1,
  TEXT: 3,
  COMMENT: 8,
}

// ==========⬇ ko binding extends ⬇=========
/**
 * 通过 with: $app 将模板作用域作用到每个页面的 statistical-card.ko 组件环境中
 * 本质上就是对 with: $parents[$parents.length - 2] 的简写
 */
ko.bindingProvider.instance.preprocessNode = function (node) {
  if (node.nodeType === nodeType.COMMENT) {
    const match = /^\s*ko.+with:\s*\$app\s*/.test(node.nodeValue)
    if (match) {
      const n = document.createComment(node.nodeValue.replace(/with:\s*\$app*/, 'with: $parents[$parents.length - 2]'))
      node.parentNode.replaceChild(n, node)
      return [n]
    }
  }
}

/**
 * 获取 template node 的 name
 * @param node
 * @returns {string}
 */
const getKONodeName = (node) => {
  let nodeName = node.nodeName || ''
  if (node.nodeType === nodeType.ELEMENT) {
    nodeName = node.nodeName
  } else if (isKOVirtualComponentNode(node)) {
    // nodeValue like this:
    // ' ko component: { name: "k-tab-pane", params: { label: "配置管理", name: "second" } } '
    nodeName = /^\s*ko.+component:\s*\{\s*name\s*:\s*['"]([\w-_]+)?['"]/i.exec(node.nodeValue)[1]
  }
  return nodeName.toLowerCase()
}

/**
 * 是否是一个 KO virtual component node
 * @param node
 * @returns {boolean}
 */
const isKOVirtualComponentNode = (node) => {
  return node.nodeType === nodeType.COMMENT && /^\s*ko.+component:/.test(node.nodeValue)
}

const isKOVirtualNode = (node) => {
  return node.nodeType === nodeType.COMMENT && /^\s*ko.+/.test(node.nodeValue)
}

/**
 * 是否是 virtual template element 结束 node
 * @param node
 * @returns {boolean}
 */
const isKOVirtualNodeEnd = (node) => {
  return node.nodeType === nodeType.COMMENT && /^\s*\/ko\s*$/.test(node.nodeValue)
}

const isContextBindingNode = (node) => {
  return node.nodeType === nodeType.COMMENT && /^\s*ko.+with:.+$/.test(node.nodeValue)
}

const isSlotNode = (node) => {
  return node.nodeType === nodeType.COMMENT && /^\s*slot\s*:\s*/.test(node.nodeValue)
}
const isSlotNodeEnd = (node) => {
  return node.nodeType === nodeType.COMMENT && /^\s*\/slot\s*$/.test(node.nodeValue)
}
// ==========⬇ export functions ⬇=========

/**
 * 将 <!-- slot: 'foo' --><!-- /slot --> 获取指定 slotName 的 template nodes
 * @param componentTemplateNodes
 * @param slotName
 */
const getSlotNodes = (componentTemplateNodes, slotName) => {
  const nodes = []
  for (let i = 0; i < componentTemplateNodes.length; i++) {
    let node = componentTemplateNodes[i]
    if (nodes.length) {
      nodes.push(node)
      if (isSlotNodeEnd(node)) {
        return false
      }
      return false
    }

    if (isSlotNode(node)) {
      const _slotName = /slot:\s*["']([\w-_]+)?["']\s*/.exec(node.nodeValue)[1]
      if (_slotName === slotName) {
        nodes.push(node)
      }
    }
    return true
  }
  return nodes
}
/**
 * 获取指定 name 对应的 template nodes
 * @param componentTemplateNodes
 * @param name
 * @returns {Array}
 */
const getComponentNodes = (componentTemplateNodes, name) => {
  let nodes = []
  const commentNode = []
  let level = 0
  for (let i = 0; i < componentTemplateNodes.length; i++) {
    let node = componentTemplateNodes[i]
    if (commentNode.length) {
      commentNode.push(node)
      if (isKOVirtualNode(node)) {
        level++
      } else if (isKOVirtualNodeEnd(node)) {
        level--
        if (level === -1) {
          nodes = nodes.concat(commentNode)

          // reset
          level = 0
          commentNode.length = 0
        }
      }
      return nodes
    }
    if (name.toLowerCase() === getKONodeName(node)) {
      if (node.nodeType === nodeType.ELEMENT) {
        nodes.push(node)
      } else {
        /**
         * comment node should find matched end comment
         */
        commentNode.push(node)
      }
    }
  }
  return nodes
}

module.exports = {
  getComponentNodes,
  getSlotNodes
}
