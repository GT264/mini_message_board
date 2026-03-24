const Router = require("express");

const newRoute = Router();

newRoute.get("/", (req, res) => {
    res.render("form");
});

module.exports = newRoute;