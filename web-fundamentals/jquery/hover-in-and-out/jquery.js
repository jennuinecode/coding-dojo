$(document).ready(function(){
    $("img").hover(function(){
        var cooked = $(this).attr("src");
        var alive =$(this).attr("data-alt-src")
        $(this).attr("src", alive);
        $(this).attr("data-alt-src", cooked);
    })
})
