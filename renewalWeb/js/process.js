$(document).ready(function(){
	   $(function() {  
        $("#top").click(function() {
            $('html, body').animate({
                scrollTop : 0
            }, 500);
            return false;
        });
    });
});