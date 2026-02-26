const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebPackPluginInstance = new HtmlWebPackPlugin({
    filename: './index.html',
    template: './src/index.html',
    minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
    }
});

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)(\?\S*)?$/,
                type: 'asset/resource',
                generator: {
                     filename: '[name][ext]'
                }
            },
            {
                test: /\.(ttf|otf|eot|svg|woff2?)(\?[a-z0-9]+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'resources/fonts/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        htmlWebPackPluginInstance
    ],
    devServer: {
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: true
    }
};
