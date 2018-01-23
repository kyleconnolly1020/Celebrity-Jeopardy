

// Dependencies

var path = require("path");

// Routes 

module.exports = function(app){


    app.get("/", function(req, res) {
        res.render("index");
      });

      app.get("/category", function(req, res) {
        res.render("../views/category.handlebars");
      });

      app.get("/game", function(req, res) {
        res.render("../views/game.handlebars");
      });

      app.get("/leaderboard", function(req, res) {
        res.render("../views/leaderboard.handlebars");
      });

      app.get("/question", function(req, res) {
        res.render("../views/question.handlebars");
      });


      



















}