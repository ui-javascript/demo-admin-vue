const shell = require('shelljs');
const path = require('path');
const del = require('del');

let arr = del.sync([path.join(__dirname + '/../devtmp/**')]);
console.log('正在删除目录');

shell.exec('node ./build/server/server.js --env=dev', { async: true }, (code, stdout, stderr) => {});
shell.exec('webpack --watch', { async: true }, (code, stdout, stderr) => {});
