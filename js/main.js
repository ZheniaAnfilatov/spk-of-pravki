$(document).ready(function () {
	// sticky main menu
	$('#mainmenu-area').sticky({
		topSpacing: 0,
	})

	// выпадающий список
	var dropdown = $('.dropdown'),
		openDropdown = $('.wrapper-dropdown')

	openDropdown.hover(
		function () {
			dropdown.addClass('dropdown--active')
		},
		function () {
			dropdown.removeClass('dropdown--active')
		}
	)
	dropdown.hover(
		function () {
			dropdown.addClass('dropdown--active')
		},
		function () {
			dropdown.removeClass('dropdown--active')
		}
	)


	// header slider
	$('.header__slick-slider').slick({
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 8000,
		responsive: [
			{
				breakpoint: 575,
				settings: {
					autoplay: false,
					autoplaySpeed: 0,
				},
			},
		],
	})

	// courses slider
	$('.courses__slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: false,
		variableWidth: true,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows: false,
		responsive: [
			{
				breakpoint: 575,
				settings: {
					variableWidth: false,
				},
			},
		],
	})

	// blog slider
	$('.instagram__slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
	})

	// cooperation slider
	$('.cooperation__slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
	})

	// модальное окно security
	var securityModal = $('.security'),
		securityCloseBtn = $('.security__close'),
		securityModalBtn = $('.courses__card--1')

	securityModalBtn.on('click', function () {
		securityModal.toggleClass('security--visible')
		$('body').addClass('lock')
	})

	securityCloseBtn.on('click', function () {
		securityModal.toggleClass('security--visible')
		$('body').removeClass('lock')
	})

	$(document).keydown(function (e) {
		if (e.keyCode == 27) {
			securityModal.removeClass('security--visible')
			$('body').removeClass('lock')
		}
	})

	$(document).click(function (e) {
		if ($(e.target).is(securityModal)) {
			securityModal.toggleClass('security--visible')
			$('body').removeClass('lock')
		}
	})

	// модальное окно training
	var trainingModal = $('.training'),
		trainingCloseBtn = $('.training__close'),
		trainingModalBtn = $('.courses__card--2')

	trainingModalBtn.on('click', function () {
		trainingModal.toggleClass('training--visible')
		$('body').addClass('lock')
	})

	trainingCloseBtn.on('click', function () {
		trainingModal.toggleClass('training--visible')
		$('body').removeClass('lock')
	})

	$(document).keydown(function (e) {
		if (e.keyCode == 27) {
			trainingModal.removeClass('training--visible')
			$('body').removeClass('lock')
		}
	})

	$(document).click(function (e) {
		if ($(e.target).is(trainingModal)) {
			trainingModal.toggleClass('training--visible')
			$('body').removeClass('lock')
		}
	})

	// модальное окно preparation
	var preparationModal = $('.preparation'),
		preparationCloseBtn = $('.preparation__close'),
		preparationModalBtn = $('.courses__card--3')

	preparationModalBtn.on('click', function () {
		preparationModal.toggleClass('preparation--visible')
		$('body').addClass('lock')
	})

	preparationCloseBtn.on('click', function () {
		preparationModal.toggleClass('preparation--visible')
		$('body').removeClass('lock')
	})

	$(document).keydown(function (e) {
		if (e.keyCode == 27) {
			preparationModal.removeClass('preparation--visible')
			$('body').removeClass('lock')
		}
	})

	$(document).click(function (e) {
		if ($(e.target).is(preparationModal)) {
			preparationModal.toggleClass('preparation--visible')
			$('body').removeClass('lock')
		}
	})

	// модальное окно uniqueness
	var uniquenessModal = $('.uniqueness'),
		uniquenessCloseBtn = $('.uniqueness__close'),
		uniquenessModalBtn = $('.courses__card--4')

	uniquenessModalBtn.on('click', function () {
		uniquenessModal.toggleClass('uniqueness--visible')
		$('body').addClass('lock')
	})

	uniquenessCloseBtn.on('click', function () {
		uniquenessModal.toggleClass('uniqueness--visible')
		$('body').removeClass('lock')
	})

	$(document).keydown(function (e) {
		if (e.keyCode == 27) {
			uniquenessModal.removeClass('uniqueness--visible')
			$('body').removeClass('lock')
		}
	})

	$(document).click(function (e) {
		if ($(e.target).is(uniquenessModal)) {
			uniquenessModal.toggleClass('uniqueness--visible')
			$('body').removeClass('lock')
		}
	})

	// модальное окно examination
	var examinationModal = $('.examination'),
		examinationCloseBtn = $('.examination__close'),
		examinationModalBtn = $('.courses__card--5')

	examinationModalBtn.on('click', function () {
		examinationModal.toggleClass('examination--visible')
		$('body').addClass('lock')
	})

	examinationCloseBtn.on('click', function () {
		examinationModal.toggleClass('examination--visible')
		$('body').removeClass('lock')
	})

	$(document).keydown(function (e) {
		if (e.keyCode == 27) {
			examinationModal.removeClass('examination--visible')
			$('body').removeClass('lock')
		}
	})

	$(document).click(function (e) {
		if ($(e.target).is(examinationModal)) {
			examinationModal.toggleClass('examination--visible')
			$('body').removeClass('lock')
		}
	})

	// модальное окно pop-up
	var popUp = $('.pop-up'),
		popUpCloseBtn = $('.pop-up__close'),
		popUpModalBtn = $('.button__secondary')

	popUpModalBtn.on('click', function () {
		popUp.toggleClass('pop-up--visible')
		$('body').addClass('lock')
	})

	popUpCloseBtn.on('click', function () {
		popUp.toggleClass('pop-up--visible')
		$('body').removeClass('lock')
	})

	$(document).keydown(function (e) {
		if (e.keyCode == 27) {
			popUp.removeClass('pop-up--visible')
			$('body').removeClass('lock')
		}
	})

	$(document).click(function (e) {
		if ($(e.target).is(popUp)) {
			popUp.toggleClass('pop-up--visible')
			$('body').removeClass('lock')
		}
	})

	// модальное окно pop-up-1
	var popUp1 = $('.pop-up-1'),
		popUpCloseBtn1 = $('.pop-up-1__close'),
		popUpModalBtn1 = $('.button__primary'),
		openButton = $('.open__button')

	popUpModalBtn1.on('click', function () {
		popUp1.toggleClass('pop-up-1--visible')
		$('body').addClass('lock')
	})

	openButton.on('click', function () {
		popUp1.toggleClass('pop-up-1--visible')
		securityModal.removeClass('security--visible')
		trainingModal.removeClass('training--visible')
		preparationModal.removeClass('preparation--visible')
		uniquenessnModal.removeClass('uniqueness--visible')
		$('body').addClass('lock')
	})

	popUpCloseBtn1.on('click', function () {
		popUp1.toggleClass('pop-up-1--visible')
		$('body').removeClass('lock')
	})

	$(document).keydown(function (e) {
		if (e.keyCode == 27) {
			popUp1.removeClass('pop-up-1--visible')
			$('body').removeClass('lock')
		}
	})

	$(document).click(function (e) {
		if ($(e.target).is(popUp1)) {
			popUp1.toggleClass('pop-up-1--visible')
			$('body').removeClass('lock')
		}
	})

	// animation
	new WOW().init()

	// burger-menu
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active')
		$('body').toggleClass('lock')
	})

	$('.navbar__link').click(function (event) {
		$('.header__burger,.header__menu').removeClass('active')
		$('body').toggleClass('lock')
	})

	// tabs
	var tabsLink = $('.tabs__small-img')
	var tabsContent = $('.tabs__big-img')

	tabsLink.on('click', function (event) {
		var activeContent = $(this).attr('data-target')
		tabsLink.removeClass('tabs__small-img--active')
		tabsContent.removeClass('tabs__big-img--active')
		$(activeContent).addClass('tabs__big-img--active')
		$(this).addClass('tabs__small-img--active')
	})

	// validate place-form
	$('.place-form').validate({
		errorClass: 'invalid',
		rules: {
			// rule
			userName: {
				required: true,
				minlength: 2,
				maxlength: 50,
			},
			// compound rule
			userEmail: {
				required: true,
				email: true,
			},
			policyCheckbox: {
				required: true,
			},
		},
		messages: {
			userName: {
				required: 'Обязательное поле',
				minlength: 'Не меньше 2 символов',
				maxlength: 'Не больше 50 символов',
			},
			userEmail: {
				required: 'Обязательное поле',
				email: 'Формат name@domain.com',
			},
			policyCheckbox: 'Подтвердите ваше согласие',
		},

		submitHandler: function (form) {
			$.ajax({
				type: 'POST',
				url: 'send.php',
				data: $(form).serialize(),
				success: function (response) {
					alert('Форма отправлена, мы свяжемся с вами в ближайшее время')
					$(form)[0].reset()
				},
			})
		},
	})

	// validate pop-up
	$('.pop-up__form').validate({
		errorClass: 'invalid',
		rules: {
			// rule
			userName: {
				required: true,
				minlength: 2,
				maxlength: 50,
			},
			// compound rule
			userPhone: {
				required: true,
				minlength: 17,
			},
			policyCheckbox: {
				required: true,
			},
		},
		messages: {
			userName: {
				required: 'Обязательное поле',
				minlength: 'Не меньше 2 символов',
				maxlength: 'Не больше 50 символов',
			},
			userPhone: {
				required: 'Обязательное поле',
				minlength: 'Неверный номер',
			},
			policyCheckbox: 'Подтвердите ваше согласие',
		},

		submitHandler: function (form) {
			$.ajax({
				type: 'POST',
				url: 'send.php',
				data: $(form).serialize(),
				success: function (response) {
					alert('Форма отправлена, мы свяжемся с вами в ближайшее время')
					$(form)[0].reset()
					popUp.removeClass('pop-up--visible')
				},
			})
		},
	})

	// validate pop-up-1
	$('.pop-up-1__form').validate({
		errorClass: 'invalid',
		rules: {
			// rule
			userName: {
				required: true,
				minlength: 2,
				maxlength: 50,
			},
			// compound rule
			userPhone: {
				required: true,
				minlength: 17,
			},
			policyCheckbox: {
				required: true,
			},
		},
		messages: {
			userName: {
				required: 'Обязательное поле',
				minlength: 'Не меньше 2 символов',
				maxlength: 'Не больше 50 символов',
			},
			userPhone: {
				required: 'Обязательное поле',
				minlength: 'Неверный номер',
			},
			policyCheckbox: 'Подтвердите ваше согласие',
		},

		submitHandler: function (form) {
			$.ajax({
				type: 'POST',
				url: 'send.php',
				data: $(form).serialize(),
				success: function (response) {
					alert('Форма отправлена, мы свяжемся с вами в ближайшее время')
					$(form)[0].reset()
					popUp.removeClass('pop-up-1--visible')
				},
			})
		},
	})

	// mask for tel
	$('[type=tel]').mask('+7(000) 000-00-00')

	//плавный переход
	$('body').on('click', '.navbar__link', function (e) {
		var fixed_offset = 50
		$('html,body')
			.stop()
			.animate(
				{
					scrollTop: $(this.hash).offset().top - fixed_offset,
				},
				1000
			)
		e.preventDefault()
	})

	// кнопка наверх
	var btn = $('.button-up')

	$(window).scroll(function () {
		if ($(window).scrollTop() > 400) {
			btn.addClass('show')
		} else {
			btn.removeClass('show')
		}
	})

	btn.on('click', function (e) {
		e.preventDefault()
		$('html, body').animate(
			{
				scrollTop: 0,
			},
			900
		)
	})
});





// /*----------------------------
//     SCROLL TO TOP
// ------------------------------*/
// $(window).scroll(function () {
//   var $totalHeight = $(window).scrollTop();
//   var $scrollToTop = $(".scrolltotop");
//   if ($totalHeight > 300) {
//     $(".scrolltotop").fadeIn();
//   } else {
//     $(".scrolltotop").fadeOut();
//   }

//   if ($totalHeight + $(window).height() === $(document).height()) {
//     $scrollToTop.css("bottom", "90px");
//   } else {
//     $scrollToTop.css("bottom", "20px");
//   }
// });

// /*---------------------------
//     PLACEHOLDER ANIMATION
// ----------------------------*/
// Placeholdem(document.querySelectorAll('[placeholder]'));