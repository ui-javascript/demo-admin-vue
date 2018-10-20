/* eslint-disable */
const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const es3ifyPlugin = require('es3ify-webpack-plugin');
const pageConfig = require('./page.config.js');

const myConfig = require("./package.json").myConfig
var CDN = myConfig.CDN
var IE8 = myConfig.IE8 === 'true'

function resolve(dir) {
	return path.join(__dirname, dir)
}
class ChunksFromEntryPlugin {
	apply(compiler) {
		compiler.hooks.emit.tap('ChunksFromEntryPlugin', compilation => {
			compilation.hooks.htmlWebpackPluginAlterChunks.tap(
				'ChunksFromEntryPlugin',
				(_, {
					plugin
				}) => {
					// takes entry name passed via HTMLWebpackPlugin's options
					const entry = plugin.options.entry;
					const entrypoint = compilation.entrypoints.get(entry);
					return entrypoint.chunks.map(chunk =>
						({
							names: chunk.name ? [chunk.name] : [],
							files: chunk.files.slice(),
							size: chunk.modulesSize(),
							hash: chunk.hash
						})
					);
				}
			);
		});
	}
}

let webpackConfig = {
	mode: 'production',
	// 配置入口  
	entry: {},
	devtool:false,
	// 配置出口  
	output: {
		path: path.join(__dirname, "./dist/"),
		filename: 'js/[name].[hash:7].js',
		publicPath: CDN
	},
	resolve: {
		extensions: [".js", ".css", ".json", ".vue", ".san"],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			'@': resolve('src')
		}
	},
    externals: {
        jquery: 'window.$',
        $: 'window.$',
    },
	module: {
		rules: [{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test'), resolve(`${myConfig.PAGES}`)]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: ExtractTextPlugin.extract({
							use: ['css-loader?minimize&sourceMap=false']
						}),
						less: ExtractTextPlugin.extract({
							use: ['css-loader?minimize&sourceMap=false', "less-loader"]
						})
					}
				}
			},
            // .san文件
            {
                test: /\.san$/,
                loader: 'san-loader'
            },
			// html中的img标签
			{
				test: /\.html$/,
				loader: 'html-withimg-loader',
				include: [path.join(__dirname, "./src")],
				options: {
					limit: 10000,
					// min:false,
					min: true,
					name: 'img/[name].[hash:7].[ext]'
				}
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'img/[name].[hash:7].[ext]'
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'media/[name].[hash:7].[ext]'
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'fonts/[name].[hash:7].[ext]'
				}
			},
			{
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    use:['css-loader?minimize&sourceMap=false',"postcss-loader"],//这种方式引入css文件就不需要style-loader了
                })
                 
            },
            {
                test:/\.less$/,
                use:ExtractTextPlugin.extract({
                    use:['css-loader?minimize&sourceMap=false','less-loader',"postcss-loader"],
                })
            },
		]
	},
	plugins: [
        new es3ifyPlugin(),
		new VueLoaderPlugin(),
		new webpack.ProvidePlugin({

		}),
		// new UglifyJsPlugin({
         //    uglifyOptions: {
         //        ie8: true,
         //    },
		// 	sourceMap: false,
		// 	parallel: true,
		// }),
        new UglifyJsPlugin({
            mangle: {
                screw_ie8: false
            },
            mangleProperties: {
                screw_ie8: false,
            },
            compress: {
                screw_ie8: false,
            },
            output: {
                screw_ie8: false
            }
        }),
		new ExtractTextPlugin({
			filename: 'css/[name].[hash:7].css'
		}),
		//设置每一次build之前先删除dist  
		new CleanWebpackPlugin(
			['dist/*', ], 　 //匹配删除的文件  
			{
				root: __dirname, //根目录  
				verbose: true, //开启在控制台输出信息  
				dry: false //启用删除文件  
			}
		),
		new ChunksFromEntryPlugin(),
		//默认添加NODE_ENV为production
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
		})
	],
	optimization: {
		minimize: process.env.NODE_ENV === 'production' ? true : false, //是否进行代码压缩
		splitChunks: {
			chunks: "all",
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				// default: {
				//     minChunks: 2,
				//     priority: -20,
				//     reuseExistingChunk: true
				// },
				commons: {
					name: "commons",
					chunks: "initial",
					minChunks: 2
				}
			}
		}
	}
};

if(pageConfig && Array.isArray(pageConfig)) {
	pageConfig.map(page => {
		webpackConfig.entry[page.name] = `./${page.js}`;
		webpackConfig.plugins.push(new HtmlWebpackPlugin({
			filename: path.join(__dirname, `/dist/${page.name}`),
			template: path.join(__dirname,   page.html),
			inject: true,
			entry: page.name,
			chunks: [page.name],
			inlineSource: '.(js|css)$',
			// minify:false,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
				// more options:
				// https://github.com/kangax/html-minifier#options-quick-reference
			},
			chunksSortMode: 'dependency'
		}))
	})
}

// webpackConfig.entry['es5-polyfill'] = 'es5-polyfill'
// if (IE8) {
//     console.log('兼容IE8+')
//     webpackConfig.plugins.unshift(new es3ifyPlugin());
// }



console.log(process.env.NODE_ENV)
module.exports = webpackConfig;

