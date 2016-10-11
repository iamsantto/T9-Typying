$(document).ready(function(){
    $("#phone").find("button").mouseup(function(event){
        var button_pressed = $(event.currentTarget).data("value")
        $("#result").val(t9($("#result").val(),button_pressed))
    })
})
function t9(text,button_pressed){



    
    return button_pressed
}
