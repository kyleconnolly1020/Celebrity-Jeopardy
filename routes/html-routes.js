

// Dependencies

var path = require("path");

// Routes 

module.exports = function(app){

  app.get("/test", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });

    app.get("/", function(req, res) {
        res.render("index");
      });

      app.get("/category", function(req, res) {
        res.render("category");
      });

      app.get("/game/:category?", function(req, res) {
        var category = req.params.category;
        res.render("game", {questions: category});
      });

      app.get("/leaderboard", function(req, res) {
        res.render("leaderboard");
      });

      app.get("/question", function(req, res) {
        res.render("question");
      });


    
}