$(document).ready(function(){
    $('img').click(function () {
        var originalSource = $(this).attr("src");
        var secondSource = $(this).attr("data-alt-src");
        $(this).attr("src" , secondSource);
        $(this).attr("data-alt-src", originalSource);
    })
})
