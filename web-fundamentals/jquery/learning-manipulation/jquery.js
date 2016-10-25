//effect methods

$("document").ready(function(){
    $("button").click(function(){
        alert("oops! buttons don't work quite yet!");
    });
    $("h2").hover(function(){ //changes the text of h2
        $("h2").text("SURPRISE!");
    })
    $("h1").click(function() {
        $("h4").append("<h1>HOWDY!</h1>");
    })
    $("h5").click(function() {
        $("h5").css("background-color", "yellow");
    })
});
