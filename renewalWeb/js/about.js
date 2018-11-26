					$(document).ready(function(){
			$('.menu li:last-child').click(function(){
				$('.menu2').stop().slideDown();
			
			});
			$(' .menu').mouseleave(function(){
				$('.menu2').stop().slideUp();
			});
		});