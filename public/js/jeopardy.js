
$(document).ready(function () {

    $("button").click(function () {
        var queryURL = "http://jservice.io/api/clues?category=" + this.id;
        $.get(queryURL, function (data, status) {
            console.log(data);
            // console.log("Data: " + data + "\nStatus: " + status);
        });
    });


    $(".waves-effect").click(function (event) {
        // event.preventDefault();
        var queryURL = "http://jservice.io/api/clues?category=" + this.id;
        console.log(this.id);
        $.get(queryURL, function (data, status) {
            console.log(data);
            // console.log("Data: " + data + "\nStatus: " + status);
        });
    });



});
