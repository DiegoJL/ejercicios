$(document).ready(function(){
	
	function mobileNavigation() {

		if ($(window).width() < 992) {

			$('#hamburger').click(function() {
				$('#mobile-navigation').slideDown('slow', function(){
					$('#hamburger').hide();
					$('#cross').show();
				});
			});

			$('#cross').click(function(){
				$('#mobile-navigation').slideUp('slow', function(){
					$('#cross').hide();
					$('#hamburger').show();
				});
			});
		}	
	}

	mobileNavigation();

	$(window).on('resize', mobileNavigation());

});