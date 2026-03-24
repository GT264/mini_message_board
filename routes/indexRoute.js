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
    res.render("index", {messages: messages, title: "Mini Messageboard"})
});

indexRoute.post("/new", (req, res) => {
  const { message, user } = req.body;
  messages.push({ text: message, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = indexRoute;