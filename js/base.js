$(function() {
	// 监听滚动事件
	$(window).scroll(function() {
		listenH1(this);
		listenH2(this);
	});
	
	listenSwiper();
})

// 监听标题一的内容
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

// 监听标题二的内容
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

function listenSwiper () {
	
	var divList = $(".swiper-wrapper div");
	
	// 每一组的个数
	var groupNum = parseInt(divList.length / 3);
	
	var divList = $(".swiper-wrapper div");
	
	var labelWidth = $('.swiper-wrapper').width();
	
	var moveWidth = labelWidth / groupNum;
	setInterval(function(){
		$('.swiper-wrapper').css('transition-duration', '2000ms').css('transform', 'translate3d(-' + (labelWidth + moveWidth) + ', 0px, 0px)');
	},2000)    
	
	setInterval(function () {
		
		// var labelWidth = $('.swiper-wrapper').width();
		// setInterval(function(){$('.swiper-wrapper').css({'transition-duration':'2000ms','transform':'translate3d(10px, 0px, 0px)'});},2000ms)
		
		// transition-duration: 2000ms;
		//     transform: translate3d(-908.25px, 0px, 0px);
		
		for (var i = 0; i < groupNum; i ++) {
			if ($(divList[i]).hasClass('swiper-slide-duplicate-prev')) {
			 	$(divList[i]).removeClass('swiper-slide-duplicate-prev');
			}
			if ($(divList[i]).hasClass('swiper-slide-duplicate-active')) {
				$(divList[i]).removeClass('swiper-slide-duplicate-active');
				$(divList[i]).addClass('swiper-slide-duplicate-prev')
			}
			if ($(divList[i]).hasClass('swiper-slide-duplicate-next')) {
				if (i == 0) {
					$(divList[i + 1]).addClass('swiper-slide-duplicate-next');
					$(divList[i]).removeClass('swiper-slide-duplicate-next').addClass('swiper-slide-duplicate-active');
					$(divList[groupNum - 1]).removeClass('swiper-slide-duplicate-active').addClass('swiper-slide-duplicate-prev');
					$(divList[groupNum - 2]).removeClass('swiper-slide-duplicate-prev');
					break;
				}
				if (i == 1) {
					$(divList[i + 1]).addClass('swiper-slide-duplicate-next');
					$(divList[i]).removeClass('swiper-slide-duplicate-next').addClass('swiper-slide-duplicate-active');
					$(divList[i - 1]).removeClass('swiper-slide-duplicate-active').addClass('swiper-slide-duplicate-prev');
					$(divList[groupNum - 1]).removeClass('swiper-slide-duplicate-prev');
					break;
				}
				$(divList[i]).removeClass('swiper-slide-duplicate-next');
				$(divList[i]).addClass('swiper-slide-duplicate-active');
				if (i == (groupNum - 1)) { // 如果当前是最后一个
					$(divList[0]).addClass('swiper-slide-duplicate-next');
				} else {
					$(divList[i + 1]).addClass('swiper-slide-duplicate-next');
				}
				break;
			}
		}
	}, 2000);
	setInterval(function () {
		for (var s = groupNum; s < groupNum * 2; s ++) {
			if ($(divList[s]).hasClass('swiper-slide-duplicate-prev')) {
			 	$(divList[s]).removeClass('swiper-slide-duplicate-prev');
			}
			if ($(divList[s]).hasClass('swiper-slide-duplicate-active')) {
				$(divList[s]).removeClass('swiper-slide-duplicate-active');
				$(divList[s]).addClass('swiper-slide-duplicate-prev')
			}
			if ($(divList[s]).hasClass('swiper-slide-duplicate-next')) {
				if (s == groupNum) {
					$(divList[s + 1]).addClass('swiper-slide-duplicate-next');
					$(divList[s]).removeClass('swiper-slide-duplicate-next').addClass('swiper-slide-duplicate-active');
					$(divList[groupNum * 2 - 1]).removeClass('swiper-slide-duplicate-active').addClass('swiper-slide-duplicate-prev');
					$(divList[groupNum * 2 - 2]).removeClass('swiper-slide-duplicate-prev');
					break;
				}
				if (s == groupNum + 1) {
					$(divList[s + 1]).addClass('swiper-slide-duplicate-next');
					$(divList[s]).removeClass('swiper-slide-duplicate-next').addClass('swiper-slide-duplicate-active');
					$(divList[s - 1]).removeClass('swiper-slide-duplicate-active').addClass('swiper-slide-duplicate-prev');
					$(divList[groupNum * 2- 1]).removeClass('swiper-slide-duplicate-prev');
					break;
				}
				$(divList[s]).removeClass('swiper-slide-duplicate-next');
				$(divList[s]).addClass('swiper-slide-duplicate-active');
				if (s == (groupNum * 2 - 1)) { // 如果当前是最后一个
					$(divList[groupNum]).addClass('swiper-slide-duplicate-next');
				} else {
					$(divList[s + 1]).addClass('swiper-slide-duplicate-next');
				}
				break;
			}
		}
	}, 2000);
	setInterval(function () {
		for (var t = groupNum * 2; t < divList.length; t ++) {
			if ($(divList[t]).hasClass('swiper-slide-duplicate-prev')) {
			 	$(divList[t]).removeClass('swiper-slide-duplicate-prev');
			}
			if ($(divList[t]).hasClass('swiper-slide-duplicate-active')) {
				$(divList[t]).removeClass('swiper-slide-duplicate-active');
				$(divList[t]).addClass('swiper-slide-duplicate-prev')
			}
			if ($(divList[t]).hasClass('swiper-slide-duplicate-next')) {
				if (t == groupNum * 2) {
					$(divList[t + 1]).addClass('swiper-slide-duplicate-next');
					$(divList[t]).removeClass('swiper-slide-duplicate-next').addClass('swiper-slide-duplicate-active');
					$(divList[divList.length - 1]).removeClass('swiper-slide-duplicate-active').addClass('swiper-slide-duplicate-prev');
					$(divList[divList.length - 2]).removeClass('swiper-slide-duplicate-prev');
					break;
				}
				if (t == groupNum * 2 + 1) {
					$(divList[t + 1]).addClass('swiper-slide-duplicate-next');
					$(divList[t]).removeClass('swiper-slide-duplicate-next').addClass('swiper-slide-duplicate-active');
					$(divList[t - 1]).removeClass('swiper-slide-duplicate-active').addClass('swiper-slide-duplicate-prev');
					$(divList[divList.length- 1]).removeClass('swiper-slide-duplicate-prev');
					break;
				}
				$(divList[t]).removeClass('swiper-slide-duplicate-next');
				$(divList[t]).addClass('swiper-slide-duplicate-active');
				if (t == (divList.length - 1)) { // 如果当前是最后一个
					$(divList[groupNum * 2]).addClass('swiper-slide-duplicate-next');
				} else {
					$(divList[t + 1]).addClass('swiper-slide-duplicate-next');
				}
				break;
			}
		}
	}, 2000);
}
