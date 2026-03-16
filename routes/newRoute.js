const Router = require("express");

const newRoute = Router();

newRoute.get("/", (req, res) => {
    console.log('sono nella new')
});

module.exports = newRoute;