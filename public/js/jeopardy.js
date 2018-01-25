



$(document).ready(function () {

    
$("#subUser").click(function (e){
    e.preventDefault();
    var userID = window.location.pathname.split("/").pop();
    var hbuser = {
        contestant_name: $(".new-item").val(),
        id: userID
    }
    $.ajax("/api/user", {
        type: "PUT",
        data: hbuser
    }).then(function (data) {
        
        window.location.href = "../api/leaderboard";
    });

});



//     $("button").click(function () {
//         var queryURL = "http://jservice.io/api/clues?category=" + this.id;
//         $.get(queryURL, function (data, status) {
//             console.log(data);
//             // console.log("Data: " + data + "\nStatus: " + status);
//         });
//     });


    // $(".waves-effect").click(function (event) {
    //     // event.preventDefault();
    //     var queryURL = "http://jservice.io/api/clues?category=" + this.id;
    //     console.log(this.id);
    //     $.get(queryURL, function (data, status) {
    //         console.log(data);
    //         // console.log("Data: " + data + "\nStatus: " + status);
    //     });
    // });




});
