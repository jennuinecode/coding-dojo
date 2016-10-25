// did not do slideUp and slideDown functions as I used the slideToggle

$(document).ready(function(){

    // click function for links/ul items
    $("ul").click(function(){
        alert("aka, the click function!");
    })
    //hover function and text function in the header
    $(".header h1").hover(function(){
        $(this).text("aka, the hover and text function!");
    })
    //fade in function on picture
    $("strong").click(function(){
        $(".bio-pic").fadeIn(function(){
            alert("ta-da! the fadein method! now click the picture!");
        });
    })

    //fade in function on about picture
    $(".bio-pic").click(function(){
        $(this).fadeOut(function(){
            alert("ta-da! the fadeout method!")
        });
    })

    //slide toggle function on CLICK for faq
    $("#q1").click(function() {
        $("#a1").slideToggle("slow");
        $(this).find('img').toggle();
    })

    $("#q2").click(function() {
        $("#a2").slideToggle("slow");
        $(this).find('img').toggle();
    })

    $("#q3").click(function() {
        $("#a3").slideToggle("slow");
        $(this).find('img').toggle();
    })

    $(".faq h2").append("<p>aka, the slide toggle and append functions</p>");

    //before function on chocolate or vanilla SECTION

    //chocolate or vanilla html function & hide
    $("#chocolate").click(function() {
        $(this).addClass("selected");
        $(this).after(function() {
            $("#vanilla").hide();
        })
    })
    $("#vanilla").click(function() {
        $(this).addClass("selected");
        $(this).after(function() {
            $("#chocolate").hide();
        })
    })

    //setting value function
    $(".your-fave").click(function() {
        var text = $(this).text();
        $( "input" ).val( text );
    });

    //using the show and hide function
    $("#my-fave").click(function() {
        $(this).hide();
        $(".burger").show("slow"); //using before function to add text before image
        $(".burger").before( "<b><br>YUM!<br></b>");
        $(".burger").after( "<b><br>looks good, right?</b>");    //using after function to add text after image
    });
    //attribute function when clicking burger
    $(".burger").click(function(){
        $(this).attr("width", "50%");
    });

}) //end of jquery
