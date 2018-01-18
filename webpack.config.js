global.Promise    = require('bluebird');

var webpack    = require('webpack');
var path       = require('path');

var ExtractTextPlugin  = require('extract-text-webpack-plugin');

var publicPath = 'http://localhost:8081/public/assets';
var bundleName = 'app.js';

var plugins = [
	new webpack.DefinePlugin({
		'process_env': {
			BROWSER: JSON.stringify(true),
			NODE_ENV: JSON.stringify(process.env.NODE_ENV)
		}
	}),
	new ExtractTextPlugin('styles.css')
]

module.exports = {
	entry: ['babel-polyfill', './app/App.js'],
	resolve: {
		modules:   [path.join(__dirname, 'app'), "node_modules"],
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	plugins,
	output: {
		path: `${__dirname}/public/assets/`,
		filename: bundleName,
		publicPath
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'typings-for-css-modules-loader?modules&namedExport'})
			},
			{
				test: /\.sass$/,
				loader: 'style-loader!typings-for-css-modules-loader?modules&sass&localIdentName=[local]-[hash]&sourceMap&namedExport!sass-loader'
			},
			{   test: /\.tsx?$/, loader: 'babel-loader!ts-loader', exclude: [/node_modules/, /public/] },
			{   test: /\.jsx?$/, loader: 'babel-loader', exclude: [/node_modules/, /public/] },

		]
	},
	node: {console: true, fs: 'empty', net: 'empty', tls: 'empty'}
}