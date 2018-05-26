import './index.css'
// console.log('aaaaaaaaaaaa')

import $ from 'jquery'
// import mplayer from './js/mplayer'

// console.log($.support)

import san from 'san'

const MyApp = san.defineComponent({
    template: `
                <div>
                    <input type="text" value="{=name=}">
                    <p>Hello {{name}}!</p>
                </div>
            `
});

let myApp = new MyApp({
    data: {
        name: 'San'
    }
});
myApp.attach(document.body);

