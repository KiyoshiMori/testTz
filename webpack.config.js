global.Promise    = require('bluebird');

var webpack    = require('webpack');
var path       = require('path');

// var qwe        = qwe;

var publicPath = 'http://localhost:8081/public/assets';
var bundleName = 'app.js';

var plugins = [
	new webpack.DefinePlugin({
		'process_env': {
			BROWSER: JSON.stringify(true),
			NODE_ENV: JSON.stringify(process.env.NODE_ENV)
		}
	})
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
				loader: 'css-loader!postcss-loader'
			},
			{
				test: /\.sass$/,
				loader: 'css-loader!postcss-loader!sass-loader'
			},
			{   test: /\.tsx?$/, loader: 'babel-loader!ts-loader', exclude: [/node_modules/, /public/] },
			{   test: /\.jsx?$/, loader: 'babel-loader', exclude: [/node_modules/, /public/] },

		]
	}
}