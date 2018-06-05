const path = require('path')
const glob = require('glob')
const config = require('../config')


// const pwd = process.cwd();
// const project = require(`${pwd}/app.json`);
// const app = project.module;
// const port = project.dev.port ? project.dev.port : 8080;
//
// let env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
//
// const isDev = env === 'development';
// const isProd = env === 'production';
//
// const createRootTemplate = require('./create-root-template');
//
// const generated = (function () {
//   let templates = {};
//   let entry = {};
//
//   if (isDev) {
//     app['index'] = {
//       enable: true,
//       page: 'index',
//       path: '.',
//     };
//   }
//
//
//   for (let key in app) {
//     let enabled = app[key].enable;
//     if (enabled) {
//       let item = app[key];
//       let where = item.path;
//
//       if (item.page) {
//         let name = item.page;
//
//         let cat = item.category, keyname = name;
//         let tpl = {
//           template: `${where}/index.html`, //template path
//           filename: name,                 //build template name
//           entry: `${where}/index.js`      //entry path
//         };
//         if (cat) {
//           tpl.category = cat;             //module category
//           keyname = `${cat}_${name}`
//         }
//         let generated = generateOptions(tpl);  //generate templates option and entry path
//
//         templates[keyname] = generated.template;
//         entry[keyname] = generated.entry
//       } else if (item.pages) {
//         let pages = item.pages;
//         for (let i = 0; i < pages.length; i++) {
//           let name = pages[i],
//             keyname = name;
//           let cat = item.category;
//           let tpl = {
//             template: `${where}/${name}/index.html`,
//             filename: name,
//             entry: `${where}/${name}/index.js`
//           };
//
//           if (cat) {
//             keyname = `${cat}_${name}`;
//             tpl.category = cat
//           }
//
//           let generated = generateOptions(tpl);
//           templates[keyname] = generated.template;
//           entry[keyname] = generated.entry
//         }
//       }
//
//       else {
//         console.error('>please provide page[type String] or pages[type Array] option');
//       }
//     }
//   }
//   return {templates, entry}
// })();
//
// function generateOptions(opts) {
//   let template = {
//     template: opts.template,
//     filename: opts.filename
//   };
//   if (opts.category) {
//     template.category = opts.category
//   }
//   return {
//     template: template,
//     entry: opts.entry
//   }
// }
//
//
// function getTemplate(plugins) {
//
//
//   let templateType = project.build['template-type'];
//   if (!templateType) {
//     templateType = 'html'
//   }
//   let templateDistPath = project.build['html-template-path'];
//
//
//   let HtmlWebpackPlugin = require('html-webpack-plugin');
//   /***
//    * @param plugins webpack plugins array
//    * @param entry   webpack base config entry option
//    * @param env     webpack working env
//    ***/
//   let templates = generated.templates;
//   let opts = [];
//   for (let name in templates) {
//     let dir = templates[name].category ? `${templates[name].category}/` : '';
//     let tpl = templates[name].template;
//     let filename = templates[name].filename;
//
//     let options = {
//       template: tpl,
//       title: name
//     };
//     if (isProd) {
//       options.minify = {
//         removeComments: true,
//         collapseWhitespace: false,
//         removeAttributeQuotes: true
//         // more options:
//         // https://github.com/kangax/html-minifier#options-quick-reference
//       };
//       // let filename = name.split('_');
//       // filename = filename[1];
//       options.chunks = ['manifest', 'vendor', `${name}`];
//       options.inject = 'inject' in project.build ? project.build.inject : true;
//
//       options.filename = `${templateDistPath}/${dir}${filename}.${templateType}`;
//     } else if (isDev) {
//       options.chunks = ['common', `${name}`];
//       options.filename = `${name}.html`;
//     }
//     opts.push(options);
//   }
//
//   for (let i = 0; i < opts.length; i++) {
//     plugins.push(new HtmlWebpackPlugin(opts[i]))
//   }
//   return plugins
// }
//
// if (isDev) {
//   createRootTemplate(generated.entry, port, env);
// }
// module.exports = {
//   entry: generated.entry,
//   template: getTemplate,
//   build: project.build,
//   dev: project.dev
// };


exports.getEntryDir = function () {
  // let globPath = 'src/pages/**/*.' +
  let globPath = `src/pages/**/*.@(${config.common.tplLang})`

  // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
  // let pathDir = 'src(\/|\\\\)(.*?)(\/|\\\\)_tmpl' // 视图所在
  // console.log(pathDir)

  let files = glob.sync(globPath)
  let dirname, entries = [], dir, module
  let filenameArr, filenameTitle, filenameExt

  for (let i = 0; i < files.length; i++) {

    // 获取目录名
    dirname = path.dirname(files[i])

    // 不支持二级目录
    module = dirname.split('/');
    if (module[0] === 'src') {
      module.shift();
    }
    dir = module.join("/");
    if (module[0] == 'pages') {
      module.shift()
    }
    module = module.join("/")

    // 原文件信息
    filenameArr = files[i].split('/')
    filenameArr = filenameArr[filenameArr.length - 1].split('.')
    filenameTitle = filenameArr[0]
    filenameExt = filenameArr[1]

    entries.push({
      template: files[i],

      // eg. 'index' + 'pug'
      filenameTitle: filenameTitle,
      filenameExt: filenameExt,

      // eg. src/pages/index
      dirname: dirname,

      // 形如 pages/index
      // dir: dirname.replace(new RegExp('^' + pathDir), '$2'),
      dir: dir,

      // 形如index
      module: module
    })

  }

  // console.log('entries -> ' + JSON.stringify(entries))

  return entries
}

// 获取vendors
exports.getVendors = function () {
  let globPath = `src/${config.common.libraryDir}/**/*.*`
  let files = glob.sync(globPath)
  let libsArr = []
  files.forEach((v, i) => {
    libsArr.push('./' + v)
  })
  return libsArr
}

