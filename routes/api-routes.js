
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/leaderboard/:category?", function (req, res) {
    // findAll returns all entries for a table when used with no options
    if(!req.params.category) {
      db.Jeopardy.findAll({
        limit: [10]
      }).then(function (data) {
        // We have access to the todos as an argument inside of the callback function
        res.render("leaderboard", {leaderboard: data });
      });
    } else {
      db.Jeopardy.findAll({
        where: { category_name: req.params.category },
        limit: [10]
      }).then(function (data) {
        res.render("leaderboard", {leaderboard: data});
        // res.json(data);
      });
    }

    app.post("/api/jeopardy", function(req, res) {
      db.Jeopardy.create(req.body).then(function(dbJeopardy) {
        res.json(Jeopardy);
      });
    });
   
  });

}
