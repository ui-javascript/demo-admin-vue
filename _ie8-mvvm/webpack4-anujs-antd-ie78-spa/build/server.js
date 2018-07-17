const Koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');
const app = new Koa();
const argv = require('yargs').argv;

const server = app.listen(8080);
const column = argv.env === 'dev' ? '../devtmp' : '../dist';

console.log("http://localhost:8080")
app.use(koaStatic(path.resolve(__dirname, column)));
