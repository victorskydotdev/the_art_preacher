const path = require('path');
const fileLoader = require('file-loader');
const urlLoader = require('url-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');
const { type } = require('os');

module.exports = {
	mode: 'none',

	entry: './src/index.js',
	// output: {
	// 	filename: '[name].[contenthash].js',
	// 	path: path.resolve(__dirname, 'dist'),
	// },

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader', // Creates `style` nodes from JS strings
					'css-loader', // Translates CSS into CommonJS
					'sass-loader', // Compiles Sass to CSS
				],
			},

			{
				test: /\.(png|jp?g|svg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
						},
					},
				],
			},

			// {
			// 	test: /\.(png | jp?g | svg | gif)$/,
			// 	use: [
			// 		{
			// 			loader: 'svg-loader',
			// 			options: {
			// 				limit: 8192,
			// 				fallback: 'file-loader',
			// 				name: '[name].[hash].[ext]',
			// 				outputPath: 'images',
			// 			},
			// 		},
			// 	],
			// },

			// {
			// 	test: /\.(png|jpe?g|gif|svg)$/i,
			// 	use: [
			// 		{
			// 			loader: 'url-loader',
			// 			options: {
			// 				limit: 8192, // Inline images smaller than 8 KB
			// 				fallback: 'file-loader',
			// 				name: 'assets/[name].[ext]',
			// 				publicPath: '/assets/', // Adjust this if necessary
			// 			},
			// 		},
			// 	],
			// },

			// file loader for images
			{
				test: /\.(png | jpe?g | gif | svg)$/i,
				use: [
					{
						loader: 'file-loader',

						options: {
							name: '[name].[ext]',
							publicPath: './assets/',
						},
					},
				],
			},

			// {
			// 	test: /\.json$/,
			// 	loader: 'json-loader',
			// },

			// {
			// 	test: /\.json$/,
			// 	type: 'asset/source',
			// },
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/html/index.html',
			chunks: ['main'],
			filename: 'index.html',
			inject: 'head',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/success.html',
			chunks: ['main'],
			filename: 'success.html',
			inject: 'head',
		}),

		new HtmlWebpackPlugin({
			template: './src/html/catalog.html',
			chunks: ['main'],
			filename: 'catalog.html',
			inject: 'head',
		}),
	],
};
