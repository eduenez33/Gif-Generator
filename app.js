var express = require("express");
var request = require("request");
var app = express();
const port = 8080;

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  request(
    "https://api.giphy.com/v1/gifs/random?api_key=EWP0EWYETgFl8Tl4quH2zg4gdfgl3MWX",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var gifs = JSON.parse(body);
        var gif = gifs["data"]["images"]["original"]["url"];

        res.render("index", { gif: gif });
      }
    }
  );
});

app.listen(port);
