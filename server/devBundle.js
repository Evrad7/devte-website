import webpackDevMiddleware from "webpack-dev-middleware"
import WebpackHotMiddleware from "webpack-hot-middleware";
import webpack from "webpack";
import clientDevWebpackConfig from "../webpack.config.client"
import config from "../config/config.js"

const compile=(app)=>{
    if(config.env==="development"){
        const compiler=webpack(clientDevWebpackConfig)
        const devMiddleware=webpackDevMiddleware(compiler, {
            publicPath:clientDevWebpackConfig.output.publicPath,
            // writeToDisk: true,
        })
        const hotMiddleware=WebpackHotMiddleware(compiler)
        app.use(devMiddleware)
        app.use(hotMiddleware)
    }
}
export default compile