$(document).ready(function() {
	$(".tabs .tabs-navigation a").on("click", function(e) {

		e.preventDefault();

		$(this).siblings().removeClass("is-active");
		
		$(this).addClass("is-active");

		var selected = $(this).data("link");

		$(".js-tab").addClass("is-hidden");

		$("#"+selected).removeClass("is-hidden");
	});
});