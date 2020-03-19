const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				exclude: [path.resolve(__dirname, 'node_modules')],
				test: /\.ts$/,
				use: 'ts-loader'
			}
		]
	},
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'dist'),
		hotUpdateChunkFilename: '.hot/hot-update.js',
		hotUpdateMainFilename: '.hot/hot-update.json'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	target: 'node'
};
