$(function() {
	// 监听滚动事件
	$(window).scroll(function() {
		listenH1(this);
		listenH2(this);
	});
})

function listenH1 (event) {
	$(".home-1 section").each(function(index, element){
		var labelHeight = $(this).offset().top;
		// 渐入
		if($(event).scrollTop() > (labelHeight - 400)) {
			if ($(this).find('img').hasClass('fadeIn')) {
				return;
			}
			if (index % 2 == 0) {
				$(this).find('.d-name').removeClass('l-animation');
				$(this).find('.d-describe').removeClass('l-animation');
			} else {
				$(this).find('.d-name').removeClass('r-animation');
				$(this).find('.d-describe').removeClass('r-animation');
			}
			$(this).find('img').addClass('fadeIn');
		} 
		
		// 渐出
		if ($(event).scrollTop() < (labelHeight - 500)) {
			if (!$(this).find('img').hasClass('fadeIn')) {
				return;
			}
			if (index % 2 == 0) {
				$(this).find('.d-name').addClass('l-animation');
				$(this).find('.d-describe').addClass('l-animation');
			} else {
				$(this).find('.d-name').addClass('r-animation');
				$(this).find('.d-describe').addClass('r-animation');
			}
			$(this).find('img').removeClass('fadeIn');
		}
	});
}

function listenH2 (event) {
	$(".home-2 section").each(function(index, element){
		var labelHeight = $(this).offset().top;
		// 渐入
		if($(event).scrollTop() > (labelHeight - 400)) {
			if ($(this).find('img').hasClass('robotClip') || $(this).find('img').hasClass('robotClip-r')) {
				return;
			}
			if (index % 2 == 0) {
				$(this).find('img').addClass('robotClip');
			} else {
				$(this).find('img').addClass('robotClip-r');
			}
		} 
		
		// 渐出
		if ($(event).scrollTop() < (labelHeight)) {
			if (!$(this).find('img').hasClass('robotClip') && !$(this).find('img').hasClass('robotClip-r')) {
				return;
			}
			if (index % 2 == 0) {
				$(this).find('img').removeClass('robotClip');
			} else {
				$(this).find('img').removeClass('robotClip-r');
			}
		}
	});
}
