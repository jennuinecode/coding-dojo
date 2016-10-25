$(document).ready(function(){

    $("button").click(function(){
     var userFirst = $("#firstname").val();
     var userLast = $("#lastname").val();
     var userEmail = $("#email").val();
     var userPhone = $("#contact").val();
     $("table").append("<tr><td>"+userFirst+"</td><td>"+userLast+"</td><td>"+userEmail+"</td><td>"+userPhone+"</td></tr>")
        return false
    });

}) //end of jQuery
