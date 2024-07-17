const path = require('path')
const webpack=require("webpack")
const CURRENT_WORKING_DIR = process.cwd()


const config = {
    name:"production browser",
    target:"web",
    mode: "production",
    entry: [
        path.join(CURRENT_WORKING_DIR, 'client/src/index.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist/'),
        filename: 'bundle.js',
        publicPath: "/dist/",
        assetModuleFilename: 'images/[hash][ext][query]'

    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    },
plugins:[
    new webpack.DefinePlugin({
        "__PRODUCTION__":JSON.stringify(true)
    })
]
}

module.exports = config
