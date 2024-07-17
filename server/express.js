import express from "express"
import cors from "cors"
import compression from "compression"
import helmet from "helmet"
import path from "path"
// import { renderToString } from "react-dom/server"
import { renderToPipeableStream } from 'react-dom/server';
import App from "../client/src/App"
import {StaticRouter }from "react-router-dom/server"
import compile from "./devBundle"
import Template from "../Template"
import createEmotionCache from "../client/src/context/createEmotionCache"
import { CacheProvider } from "@emotion/react"
// import createEmotionServer from '@emotion/server/create-instance';



const app=express()
compile(app)
app.use(cors())
app.use(compression())
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          "script-src": ["'self'", "'unsafe-eval'",],
        },
      },
}))
app.use("/dist", express.static(path.join(__dirname, "../dist")))
app.get("*", (req, res)=>{
    const context={}
   const {pipe}=renderToPipeableStream(
    <Template>
      <StaticRouter location={req.url} context={context}>
          <App/>
      </StaticRouter>
    </Template>,
    {
      bootstrapScripts:["/dist/bundle.js"],
      onShellReady(){
        res.status(200)
        res.header("Content-Type", "text/html")
        if (context.url){
          res.redirect(301, context.url)
        }
        else{
          pipe(res)
        }
      },
      onShellError() {
        res.statusCode = 500;
        res.send("<!doctype html><p>Loading...</p>");
      },
    }
    )
})

export default app