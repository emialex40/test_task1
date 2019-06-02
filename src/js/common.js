jQuery(document).ready(function ($) {

    // *******in top************
    var top_show = 50;//position the button show
    var delay = 500; // scroll delay
    $(document).ready(function() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > top_show) $('#ontop').fadeIn();
            else $('#ontop').fadeOut();
        });
        $('#ontop').click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, delay);
        });
    });

});
  
  
  
