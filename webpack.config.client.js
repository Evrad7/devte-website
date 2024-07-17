const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()
// const nodeExternals = require('webpack-node-externals');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const config = {
    name: "browser",
    mode: "development",
    // externals: [nodeExternals()],
    target:"web",
    devtool: 'eval-source-map',
    devServer:{
        hot:true
    },
    entry: [
        "webpack-hot-middleware/client",
        path.join(CURRENT_WORKING_DIR, 'client/src/index.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist/'),
        filename: 'bundle.js',
        publicPath: '/dist/',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/$node_modules/,
                use: [
                    {
                    loader:'babel-loader',
                    options:{
                        plugins:[require.resolve('react-refresh/babel')]
                    },
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                type:"asset/resource"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    }, 
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
            "__PRODUCTION__":JSON.stringify(false)
        })
    ],
}

module.exports = config
