const HtmlWebPackPlugin = require("html-webpack-plugin");

var htmlWebPackPluginInstance = new HtmlWebPackPlugin({
    filename: "./index.html",
    minify: {
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true
    },
    template: "./src/index.html"
});

module.exports = {
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                exclude: /node_modules/,
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(css|png|jpe?g|gif)(\?\S*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'src/resources/fonts'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        htmlWebPackPluginInstance
    ]
};
