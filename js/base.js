$(function() {
	// 监听滚动事件
	$(window).scroll(function() {
		listenH1(this);
		listenH2(this);
	});
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
	var groupNum = parseInt(divList / 3) - 1;
	
	setTimeout(function () {
		$(".swiper-wrapper div").each(function(index, element){
			if ($(this).hasClass('.swiper-slide-duplicate')) {
				if (index >= 0 && index <= groupNum) { // 第一组
					if ($(this).hasClass('swiper-slide-duplicate-prev')) {
						$(this).removeClass('swiper-slide-duplicate-prev');
					}
					if ($(this).hasClass('swiper-slide-duplicate-active')) {
						$(this).removeClass('swiper-slide-duplicate-active');
						$(this).addClass('swiper-slide-duplicate-prev')
					}
					if ($(this).hasClass('swiper-slide-duplicate-next')) {
						$(this).removeClass('swiper-slide-duplicate-next');
						$(this).addClass('swiper-slide-duplicate-active');
						if (index == groupNum) { // 如果当前是最后一个
							$(".swiper-wrapper div")[0].addClass('swiper-slide-duplicate-next')
						} else {
							$(this).next().addClass('swiper-slide-duplicate-next');
						}
						return;
					}
				}
			}
		});
	}, 1000);
	setTimeout(function () {
		$(".swiper-wrapper div").each(function(index, element){
			if (index > groupNum && index <= groupNum * 2) { // 第二组
				if ($(this).hasClass('swiper-slide-duplicate-prev')) {
					$(this).removeClass('swiper-slide-duplicate-prev');
				}
				if ($(this).hasClass('swiper-slide-duplicate-active')) {
					$(this).removeClass('swiper-slide-duplicate-active');
					$(this).addClass('swiper-slide-duplicate-prev')
				}
				if ($(this).hasClass('swiper-slide-duplicate-next')) {
					$(this).removeClass('swiper-slide-duplicate-next');
					$(this).addClass('swiper-slide-duplicate-active');
					if (index == groupNum) { // 如果当前是最后一个
						$(".swiper-wrapper div")[groupNum + 1].addClass('swiper-slide-duplicate-next')
					} else {
						$(this).next().addClass('swiper-slide-duplicate-next');
					}
					return;
				}
			}
		});
	}, 1000);
	setTimeout(function () {
		$(".swiper-wrapper div").each(function(index, element){
			if (index > groupNum * 2 && index <= groupNum * 3) { // 第三组
				if ($(this).hasClass('swiper-slide-duplicate-prev')) {
					$(this).removeClass('swiper-slide-duplicate-prev');
				}
				if ($(this).hasClass('swiper-slide-duplicate-active')) {
					$(this).removeClass('swiper-slide-duplicate-active');
					$(this).addClass('swiper-slide-duplicate-prev')
				}
				if ($(this).hasClass('swiper-slide-duplicate-next')) {
					$(this).removeClass('swiper-slide-duplicate-next');
					$(this).addClass('swiper-slide-duplicate-active');
					if (index == groupNum) { // 如果当前是最后一个
						$(".swiper-wrapper div")[0].addClass('swiper-slide-duplicate-next')
					} else {
						$(this).next().addClass('swiper-slide-duplicate-next');
					}
					return;
				}
			}
		});
	}, 1000);
}
