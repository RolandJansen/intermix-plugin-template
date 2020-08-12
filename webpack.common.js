const path = require('path');

module.exports = {
	entry: './src/index.ts',
	module: {
		rules: [
		{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node-modules/,
		},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'plugin.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
