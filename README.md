Heroku page:  
https://celebrity-jeopardy.herokuapp.com/

Before running the app, please test your chrome browser's security setting by going to 
https://jservice.io/api/clues?category=780

If you get the following screen, please click on Advanced > proceed to `url` and you should see the response, then you can restart the app to play.

![Chrome Error](/public/assets/img/chrome-error.png)

# Celebrity Jeopardy 

Welcome to Celebrity Jeopardy. Everyone's favorite gameshow (and SNL skit) hosted by Alex Trebek. 

### How It Works
The user is first presented with 12 different categories, displayed in a similar fashion to the real Jeopardy. Once they select a category, the user will be given 10 different questions to answer, each associated with a different point value. Once the user answers all questions, their score will be tallied and they can view where they sit on the leaderboard. 

### The API 
This app gets its questions from the jService API, which holds all of the questions asked on Jeopardy. When displaying the questions for the user, I use the category to filter the questions that are displayed, and then pick 10 at random to be shown to the user, based on their level of difficulty (in correspondence with the point value tied to them). It's as legitimate as a browser-based Jeopardy game can be!

### The Leaderboard
The Leaderboard is dynamic, in that it can update to show the top players for whichever category is chosen. By default, the leaderboard is shown based on raw score regardless of category, versus the scores for a particular category. 

I accomplish this using a MySQL query (sequelize findAll method) to return the top 10 scoring users in the database, based on the category_name column in the Schema. 


_Because the questions are all real jeopardy questions, Celebrity Jeopardy is particularly tough. There are some real brainiacs in the top leaderboard. Unless you cheat, placing at the top of the leaderboard would make Alex Trebek proud!_
