/**
* @Author: 骆金参
* @Date:   2017-03-24T23:17:45+08:00
* @Email:  1095947440@qq.com
* @Filename: app.component.js
* @Last modified by:   骆金参
* @Last modified time: 2017-03-24T23:18:44+08:00
*/


(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>我的第一个 Angular 应用</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
