/**
 * jQuery global custom event plugin (gevent)
 * 利用 jQuery 对象的事件 API 创建一个全局事件管理工具
 */
$.gevent = (function () {
  const $customSubMap = {}

  /**
   * 发布（广播）事件
   * Usage:
   *  $.gevent.publish(eventName, eventData)
   *
   * eventName - global event name
   * eventData - Optional data to be passed as argument(s) to subscribed functions after the event object.
   *             Provide an array for multiple arguments
   */
  const publishEvent = function () {
    const argList = [].slice.call(arguments, 0)
    const argCount = argList.length
    if (argCount === 0) {
      return false
    }

    const eventName = argList.shift()
    const eventObj = $customSubMap[eventName]

    if (!eventObj) {
      return false
    }

    let dataList
    if (argCount > 1) {
      const data = argList.shift()
      dataList = $.isArray(data) ? data : [data]
    } else {
      dataList = []
    }

    eventObj.trigger(eventName, dataList)
    return true
  }

  /**
   * 订阅（注册）事件
   * Usage:
   *  $.gevent.subscribe($collection, eventName, onMsgReceive)
   * @param $collection - jquery collection on which to bind event
   * @param eventName - global event name
   * @param fn - function to bound to event on the collection
   */
  const subscribeEvent = function ($collection, eventName, fn) {
    $collection.on(eventName, fn)

    if ($customSubMap[eventName]) {
      $customSubMap[eventName] = $customSubMap[eventName].add($collection)
    } else {
      $customSubMap[eventName] = $collection
    }
  }

  /**
   * 取消订阅
   * @param $collection - jquery collection on which to bind event
   * @param eventName - global event name
   */
  const unsubscribeEvent = function ($collection, eventName) {
    if (!$customSubMap[eventName]) {
      return false
    }

    $customSubMap[eventName] = $customSubMap[eventName].not($collection)

    if ($customSubMap[eventName].length === 0) {
      delete $customSubMap[eventName]
    }

    return true
  }

  return {
    publish: publishEvent,
    subscribe: subscribeEvent,
    unsubscribe: unsubscribeEvent
  }
}())
