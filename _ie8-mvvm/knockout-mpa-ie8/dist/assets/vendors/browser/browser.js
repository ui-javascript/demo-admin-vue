/**
 * copy from https://github.com/gabceb/jquery-browser-plugin
 * Get current browser info
 *
 * How to use?
 * import browser from 'utils/browser'
 * if(browser.ie && browser.versionNumber <= 6) {
 *  alert('Hello China')
 * }
 */

/* eslint-disable */
function uaMatch(ua) {
  // If an UA is not provided, default to the current browser UA.
  if (ua === undefined) {
    ua = window.navigator.userAgent;
  }
  ua = ua.toLowerCase();

  var match = /(edge)\/([\w.]+)/.exec(ua) ||
    /(opr)[\/]([\w.]+)/.exec(ua) ||
    /(chrome)[ \/]([\w.]+)/.exec(ua) ||
    /(iemobile)[\/]([\w.]+)/.exec(ua) ||
    /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
    /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
    /(webkit)[ \/]([\w.]+)/.exec(ua) ||
    /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
    /(msie) ([\w.]+)/.exec(ua) ||
    ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) ||
    ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
    [];

  var platform_match = /(ipad)/.exec(ua) ||
    /(ipod)/.exec(ua) ||
    /(windows phone)/.exec(ua) ||
    /(iphone)/.exec(ua) ||
    /(kindle)/.exec(ua) ||
    /(silk)/.exec(ua) ||
    /(android)/.exec(ua) ||
    /(win)/.exec(ua) ||
    /(mac)/.exec(ua) ||
    /(linux)/.exec(ua) ||
    /(cros)/.exec(ua) ||
    /(playbook)/.exec(ua) ||
    /(bb)/.exec(ua) ||
    /(blackberry)/.exec(ua) ||
    [];

  var browser = {},
    matched = {
      browser: match[5] || match[3] || match[1] || "",
      version: match[2] || match[4] || "0",
      versionNumber: match[4] || match[2] || "0",
      platform: platform_match[0] || ""
    };

  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
    browser.versionNumber = parseInt(matched.versionNumber, 10);
  }

  if (matched.platform) {
    browser[matched.platform] = true;
  }

  // These are all considered mobile platforms, meaning they run a mobile browser
  if (browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
    browser.ipod || browser.kindle || browser.playbook || browser.silk || browser["windows phone"]) {
    browser.mobile = true;
  }

  // These are all considered desktop platforms, meaning they run a desktop browser
  if (browser.cros || browser.mac || browser.linux || browser.win) {
    browser.desktop = true;
  }

  // Chrome, Opera 15+ and Safari are webkit based browsers
  if (browser.chrome || browser.opr || browser.safari) {
    browser.webkit = true;
  }

  // IE11 has a new token so we will assign it msie to avoid breaking changes
  if (browser.rv || browser.iemobile) {
    var ie = "msie";

    matched.browser = ie;
    browser[ie] = true;
  }

  // Edge is officially known as Microsoft Edge, so rewrite the key to match
  if (browser.edge) {
    delete browser.edge;
    var msedge = "msedge";

    matched.browser = msedge;
    browser[msedge] = true;
  }

  // Blackberry browsers are marked as Safari on BlackBerry
  if (browser.safari && browser.blackberry) {
    var blackberry = "blackberry";

    matched.browser = blackberry;
    browser[blackberry] = true;
  }

  // Playbook browsers are marked as Safari on Playbook
  if (browser.safari && browser.playbook) {
    var playbook = "playbook";

    matched.browser = playbook;
    browser[playbook] = true;
  }

  // BB10 is a newer OS version of BlackBerry
  if (browser.bb) {
    var bb = "blackberry";

    matched.browser = bb;
    browser[bb] = true;
  }

  // Opera 15+ are identified as opr
  if (browser.opr) {
    var opera = "opera";

    matched.browser = opera;
    browser[opera] = true;
  }

  // Stock Android browsers are marked as Safari on Android.
  if (browser.safari && browser.android) {
    var android = "android";

    matched.browser = android;
    browser[android] = true;
  }

  // Kindle browsers are marked as Safari on Kindle
  if (browser.safari && browser.kindle) {
    var kindle = "kindle";

    matched.browser = kindle;
    browser[kindle] = true;
  }

  // Kindle Silk browsers are marked as Safari on Kindle
  if (browser.safari && browser.silk) {
    var silk = "silk";

    matched.browser = silk;
    browser[silk] = true;
  }

  // Pixel Ratio
  browser.pixelRatio = window.devicePixelRatio || 1

  // Assign the name and platform variable
  browser.name = matched.browser;
  browser.platform = matched.platform;

  return browser;
}

function hasClass(el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

// add classes to element!
// Should be replace by jQuery or Other global dom manipulation lib
function addClass(el, cls) {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName
      }
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

// add browser info to html tag
function add2HTML(browser) {
  var classNames = []
  classNames.push(browser.platform)
  classNames.push(browser.name)
  classNames.push(browser.name + '-' + browser.versionNumber)
  if (browser.pixelRatio >= 2) {
    classNames.push('retina')
  }
  classNames.push('pixel-ratio-' + (Math.floor(browser.pixelRatio) > 3 ? 3 : Math.floor(browser.pixelRatio)))
  setTimeout(function () {
    console.log('json:', JSON)
    console.log('json:', typeof JSON)
  }, 1000)
  //
  // console.log(JSON.stringify)
  // addClass(document.getElementsByTagName('html')[0], classNames.join(' '))
}

var browser = uaMatch()

add2HTML(browser)

module.exports = browser
