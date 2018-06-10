$(document).ready(function(){
	$('.slick').slick({
		centerMode: true,
		autoplay: true,
		arrows: false,
		slidesToShow: 3,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	$('.slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".slick-text").addClass('d-none');
		$(".slick-text[data-id='"+nextSlide+"']").removeClass('d-none');
	});
});	