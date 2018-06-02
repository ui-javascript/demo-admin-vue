/**
* @Author: 骆金参
* @Date:   2017-03-24T23:17:29+08:00
* @Email:  1095947440@qq.com
* @Filename: main.js
* @Last modified by:   骆金参
* @Last modified time: 2017-03-24T23:19:13+08:00
*/


(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule);
  });
})(window.app || (window.app = {}));
