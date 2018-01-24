$(function () {
    var questions = {};
    var queryURL = "http://jservice.io/api/clues?category=" + $("#categoryID").text();
    $.get(queryURL, function (data, status) {
        console.log(data);
        questions = generateQuestions(data);
        console.log(questions);
    $("#question200").text(questions.new200[0].question);
    });
    
});

function generateQuestions(data) {

    var questions200=[];
    var questions400=[];
    var questions600=[];
    var questions800=[];
    var questions1000=[];

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
    var arrayTwo=[];
    for (i = 0; i < 2; i++) {
        var randomIndex = Math.floor(Math.random() * arrayOne.length);
        arrayTwo.push(arrayOne.splice(randomIndex)[0]);
    }
    return arrayTwo;
}





