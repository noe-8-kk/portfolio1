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
	$(function(){
	  $('.toggle').click(function(){
		$(this).toggleClass('active');
		  if($(this).hasClass('active')){
			 $('.nav-content').addClass('active'); 
			 }else{
				 $('.nav-content').removeClass('active');
			 }
	  });
	  });
	
	
	
	
	
});



