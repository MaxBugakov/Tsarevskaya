$(document).ready( function(){
    // $("#send-button").on("click", function() {
    //     console.log("Sended");
    // });
    let send_button_click_flag=false;
    $("#send-button").click(function(e) {
        e.preventDefault();
        console.log("Hello!");
        if (send_button_click_flag==false) {
            $('.form-title').addClass('eror-form');
            $('.form').addClass('eror-form');
            $('.send-message-wrapper').removeClass('eror-form');
            send_button_click_flag=true;
        }
    });
});