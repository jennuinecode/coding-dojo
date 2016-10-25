
$(document).ready(function(){
    // creates concacted name from input boxes and appends to card.
    function addCard() {
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
        var fullName = firstName + " " + lastName;
        $(".new-card").append("<h1>"+fullName+"</h1>"+"<pclass='see-description'>"+ "Click here for description!"+"</p>");
        var newCard = $("<div class='new-card'></div>");
     	newCard.append("<h1>"+fullName+"</h1><p class='see-description'>Click here for description!</p>");
     	$(".container").append(newCard);
     	$(".new-card").show();
    };

    $("button").click(function(){
        addCard();
    })

    $(document).on('click', '.see-description', function(){
        var userDescription = $("#user-description").val();
        $(".new-card").append("<p>"+userDescription+"</p>");
        $("h1 , .see-description").hide();
        $(".new-card").append("<button class=return>Return</button>")
        $(".return").click(function() {
            $(this).siblings().hide();
            $(this).hide();
            $("h1 , .see-description").show();
        });
    });
})//end of jQuery
