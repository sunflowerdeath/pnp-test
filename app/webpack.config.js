const PnpWebpackPlugin = require('pnp-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' })
	],
	resolve: {
		plugins: [PnpWebpackPlugin],
	},
	resolveLoader: {
		plugins: [PnpWebpackPlugin.moduleLoader(module)]
	}
}
