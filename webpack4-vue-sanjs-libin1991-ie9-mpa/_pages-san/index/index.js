require("babel-polyfill")
require("es5-polyfill")

//IE8 ^4.5.10
// import 'es5-shim';
// import 'object-create-ie8';
import 'object-defineproperty-ie8';
import 'console-polyfill';

//比IE8的JSON好用
// import 'json3';
//性能超高的Promise实现
// import 'bluebird';
// import 'fetch-polyfill2';
// cdn引入的
// 不是包导入的
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