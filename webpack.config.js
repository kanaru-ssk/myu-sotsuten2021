
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const path = require('path');

module.exports = {
    mode: 'production',
    entry: `./src/js/main.js`,
    // ファイルの出力設定
    output: {
        // 出力ファイル名
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'docs'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new CopyPlugin({
            patterns: [{
                context: "src",
                from: "**/*",
                to: path.resolve(__dirname, "docs")
            },],
        }),
        new ImageminPlugin({
            test: /\.(png|gif|svg)$/i,
            pngquant: {
                quality: '65-80'
            },
            gifsicle: {
                interlaced: false,
                optimizationLevel: 1,
                colors: 256
            },
            svgo: {
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.html$/i,
                type: "asset/resource",
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new HtmlMinimizerPlugin(),
            new TerserPlugin(),
            new CssMinimizerPlugin(),
            new JsonMinimizerPlugin(),
        ],
    },
    devServer: {
        hot: true,
        open: false,
        historyApiFallback: true,
        static: 'docs',
    },
    cache: {
        type: 'filesystem'
    }
};