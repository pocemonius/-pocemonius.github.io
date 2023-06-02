$(function() {

    //accordion for specialization
	$(".specialization__title").on("click", function(e) {
		e.preventDefault();
		var $this = $(this);
		if (!$this.hasClass("specialization__title-active")) {
            $(".specialization__title").removeClass("specialization__title-active");
            $(".specialization__item-wrapper").removeClass("specialization__item-wrapper-active");
			$this.addClass("specialization__title-active");
            $this.next(".specialization__item-wrapper").addClass("specialization__item-wrapper-active");
            $('html, body').animate({
                scrollTop: $this.offset().top - 15
            }, 600);
		} else {
            $(".specialization__title").removeClass("specialization__title-active");
            $(".specialization__item-wrapper").removeClass("specialization__item-wrapper-active");
            /*$('html, body').animate({
                scrollTop: $this.offset().top - 15
            }, 600);*/
        }
	});
    

    //scroll up
	$(".scroll-top").click(function() { 
        $('html, body').animate({
            scrollTop: 0 
        }, 1000);
    });

    
    //scroll to contacts
	$(".banner__link").click(function() {
        $('html, body').animate({
            scrollTop: $(".footer").offset().top
        }, 1000);
    });
});