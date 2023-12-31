import express from "express";
import homeController from '../controller/homeController.js'
const route = express.Router();


/**
 * 
 * @param {*} app - express app
 */


const initWebRoutes = (app) => {
    route.get("/", homeController.handleHelloWorld);
    route.get("/user", homeController.handleUserPage);
    route.post("/users/create-user", homeController.handleCreateNewUser);
    return app.use("/", route);

}

export default initWebRoutes;