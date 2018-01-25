

// Dependencies

var path = require("path");
var db = require("../models");

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

      app.get("/contestant-info/:id?", function(req, res) {
        db.Jeopardy.findOne({
          where: {
            id: req.params.id
          }
        }).then(function(data){
          // res.json(data);
          var hbData = {
            hbData: data
          };
          res.render("contestant-info", hbData);
        })
        
      });

      app.get("/credits", function(req, res) {
        res.render("credits");
      });


    
}