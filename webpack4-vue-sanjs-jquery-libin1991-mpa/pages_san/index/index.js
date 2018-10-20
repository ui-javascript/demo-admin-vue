require("es5-polyfill")
// import 'es5-shim'; //IE8 ^4.5.10
require('es5-shim')
// require('es5-shim/es5-sham')

import 'object-create-ie8';//IE8, 我写的库，这样就不用加上es5-sham
import 'object-defineproperty-ie8';//IE8， 我写的库
import 'console-polyfill';
import san from 'san'

const MyApp = san.defineComponent({
  template: `
                <div>
                    <input type="text" value="{=name=}">
                    <p class="hello">Hello {{name}}!</p>
                </div>
            `
});

// 挂载
let myApp = new MyApp({
  data: {
    name: 'San'
  }
});
myApp.attach(document.body);