$(document).ready(function(){
    $("#datepicker").datepicker();
    $("#datepicker2").datepicker();
    $("button").click(function(){
        var userName = $("#username").val();
        var dateFrom = $("#datepicker").val();
        var dateTo = $("#datepicker2").val();
        if(userName && dateFrom && dateTo) {
            alert("Thanks "+ userName + "! Your sail dates are from "+ dateFrom + " to " + dateTo);
        } else if (!userName && !dateFrom && !dateTo){
            alert("Plese fill out all input boxes!");
        } else if (!userName){
             $("#username").after("<span color='red'>please fill in your name</span>");
        } else if (!dateFrom){
            $("#datepicker").after("<span color='red'>please fill in your departure date</span>");
        }    else if (!dateTo) {
            $("#datepicker2").after("<span color='red'>please fill in your return date</span>");
        }
    }); // end of button function
}) // end of document.ready
