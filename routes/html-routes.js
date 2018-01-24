

// Dependencies

var path = require("path");

// Routes 

module.exports = function(app){

  app.get("/test", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });

    app.get("/", function(req, res) {
        res.render("../views/index.handlebars");
      });

      app.get("/category", function(req, res) {
        res.render("../views/category.handlebars");
      });

      app.get("/game/:category?", function(req, res) {
        var category = req.params.category;
        res.render("../views/game.handlebars", {questions: category});
      });

      app.get("/leaderboard", function(req, res) {
        res.render("../views/leaderboard.handlebars");
      });

      app.get("/question", function(req, res) {
        res.render("../views/question.handlebars");
      });


    
}