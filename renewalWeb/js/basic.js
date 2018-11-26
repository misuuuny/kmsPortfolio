		$(document).ready(function(){
			$('.gnb').mouseenter(function(){
				$('.gnb ul').stop().slideDown();
			
			});
			$('nav').mouseleave(function(){
				$('.gnb ul').stop().slideUp();
			});
		});