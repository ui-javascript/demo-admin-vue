const Koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');
const app = new Koa();
const argv = require('yargs').argv;

const server = app.listen(9527);
const column = argv.env === 'dev' ? '../dist' : '../dist';

app.use(koaStatic(path.resolve(__dirname, column)));
