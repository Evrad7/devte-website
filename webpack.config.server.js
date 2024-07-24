const path=require("path")
const nodeExternals =require("webpack-node-externals")
const { plugins } = require("./webpack.config.client")
const webpack=require("webpack")
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "server",
    entry: [path.join(CURRENT_WORKING_DIR , './server/server.js') ],
    target: "node",
    externals: [nodeExternals({
        "allowlist":[
            /^@mui\//,
            /^react-hexgrid/,
            /^react-mouse-follower/,
            /^@babel\/runtime/]})],
    // experiments: {
    //     outputModule: true // Activez cette option pour permettre la sortie de type ESM
    //   },
    // externalsPresets: { node: true },
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist/'),
        filename: "server.generated.js",
        publicPath: 'dist/',
        library:{
            type:"commonjs",
        },
        assetModuleFilename: 'images/[hash][ext][query]',
        
       
    },
    // externalsPresets: {
    //     node: true // in order to ignore built-in modules like path, fs, etc. 
    // },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [ 'babel-loader' ],
                exclude:/node_modules/,
                // resolve:{
                //     fullySpecified: false,
                // }

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
    resolve: {
        // extensions: ['.js', '.jsx', '.json'],
        
    },
    plugins:[
        // webpack.DefinePlugin({
        //     "__PRODUCTION__":""
        // })
    ]
}

module.exports=config
