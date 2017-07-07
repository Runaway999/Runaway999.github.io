$(document).ready(function() {

    //load navigation bar
    $("#navigation").load("navinfo.html");
    //main menu subject list
    $('.hsubjects').on('mouseenter',function(){
        $(this).find('.option').fadeIn('fast');
    });
    $('.hsubjects').on('mouseleave',function(){
        $(this).find('.option').fadeOut('fast');
    });
});
