

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



 



}