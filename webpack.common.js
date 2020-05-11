const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				exclude: [path.resolve(__dirname, 'node_modules')],
				test: /\.tsx?$/,
				use: 'ts-loader'
			}
		]
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		hotUpdateChunkFilename: '.hot/[id].[hash].hot-update.js',
		hotUpdateMainFilename: '.hot/[hash].hot-update.json'
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	target: 'node'
};
