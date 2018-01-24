$(function () {
    var queryURL = "http://jservice.io/api/clues?category=" + $("#categoryID").text();
    $.get(queryURL, function (data, status) {
        console.log(data);
    });
});


