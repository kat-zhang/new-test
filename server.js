var express = require("express");
var path = require("path");

var app = express();
/// if the port 3000 is not available then find another
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});