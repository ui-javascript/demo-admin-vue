/**
* @Author: 骆金参
* @Date:   2017-03-24T23:17:56+08:00
* @Email:  1095947440@qq.com
* @Filename: app.module.js
* @Last modified by:   骆金参
* @Last modified time: 2017-03-24T23:19:02+08:00
*/


(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule ],
      declarations: [ app.AppComponent ],
      bootstrap: [ app.AppComponent ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
