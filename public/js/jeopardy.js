$("button").click(function(){
    var queryURL = "http://jservice.io/api/clues?category=" + this.id;
    $.get(queryURL, function(data, status){
        console.log(data);
        // console.log("Data: " + data + "\nStatus: " + status);
    });



    (function ($) {
        $(function () {
    
            //initialize all modals           
            $('.modal').modal();
    
            //now you can open modal from code
            $('#modal1').modal('open');
    
            //or by click on trigger
            $('.trigger-modal').modal();
    
        }); // end of document ready
    })(jQuery); // end of jQuery name space
});
