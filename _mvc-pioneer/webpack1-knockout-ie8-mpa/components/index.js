// 加载样式
require('./theme/index.scss')

// 加载组件
require('./archived-breadcrumb')
require('./archived-tabs')
require('./breadcrumb')
require('./carousel')
require('./checkbox')
require('./col')
require('./color-picker')
require('./datepicker')
require('./dialog')
require('./dropdown')
require('./message')
require('./message-box')
require('./pagination')
require('./radio')
require('./row')
require('./select')
require('./table')
require('./tabs')
require('./transfer')

// 消息 - message
let loading = require('./loading').loading;
let msg = require('./message').msg;
let msgBox = require('./message-box').msgBox;
ko.loading = loading;
ko.msg = msg;
ko.msgBox = msgBox;

// 增强 - enhance
require('./tooltip');

