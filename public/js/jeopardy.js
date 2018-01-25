



$(document).ready(function () {


    $("#subUser").click(function (e) {
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

});
