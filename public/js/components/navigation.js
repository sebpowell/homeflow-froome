$(document).ready(function() {
	$(".navigation a").on("click", function() {

		$(this).siblings().removeClass("is-active");
		$(this).addClass("is-active");
	});
});

$(window).scroll(function() {
	if ( $(window).scrollTop() > 300 ) {
		$(".navigation").addClass("is-visible");
	}

	else {
		$(".navigation").removeClass("is-visible");
	}
});