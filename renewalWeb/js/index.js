//자동슬라이드

var n = 0;
function slide(){
	n = (n+1) % 3 //1, 2, 3, 0
	$(".main").stop().animate({marginLeft:-100* n + "%"});

	$(".btn li").eq(n).addClass("on").siblings().removeClass();
}
var auto = setInterval(slide, 3000);

$("#container>.btn").mouseenter(function(){
	clearInterval(auto);
});

$(".btn").mouseleave(function(){
auto = setInterval(slide, 3000);
});



//일반적인 이미지의 진행 방향을 가진 함수
function slideImg(){
	var pos = $(".magazineimg").css("margin-left");

	pos = parseInt(pos)

$(".magazineimg").stop().animate({marginLeft:pos + -21.3* n + "%"}, function(){
	$(".magazineimg").css("margin-left",0);
	$(".magazineimg>li").first().appendTo(".magazineimg");
	});
}

//sildeImg 호출
$(".btnR").click(slideImg);

$(".btnL").click(function(){
	var pos = $(".magazineimg").css("margin-left");
	pos = parseInt(pos);
	$(".magazineimg").stop().animate({marginLeft:pos +  -21.3* n + "%"},function(){
	$(this).css("margin-left",0);
	$(".magazineimg>li").last().prependTo(".magazineimg");
	});
});

var auto = setInterval(slideImg,3000);



    $(document).ready(function() {
      $('#popup p').click(function() {
        $('#popup').hide();
      });
    });


