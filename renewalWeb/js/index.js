
//일반적인 이미지의 진행 방향을 가진 함수
function slideImg(){
	var pos = $(".magazineimg").css("margin-left");

	pos = parseInt(pos)

$(".magazineimg").stop().animate({marginLeft:pos + -23* n + "%"}, function(){
	$(".magazineimg").css("margin-left",0);
	$(".magazineimg>li").first().appendTo(".magazineimg");
	});
}

//sildeImg 호출
$(".btnR").click(slideImg);

$(".btnL").click(function(){
	var pos = $(".magazineimg").css("margin-left");
	pos = parseInt(pos);
	$(".magazineimg").stop().animate({marginLeft:pos +  -23* n + "%"},function(){
	$(this).css("margin-left",0);
	$(".magazineimg>li").last().prependTo(".magazineimg");
	});
});

var auto = setInterval(slideImg,3000);