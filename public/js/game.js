
$(function () {
    var playerScore = 0;
    var questions = {};
    var queryURL = "http://jservice.io/api/clues?category=" + $("#categoryID").text();

    $.get(queryURL, function (data, status) {
        console.log(data);
        questions = generateQuestions(data);
        console.log(questions);

        var cateogoryName = data[0].category.title;
        var categoryNameCapital = uppercase(cateogoryName);

        //Category Header
        $("#categoryHeader").text("Category: " + categoryNameCapital);

        //Populating question modals with the question text
        $("#question200").text(questions.new200[0].question);
        $("#question400").text(questions.new400[0].question);
        $("#question600").text(questions.new600[0].question);
        $("#question800").text(questions.new800[0].question);
        $("#question1000").text(questions.new1000[0].question);

        //Same process for Double Jeopardy Questions
        $("#question400dbl").text(questions.new200[1].question);
        $("#question800dbl").text(questions.new400[1].question);
        $("#question1200dbl").text(questions.new600[1].question);
        $("#question1600dbl").text(questions.new800[1].question);
        $("#question2000dbl").text(questions.new1000[1].question);

    });
    //Make an on click event handler for when the user hits the modal's submit button
    $("#sub-btn1").click(function () {

        //Collect the user's answer and store it in a variable

        //Then run a function that compares the user's answer to the correct answer
        //and sets a boolean value attribute for that button (to be used for red/green)
        //and adds the point value to the user's score (if they got it correct)

        var playerAnswer = $("#inputanswer1").val();

        checkAnswer(playerAnswer, questions.new200[0].answer, "#q-200");
        console.log(playerScore);
    });

    $("#sub-btn2").click(function () {

        //Collect the user's answer and store it in a variable

        //Then run a function that compares the user's answer to the correct answer
        //and sets a boolean value attribute for that button (to be used for red/green)
        //and adds the point value to the user's score (if they got it correct)

        var playerAnswer = $("#inputanswer2").val();

        checkAnswer(playerAnswer, questions.new400[0].answer, "#q-400");
        console.log(playerScore);
    });

    $("#sub-btn3").click(function () {

        //Collect the user's answer and store it in a variable

        //Then run a function that compares the user's answer to the correct answer
        //and sets a boolean value attribute for that button (to be used for red/green)
        //and adds the point value to the user's score (if they got it correct)

        var playerAnswer = $("#inputanswer3").val();

        checkAnswer(playerAnswer, questions.new600[0].answer, "#q-600");
        console.log(playerScore);
    });

    $("#sub-btn4").click(function () {

        //Collect the user's answer and store it in a variable

        //Then run a function that compares the user's answer to the correct answer
        //and sets a boolean value attribute for that button (to be used for red/green)
        //and adds the point value to the user's score (if they got it correct)

        var playerAnswer = $("#inputanswer4").val();

        checkAnswer(playerAnswer, questions.new800[0].answer, "#q-800");
        console.log(playerScore);
    });

    $("#sub-btn5").click(function () {

        //Collect the user's answer and store it in a variable

        //Then run a function that compares the user's answer to the correct answer
        //and sets a boolean value attribute for that button (to be used for red/green)
        //and adds the point value to the user's score (if they got it correct)

        var playerAnswer = $("#inputanswer5").val();

        checkAnswer(playerAnswer, questions.new1000[0].answer, "#q-1000");
        console.log(playerScore);
    });

    $("#sub-btn6").click(function () {

        //Collect the user's answer and store it in a variable

        //Then run a function that compares the user's answer to the correct answer
        //and sets a boolean value attribute for that button (to be used for red/green)
        //and adds the point value to the user's score (if they got it correct)

        var playerAnswer = $("#inputanswer6").val();

        checkAnswer(playerAnswer, questions.new200[1].answer, "#dbl-q-400");
        console.log(playerScore);
    });

    $("#sub-btn7").click(function () {

        //Collect the user's answer and store it in a variable

        //Then run a function that compares the user's answer to the correct answer
        //and sets a boolean value attribute for that button (to be used for red/green)
        //and adds the point value to the user's score (if they got it correct)

        var playerAnswer = $("#inputanswer7").val();

        checkAnswer(playerAnswer, questions.new400[1].answer, "#dbl-q-800");
        console.log(playerScore);
    });

    $("#sub-btn8").click(function () {

        //Collect the user's answer and store it in a variable

        //Then run a function that compares the user's answer to the correct answer
        //and sets a boolean value attribute for that button (to be used for red/green)
        //and adds the point value to the user's score (if they got it correct)

        var playerAnswer = $("#inputanswer8").val();

        checkAnswer(playerAnswer, questions.new600[1].answer, "#dbl-q-1200");
        console.log(playerScore);
    });

    $("#sub-btn9").click(function () {

        //Collect the user's answer and store it in a variable

        //Then run a function that compares the user's answer to the correct answer
        //and sets a boolean value attribute for that button (to be used for red/green)
        //and adds the point value to the user's score (if they got it correct)

        var playerAnswer = $("#inputanswer9").val();

        checkAnswer(playerAnswer, questions.new800[1].answer, "#dbl-q-1600");
        console.log(playerScore);
    });

    $("#sub-btn10").click(function () {

        //Collect the user's answer and store it in a variable

        //Then run a function that compares the user's answer to the correct answer
        //and sets a boolean value attribute for that button (to be used for red/green)
        //and adds the point value to the user's score (if they got it correct)

        var playerAnswer = $("#inputanswer10").val();

        checkAnswer(playerAnswer, questions.new1000[1].answer, "#dbl-q-2000");
        console.log(playerScore);
    });

    function generateQuestions(data) {

        var questions200 = [];
        var questions400 = [];
        var questions600 = [];
        var questions800 = [];
        var questions1000 = [];

        for (i = 0; i < data.length; i++) {
            if (data[i].value === 100) {
                questions200.push(data[i]);
            }
            if (data[i].value === 200) {
                questions400.push(data[i]);
            }
            if (data[i].value === 300) {
                questions600.push(data[i]);
            }
            if (data[i].value === 400) {
                questions800.push(data[i]);
            }
            if (data[i].value === 500) {
                questions1000.push(data[i]);
            }
        }

        var new200 = TwoQuestions(questions200);
        var new400 = TwoQuestions(questions400);
        var new600 = TwoQuestions(questions600);
        var new800 = TwoQuestions(questions800);
        var new1000 = TwoQuestions(questions1000);

        var questions = {
            new200,
            new400,
            new600,
            new800,
            new1000
        };

        return questions;

    }


    function TwoQuestions(arrayOne) {
        var arrayTwo = [];
        for (i = 0; i < 2; i++) {
            var randomIndex = Math.floor(Math.random() * arrayOne.length);
            console.log("Array Length: " + arrayOne.length);
            console.log("Random Index Chosen: " + randomIndex);
            arrayTwo.push(arrayOne.splice(randomIndex)[0]);
        }
        return arrayTwo;
    }

    function uppercase(str) {
        var array1 = str.split(' ');
        var newarray1 = [];

        for (var x = 0; x < array1.length; x++) {
            newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
        }
        return newarray1.join(' ');
    }


    function checkAnswer(userAnswer, storedAnswer, questionIdString) {

        var formattedAnswer = userAnswer.replace(/\s+/g, "").toLowerCase();
        var storedFormatted = storedAnswer.replace(/\s+/g, "").toLowerCase();

        if (formattedAnswer === storedFormatted) {
            $(questionIdString).attr("correct", "true");
            var points = parseInt($(questionIdString).text());
            playerScore += points;

        }

        else {
            $(questionIdString).attr("correct", "false");
        }
    }

});
