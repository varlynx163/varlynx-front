const path = require( 'path' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

/*-------------------------------------------------*/

module.exports = {

	// webpack optimization mode
	mode: ( 'development' === process.env.NODE_ENV ? 'development' : 'production' ),

	// entry files
	entry: 'development' === process.env.NODE_ENV ? [
		'./src/index.tsx', // in development
	] : [
		'./src/index.tsx', // in production
	],

	// output files and chunks
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'build/[name].js',
	},

	// module/loaders configuration
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
			}
		]
	},

	// webpack plugins
	plugins: [

		// extract css to external stylesheet file
		new MiniCssExtractPlugin( {
			filename: 'build/styles.css'
		} ),

		// prepare HTML file with assets
		new HTMLWebpackPlugin( {
			filename: 'index.html',
			template: path.resolve( __dirname, 'src/index.html' ),
			minify: false,
		} ),

		// copy static files from `src` to `dist`
		new CopyWebpackPlugin( {
			patterns: [
				{
					from: path.resolve( __dirname, 'src/assets' ),
					to: path.resolve( __dirname, 'dist/assets' )
				}
			]
		} ),
	],

	// resolve files configuration
	resolve: {

		// file extensions
		extensions: [ '.js', '.jsx', '.scss', '.tsx' ],
	},

	// webpack optimizations
	optimization: {
		splitChunks: {
			cacheGroups: {
				default: false,
				vendors: false,

				vendor: {
					chunks: 'all', // both : consider sync + async chunks for evaluation
					name: 'vendor', // name of chunk file
					test: /node_modules/, // test regular expression
				}
			}
		}
	},

	// development server configuration
	devServer: {
		port: 8080,
		historyApiFallback: true,
	},

	// generate source map
	devtool: 'source-map'

};
