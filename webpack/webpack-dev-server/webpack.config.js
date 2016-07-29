module.exports = {
	entry: './src/main.js',
	output: {
		path: 'build',
		filename: 'bundle.js',
	},
	devServer: {
		// Tu codigo va aca
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader'
			}
		]
	}
};
