$(function(){
  // トップに戻るボタン
  var topBtn=$('#pageTop');
  topBtn.hide();
  // 80以下で表示する
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    }
  });
  // クリックしたら上に戻る
  topBtn.click(function(){
    $('body,html').animate({
      scrollTop: 0},500);
      return false;
  });

  // アンカーリンクへのクリックアニメーション
  var headerHight = 80;   //headerの高さ
  $('a[href^=#]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
	
//	フェードインモーション
	$(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
	 });
		
//	Welcomeのフェードイン
	$('.bg_fadein').animate({
    	opacity: 100}, 40000);
	
//	ハンバーガーメニュー
	  $('.toggle').click(function(){
		$(this).toggleClass('active');
		  if($(this).hasClass('active')){
			 $('.nav-content').addClass('active'); 
			 }else{
				 $('.nav-content').removeClass('active');
			 }
	  });
	 
	
	
      
      var beforeBg = '';
      $(window).on('load scroll touchmove', function() {
          $scrollTop = $(window).scrollTop();
          $changePoint1 = $('.bg2').get(0).offsetTop;
          $changePoint2 = $('.bg3').get(0).offsetTop;
          $changePoint3 = $('.bg4').get(0).offsetTop;
		  if ($scrollTop > $changePoint3){
              if(beforeBg !=="bgD"){
                $('.fix.bg1').removeClass('bgC');
				$('.fix.bg1').removeClass('bgA');
                $('.fix.bg1').addClass('bgD');
                beforeBg = 'bgD';
              }
           } else if ($scrollTop > $changePoint2){
              if(beforeBg !=="bgC"){
                $('.fix.bg1').removeClass('bgB');
				$('.fix.bg1').removeClass('bgA');
                $('.fix.bg1').removeClass('bgD');
                $('.fix.bg1').addClass('bgC');
                beforeBg = 'bgC';
              }
	   } else if ($scrollTop > $changePoint1){
              if(beforeBg !=="bgB"){
                $('.fix.bg1').removeClass('bgA');
                $('.fix.bg1').removeClass('bgC');
				$('.fix.bg1').removeClass('bgD');
                $('.fix.bg1').addClass('bgB');
                beforeBg = 'bgB';
              }
	   } else {
              if(beforeBg !=="bgA"){
                $('.fix.bg1').removeClass('bgB');
				$('.fix.bg1').removeClass('bgD');
				$('.fix.bg1').removeClass('bgC');
                $('.fix.bg1').addClass('bgA');
                beforeBg = 'bgA';
              }
              
           }
      });
	
	
	
	
	
});



