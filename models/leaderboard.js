module.exports = function(sequelize, DataTypes) {
    var Jeopardy = sequelize.define("Jeopardy", {
        contestant_name: DataTypes.STRING,
        category_name: DataTypes.STRING,
        earnings: DataTypes.INTEGER,
    });
 
    return Jeopardy;
 };

