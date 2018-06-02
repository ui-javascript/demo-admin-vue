module.exports = {
  ajaxBase: function (url, type, async, data, callback) {
    data = data || {};

    $.ajax({
      url: url,
      type: type,
      data: data,
      cache: false,
      async: async,
      success: function (result) {
        return callback && callback(result);
      },
      error: function (result) {
        var message = "",
          httpStatus = result.status,
          httpResponse = result.responseText;
        try {
          httpResponse = JSON.parse(httpResponse);
        } catch (ex) {
          httpResponse = {
            message: httpResponse
          };
        }

        if (httpStatus >= 400 && httpStatus < 500) {
          if (httpStatus === 401) {
            return location.href = 'login.html';
          } else if (httpStatus === 403) {
            message = httpResponse.message || '您没有操作权限';
          } else if (httpStatus === 404) {
            message = httpResponse.message || '请求的路由不存在';
          } else {
            message = httpResponse.message;
          }
        } else if (httpStatus >= 500) {
          message = httpResponse.message || '网络异常,请重试';
        } else {
          message = httpResponse.message;
        }

        callback && callback({
          "status": "error",
          "message": message,
          "httpStatus": httpStatus,
          "httpResponse": httpResponse.message
        });
        return console.error(httpResponse); // eslint-disable-line
      }
    });
  },

  ajaxGet: function (url, data, callback) {
    if (typeof data === 'function') {
      callback = data;
      data = null;
    }
    this.ajaxBase(url, 'get', true, data, callback);
  },

  ajaxGetSync: function (url, data, callback) {
    if (typeof data === 'function') {
      callback = data;
      data = null;
    }
    this.ajaxBase(url, 'get', false, data, callback);
  },

  ajaxPost: function (url, data, callback) {
    if (typeof data === 'function') {
      callback = data;
      data = null;
    }
    this.ajaxBase(url, 'post', true, data, callback);
  },

  ajaxPostSync: function (url, data, callback) {
    if (typeof data === 'function') {
      callback = data;
      data = null;
    }
    this.ajaxBase(url, 'post', false, data, callback);
  },
  // 取url中的参数
  urlParam: function (name) {
    var c, r = {},
      s = window.location.search,
      a = s.match(/\w+=[^&]*/g) || [];
    for (var i = 0; i < a.length; i++) {
      c = a[i].split('=');
      r[decodeURIComponent(c[0])] = decodeURIComponent(c[1] || '');
    }
    if (name !== null) {
      return r[name];
    }
    return r;
  },
  //生成随机数
  random: function (min, max) {
    var x = Math.floor(Math.random() * (max - min + 1)) + min;
    return x;
  },
  //取数组最大值
  getArrMaxValue: function (arr) {
    return Math.max.apply(Math, arr);
  },
  //取数组最小值
  getArrMinValue: function (arr) {
    return Math.min.apply(Math, arr);
  },
  //判断数组中是否包含某个元素
  inArray: function (item, arr) {
    var check = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        check = true;
        break;
      }
    }
    return check;
  },
  //获取元素在数组中的位置
  indexOf: function (item, arr) {
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        index = i;
        break;
      }
    }
    return index;
  },
  checkMobile: function (mobile) {
    if (mobile.length !== 11) {
      return false;
    }

    //判断是否都是数字
    var r = /^\d{11}$/;
    var mobileCheck = r.test(mobile);

    if (!mobileCheck) {
      return false;
    }

    //判断手机号开头是否正确
    var arrYD = [134, 135, 136, 137, 138, 139, 147, 150, 151, 158, 159, 157, 154, 152, 178, 188, 187, 182, 183, 184, 1705, 1703, 1706];
    var arrLT = [130, 131, 132, 155, 156, 185, 186, 145, 175, 176, 1707, 1708, 1709, 1713, 1718, 1719];
    var arrDX = [133, 153, 189, 180, 181, 1700, 177, 173, 1701, 1702];

    var arr = arrYD.concat(arrLT, arrDX);

    var left3 = parseInt(mobile.substr(0, 3));
    var left4 = parseInt(mobile.substr(0, 4));

    if (arr.indexOf(left3) === -1 && arr.indexOf(left4) === -1) {
      mobileCheck = false;
    }

    return mobileCheck;

  },
  checkEmail: function (email) {
    var emailCheck = /\w[-\w.+]*@([A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;

    if (emailCheck.test(email)) {
      return true;
    }
    return false;
  }
};