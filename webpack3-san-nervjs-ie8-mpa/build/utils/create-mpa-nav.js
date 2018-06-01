// 注意这个是node.js的工具 不是utils.js
// 参考自 https://github.com/Fi2zz/webpack-multipages-template
const util = require('util');
const chalk = require('chalk');
const fs = require('fs');


function html(entries, devPort, env) {
  console.log(chalk.yellow(`  [${env}]    ----------------`));
  // console.log(chalk.yellow(`  [${env}]    ${env.toUpperCase()} config file path`));
  console.log(chalk.yellow(`  [${env}]    ` + __dirname));
  console.log(chalk.yellow(`  [${env}]    Working Modules:`));
  console.log(chalk.yellow(`  [${env}]    \n   ${util.inspect(entries)}`));
  console.log(chalk.yellow(`  [${env}]    ----------------\n`));

  let html = `<table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <th colspan="3" style="border: 1px #fff solid;border-bottom: none;"> <mark>多页面导航</mark>(此页面node.js自动生成)</th>
          </tr>
          <tr>
            <th style="border:1px #ddd solid;border-right: none;">所属模块</th>
            <th style="border:1px #ddd solid;border-right: none;">视图文件</th>
            <th style="border:1px #ddd solid;">浏览地址</th>
          </tr>`


  for (let i in entries) {
    // console.log('导航 -> ' + JSON.stringify(entries[p]))
    let entry = entries[i]
    let url = `http://localhost:${devPort}/${entry.module}/${entry.filenameTitle}.html`;
    html += `
        <tr> 
            <td style="border:1px #ddd solid;border-top: none;border-right: none;">${entry.module}</td> 
            <td style="border:1px #ddd solid;border-top: none;border-right: none;">${entry.filenameTitle}.${entry.filenameExt}</td>
            <td style="border:1px #ddd solid;border-top: none;">
              <a style="color: #333" target="_blank" href="${url}">${url}</a>
           </td>
        </tr>
      `
  }
  
  html += `</table>`;
    

  return `<!DOCTYPE html>
  <html>
        <head>
            <meta charset="utf-8">
            <title>Project</title>
            <style>html,body{width: 100%;height: 100%;} td,th {padding: 10px;}</style>
        </head>
        <body style="margin:0;padding: 0;">
            <div id="app" style="padding:16px;">
            ${html}
            </div>
        </body>
    </html>`
}

// 创建根
function createMpaNav(entries, devPort, env) {
  // 创建入口文件
  fs.writeFile('./src/views/index.js', "// index.html, index.js自动生成,\n// 放过这两个孩子吧~~", (err, entries) => {
    if (err) {
      console.log(err);
    }
    console.log(chalk.green('> Write "index.js" is done'))
  });
  
  // 创建入口视图
  fs.writeFile('./src/views/index.html', html(entries, devPort, env), function (err, entries) {
    if (err) {
      console.log(err);
    }
    console.log(chalk.green('> Write "index.html" is done'))
  });
}

module.exports = createMpaNav;
