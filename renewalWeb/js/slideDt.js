var intervalVisual;
var rollDuration = 5000;
var visualNum = 0;
var maxVisual;
var maxVisual = 2;

    intervalVisual = setInterval('visualRolling()', rollDuration);

    $('.controller').find('.btns').find('a').eq(1).click(function(){
        clearInterval(intervalVisual);
        $(".visualBg").eq(visualNum).stop().animate({left:"-100%"}, 700, "easeOutQuart");
        $(".productBt").eq(visualNum).stop().css('display', 'none');
        visualNum++;
        if(visualNum > maxVisual) visualNum = 0;
        $(".visualBg").eq(visualNum).stop().animate({left:"100%"}, 0, "easeOutQuart");
        $(".visualBg").eq(visualNum).stop().animate({left:"0"}, 700, "easeOutQuart");
        $(".productBt").eq(visualNum).stop().css('display', 'block');
        intervalVisual = setInterval('visualRolling()', rollDuration);
    });

    $('.controller').find('.btns').find('a').eq(0).click(function(){
        clearInterval(intervalVisual);
        $(".visualBg").eq(visualNum).stop().animate({left:"100%"}, 700, "easeOutQuart");
        $(".productBt").eq(visualNum).stop().css('display', 'none');
        visualNum--;
        if(visualNum < 0) visualNum = maxVisual;
        $(".visualBg").eq(visualNum).stop().animate({left:"-100%"}, 0, "easeOutQuart");
        $(".visualBg").eq(visualNum).stop().animate({left:"0"}, 700, "easeOutQuart");
        $(".productBt").eq(visualNum).stop().css('display', 'block');
        intervalVisual = setInterval('visualRolling()', rollDuration);
    });

    if($(window).height()>768){
        $(".controller").css("padding-top", "237px");
        $(".controller").css("padding-bottom", "46px");
    }else{
        $(".controller").css("padding-top", "0");
        $(".controller").css("padding-bottom", "150px");
    }

    $(window).resize(function(){
        if($(window).height()>768){
            $(".controller").stop().animate({paddingTop: "237px", paddingBottom: "46px"},  700, "easeOutQuart");
        }else{
            $(".controller").stop().animate({paddingTop: "0", paddingBottom: "150px"}, 700, "easeOutQuart");
        }
    });

function visualRolling(){
    $(".visualBg").eq(visualNum).stop().animate({left:"-100%"}, 1700, "easeOutQuart");
    $(".productBt").eq(visualNum).stop(true, true).fadeOut(0);
    visualNum++;
    if(visualNum > maxVisual) visualNum = 0;
    //console.log(visualNum)
    $(".visualBg").eq(visualNum).stop().animate({left:"100%"}, 0, "easeOutQuart"); 
    $(".visualBg").eq(visualNum).stop().animate({left:"0%"}, 1700, "easeOutQuart");
    $(".productBt").eq(visualNum).stop(true, true).fadeIn(0);
}