$(document).ready(function(){
    $( "#dialog" ).dialog();
    $("#accordion").accordion();
    $("#tabs").tabs()
    $("#tabs").click(function(){
        $("this").css("background-color" , "#666699");
    })
})
