const express = require("express");
const path = require("path");
const indexRoute = require("./routes/indexRoute");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));


app.use("/", indexRoute);
app.use("/new", newRoute);

app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});