let glob = require('glob');
let path = require('path');
let webpack = require('webpack');
let ProgressPlugin = require('webpack/lib/ProgressPlugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let loaders = require('vue-cli/lib/loaders');

const production = false;

process.env.NODE_ENV = production ? 'production' : 'development';

let cssOptions = {
    extract: production,
    sourceMap: true
}

let postcssOptions = {
    plugins: [
        require('autoprefixer')({browsers: ['ie > 8', 'last 5 versions']})
    ]
}

let babelOptions = {
    babelrc: true,
    cacheDirectory: true,
    sourceMaps: production ? 'both' : false,
    presets: [
        require.resolve('babel-preset-vue-app')
    ]
}

module.exports = {
    entry: {
        container: path.join(process.cwd(), 'src/subatomic/layout/container.vue'),
        row: path.join(process.cwd(), 'src/subatomic/layout/row.vue'),
        column: path.join(process.cwd(), 'src/subatomic/layout/column.vue')
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].js',
        library: ['gds', '[name]'],
        libraryTarget: 'umd',
        publicPath: '/'
    },
    devtool: 'source-map',
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.js', '.vue', '.css'],
        modules: [
            process.cwd(),
            path.join(process.cwd(), 'node_modules'),
        ],
        alias: {
            Components: path.resolve(process.cwd(), 'src/')
        }
    },
    resolveLoader: {
        modules: [
            path.join(process.cwd(), 'node_modules'),
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.es6$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    postcss: postcssOptions,
                    loaders: loaders.cssLoaders(cssOptions)
                }
            },
            {
                test: /\.(ico|jpg|png|gif|svg|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'static/[name].[ext]'
                }
            }
        ].concat(loaders.styleLoaders(cssOptions))
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                context: process.cwd(),
                postcss: postcssOptions,
                babel: babelOptions
            }
        }),
        new ProgressPlugin(),
        production ? new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compressor: {
                warnings: false
            },
            output: {
                comments: false
            }
        }) : function(){},
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new ExtractTextPlugin('[name].css')
    ]
}
