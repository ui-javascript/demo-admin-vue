var express = require('express');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
let colors = require('colors');

var config = require('./webpack.dev.config.js');
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, config.devServer);

server.listen(config.devServer.port, config.devServer.host, function(arg) {
  console.log(colors.green.underline('server start success! please visit http://' + config.devServer.host + ':' + config.devServer.port + '/index.html'));
});