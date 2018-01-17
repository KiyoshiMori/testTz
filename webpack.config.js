global.Promise    = require('bluebird');

var webpack    = require('webpack');
var path       = require('path');

// var qwe        = qwe;

var publicPath = 'http://localhost:8081/public/assets';
var bundleName = 'app.js';

module.exports = {
	entry: ['babel-polyfill', './app/client.ts'],
	resolve: {
		// root:   path.join(__dirname, 'app'),
		// modulesDirectories: ['node_modules'],
		extensions: ['.js', '.ts']
	},
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
			{   test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ },

		]
	}
}