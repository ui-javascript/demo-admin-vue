/**
 * ie版本号
 */

/**
 * 从userAgent中ie版本号的匹配信息
 *
 * @type {Array}
 */
const ieVersionMatch = typeof navigator !== 'undefined' && navigator.userAgent.match(/msie\s*([0-9]+)/i)

/**
 * ie版本号，非ie时为0
 *
 * @type {number}
 */
const ie = ieVersionMatch ? ieVersionMatch[1] - 0 : 0

exports = module.exports = ie
