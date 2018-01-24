$(function () {
    var queryURL = "http://jservice.io/api/clues?category=" + $("#categoryID").text();
    $.get(queryURL, function (data, status) {
        console.log(data);
    });
 

// Question validations

var count = 0;
    $('#modal1').modal();
    $("#sub-btn1").click(function () {
        var text = $("#answer1").val();
        var answer = $("#q-200").data("value");
        var value = $("#q-200").val();
        console.log("worked" + text);
        console.log("worked" + answer);
        console.log(value);
        $("#q-200").removeClass("modal-trigger");
        if (text === answer) {
            console.log("if working");
            count += parseInt($("#q-200").val());
            console.log(count);
        }
        

    })
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
        window.onbeforeunload = function() {
    return "submit";
}



});




