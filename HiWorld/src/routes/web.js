import express from "express";

const route = express.Router();


/**
 * 
 * @param {*} app - express app
 */
const initWebRoutes = (app) => {
    route.get("/", (req,  res)=> {
        return res.send("Hello Kha");
    })

    return app.use("/", route);

}

export default initWebRoutes;