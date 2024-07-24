import app from "./express";
import config from "../config/config"

app.listen(config.port,  ()=>{console.log("SERVER STARTED  ..................")})