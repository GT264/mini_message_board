const Router = require("express");

const indexRoute = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRoute.get("/", (req, res) => {
    console.log('sono nella index')
});

module.exports = indexRoute;