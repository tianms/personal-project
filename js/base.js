var menuList = []; // 导航列表

$(function() {
	// 监听滚动事件
	$(window).scroll(function() {
		listenH1(this);
		listenH2(this);
	});
	
	// listenSwiper();
	
	// 初始化导航
	initMenu();
})

// 初始化菜单
function initMenu () {
	// 获取导航下的html内容
	var navLabelCon = $('.nav-right').html();
	// 定义选中的导航下表
	var activeIndex = -1;
	
	if (navLabelCon != null) { // 导航下有菜单
		// 实际存在的导航列表
		var navItemList = $('.nav-item');
		
		for (var n = 0; n < navItemList.length; n++) {
			if ($(navItemList[n]).hasClass('active')) {
				activeIndex = n; // 记录选中的下标
				break;
			}
		}
		// 清空菜单下原有的内容
		$('.nav-right').empty();
	} else {
		// 如果导航下没有内容，证明未加载过导航，则选中导航的第一个
		activeIndex = 1;
	}
	// 获取导航列表
	menuList = [
		{'menuName': '首页', 'id': 'layout', 'childMenu': []},
		{'menuName': '研究领域', 'id': 'yjly', 'childMenu': [{'menuName': '三维数字化','id':'h1'}, {'menuName': '人体识别跟踪','id':'h2'}, {'menuName': '智能图像识别','id':'h3'}, {'menuName': '机器人视觉','id':'h4'}]},
		{'menuName': '合作伙伴', 'id': 'hzhb', 'childMenu': [{'menuName': 'DFKI','id':'h5'}, {'menuName': '四维时代','id':'h6'}, {'menuName': '四维看看','id':'sdkk'}, {'menuName': 'GraphicsMedia','id':'h7'}]},
		{'menuName': '中德大会', 'id': 'zddh', 'childMenu': [{'menuName': '往届回顾','id':'wjhg'}]}, 
		{'menuName': '消息资讯', 'id': 'xxzx', 'childMenu': []}, 
		{'menuName': '关于我们', 'id': 'gywm', 'childMenu': []}
	];
	// 导航的开始标签
	var menuHtml = '<table><tr><td><ul class="nav-items">';
	
	menuList.forEach(function (data, index) {
		// 拼装一级导航
		menuHtml = menuHtml + '<li class="nav-item">' + data.menuName + '<span class="line"></span>';
		// 导航下级菜单的开始标签
		menuHtml = menuHtml + '<ul class="sub-items">';
		// 导航下级菜单列表
		var childMenuList = data.childMenu;
		// 如果导航下包含下级
		if (childMenuList != null && childMenuList != '' && childMenuList != [] && childMenuList.length > 0) {
			// 循环导航下级菜单内容
			childMenuList.forEach(function (childData, childIndex) {
				// 拼装导航下级菜单
				menuHtml = menuHtml + '<li>' + childData.menuName + '</li>'
			})
		}
		// 导航下级菜单结束标签
		menuHtml = menuHtml + '</ul></li>';
	})
	// 导航的结束标签
	menuHtml = menuHtml + '</ul></td></tr></table>'
	// 给导航添加菜单    
    $('.nav-right').append(menuHtml);
    $('.nav-items li:first').addClass('active');
    //导航点击跳转到指定位置
    $(".nav-items li").click(function(){
    	var text = $(this).text();
    	$(this).addClass("active").siblings().removeClass("active");
    	if($(this).parent("ul") && $(this).parent("ul").hasClass("sub-items")){
 	    	menuList.forEach(function(data,index){
	    		data.childMenu.forEach(function (childData, childIndex) {
	    			if(childData.menuName == text){
	    				var flag = "#"+childData.id;
    					window.location.hash = flag;
    					console.log(flag);
	    				if(text != "三维数字化" && text != "智能图像识别" && text!="往届回顾"){
	    					$(this).scrollTop($(flag).offset().top-300);
	    				}
	    			}
	    		})
	    	})
    	}else{
    		menuList.forEach(function(data,index){
    			if(text.indexOf(data.menuName) != -1){
    				var flag = "#"+data.id;
    				window.location.hash = flag;	
    				$(this).scrollTop($(flag).offset().top-100);
    			}
    		})
    	}
    	event.stopPropagation();
    })
}



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
	
	var labelWidth = $('.swiper-wrapper').width(); // disv宽度
	
	var moveWidth = labelWidth / groupNum; // 每次移动的距离
	
	var moveNum = 0;
	
	var afterWidth = -labelWidth;
	
	setInterval(function(){
		if (moveNum == groupNum) {
			afterWidth = -labelWidth;
			moveNum = 0;
		}
		afterWidth = afterWidth - moveWidth; // 向左移动
		moveNum ++;
		$('.swiper-wrapper').css('transition-duration', '2000ms').css('transform', 'translate3d(' + afterWidth + 'px, 1px, 2px)');
		
	},2000) 
	
	setInterval(function () {
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



