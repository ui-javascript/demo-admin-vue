// https://gist.github.com/zimplexing/c7c1f15ea3f270de3962fc0ab466d82e

const express = require('express');
const request = require('request');
const app = express();

const proxyServer = 'http://api.zhuishushenqi.com';
const chapterServer = 'http://chapterup.zhuishushenqi.com/chapter'

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, accept, origin, content-type, x-access-token");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});


app.get('/getChapter', (req, res, next) => {
    const url = chapterServer + '/' + req.query.chapterUrl;
    console.log(url);
    req.pipe(request(url)).pipe(res);
});

app.use('/', (req, res) => {
    const url = proxyServer + req.url;
    console.log(url);
    req.pipe(request(url)).pipe(res);
});



app.listen(3000, function () {
    console.log('proxy server started at: localhsot:3000');
});