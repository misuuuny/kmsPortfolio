

//메뉴 이벤트
var ht = $(window).height();
$("article").height(ht);

var aboutboxH = $(".aboutbox>img").height();
$(".box").height(aboutboxH);

$(window).on("resize", function(){
	var ht = $(window).height();
	$("article").height(ht);

	var aboutboxH = $(".aboutbox>img").height();
	$(".box").height(aboutboxH);
});

$("#second>h2").click(function(){
	$("#first").animate({left:-85 + "%"})
	$("#second").animate({left:0})
	$("#third").animate({left:0})
});
$("#third>h2").click(function(){
	$("#first").animate({left:-85 + "%"})
	$("#second").animate({left:-85 + "%"})
	$("#third").animate({left:0})
 });
$("#first>h2").click(function(){
	$("#first").animate({left:0})
	$("#second").animate({left:0})
	$("#third").animate({left:0})
 });

//세번째 페이지 이벤트
$(".btn2 li").eq(0).on("click", function(){
		$(".aboutbox").stop().animate({marginTop:0},700);
});
$(".btn2 li").eq(1).on("click", function(){
		$(".aboutbox").stop().animate({marginTop:-24 + "%"},700);
});

