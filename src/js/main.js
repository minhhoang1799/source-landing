const App = {
	InitLazyLoad: () => {
		return new LazyLoad({
			elements_selector: ".lazyload"
		});
	}
}

function height(el) {
	var height = 0;
	$(el).each(function () {
		var thisHeight = $(this).height();
		if (thisHeight > height) {
			height = thisHeight;
		}
		setTimeout(() => {
			$(el).height(height)
		}, 100)
	})
}
let header = {
	scrollActive: function () {
		let height = $('header').height()
		if ($(window).scrollTop() > height) {
			$('header').addClass('active')
		} else {
			$('header').removeClass('active')
		}
	},
}

function setBackgroundElement() {
	$('[setBackground]').each(function () {
		var background = $(this).attr('setBackground')
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-size": "cover",
			"background-position": "center center"
		})
	})
	$('[setBackgroundRepeat]').each(function () {
		var background = $(this).attr('setBackgroundRepeat')
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-repeat": "repeat"
		})
	})
}

function mappingMenu(){
	let mainmenu = $('header .nav').mapping({
		mobileWrapper: 'header .nav-mobile',
		mobileMethod: 'appendTo',
		desktopWrapper: 'header .header__bottom',
		desktopMethod: 'appendTo',
		breakpoint: 1200
	});
}

function btnNav(){
	$('.btn__hamburger').on('click', function(){
		$(this).toggleClass('active')
		$('.nav-mobile').toggleClass('active')
	})
}

$(document).ready(function () {
	// lazyload
	App.InitLazyLoad();
	var $searchbutton = $('.search-button')
	var $searchform = $('.searchbox')
	var $m
	$(document).on('click', function (e) {
		if ($searchbutton.has(e.target).length === 0 && $searchform.has(e.target).length === 0) {
			$searchform.removeClass('active')
		}
	});
	// set background
	setBackgroundElement();

	// menu
	mappingMenu();
	btnNav();

	// header

})

