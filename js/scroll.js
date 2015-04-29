	$(document).ready(function() {
		$(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        }); 
 
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

		
		$('a[href^="#"]').click(function(event) {
			var id = $(this).attr("href");
			var offset = 0;
			var target = $(id).offset().top;

			$('html, body').animate({scrollTop:target}, 500);
			event.preventDefault();
		});
			});