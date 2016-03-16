var path = require('path');
var webpack = require('webpack');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
	entry: {
		main: './src/main.js',
		main2: './src/main2.js'
	},
    output: {
        path: path.join(__dirname, 'dist'),
		publicPath: './dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'src'),
                query: {
                  presets: 'es2015',
                },
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
		//new TransferWebpackPlugin([
		  //{from: path.join(__dirname,"src","static")}
		//], path.join(__dirname,"dist","static")),
		new webpack.optimize.UglifyJsPlugin({	//压缩代码
		    compress: {
		        warnings: false
		    },
		    except: ['$super', '$', 'exports', 'require']	//排除关键字
		})
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
	devServer:{
        contentBase:'./'
    }
};
