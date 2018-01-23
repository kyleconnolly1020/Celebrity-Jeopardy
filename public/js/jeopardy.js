$("button").click(function(){
    var queryURL = "http://jservice.io/api/clues?category=" + this.id;
    $.get(queryURL, function(data, status){
        console.log(data);
    
    });
});