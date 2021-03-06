$(document).ready(function() {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: RU (Russian; русский язык)
 */
$.extend( $.validator.messages, {
	required: "Это поле необходимо заполнить.",
	remote: "Пожалуйста, введите правильное значение.",
	email: "Пожалуйста, введите корректный адрес электронной почты.",
	url: "Пожалуйста, введите корректный URL.",
	date: "Пожалуйста, введите корректную дату.",
	dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
	number: "Пожалуйста, введите число.",
	digits: "Пожалуйста, вводите только цифры.",
	creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
	equalTo: "Пожалуйста, введите такое же значение ещё раз.",
	extension: "Пожалуйста, выберите файл с правильным расширением.",
	maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
	minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
	rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
	range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
	max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
	min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
} );

$.validator.addMethod('js-input-phone', function(value, element){
	return this.optional(element) || $(element).inputmask('unmaskedvalue').length === 10;
	},	'Введите корректный номер');


  $('.js-form').validate({
    submitHandler: function(form) {
			//отправка формы при успешной валидации
			$(form).trigger('formSubmit');

		},
		errorplacement: function(error, element) {
			element.parent().append(error);
		}
  });

	$('.js-input-phone').inputmask('+7 (999) 999-99-99');
	
	$('.js-form').on('formSubmit', function() {
		alert('Форма отправлена');
	});

// $('.form__select').select2({
// 	appearance: none
// });

//яндекс карта
ymaps.ready(init);
function init(){
    var map = document.querySelector('#map');
    var center = map.dataset.center.split(',');
    center[0] = +center[0];
    center[1] = +center[1];

    var mark = map.dataset.placemark.split(',');
    mark[0] = +mark[0];
    mark[1] = +mark[1];

    var myMap = new ymaps.Map("map", {
        center: center,
        zoom: 15,
        controls: []
    });

    var placemarkContent = ymaps.templateLayoutFactory.createClass(
        '<div class="placemark-content" style="padding: 5px 10px; width: 120px; background-color: rgba(255,255,255,0.8);">$[properties.iconContent]</div>'
    );

    var placemark = new ymaps.Placemark(mark, {
        iconContent: 'улица Ильинка, 4'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'images/map.png',
        iconImageSize: [60, 60],
        iconImageOffset: [-20, -20],
        iconContentOffset: [45, 10],
        iconContentLayout: placemarkContent
    });

    myMap.geoObjects.add(placemark);
    ymapsTouchScroll(myMap);
}




//смена цвета хедера
$(window).scroll(function(){
    // console.log($(this).scrollTop());
    var header = document.querySelector(".wrapper");
    var fb = document.querySelector(".fb");
    var vk = document.querySelector(".vk");
    if($(this).scrollTop()>$('.wrapper').height()+300) {
      header.classList.add("wrapper2");
      fb.classList.add("fb2");
      vk.classList.add("vk2");
      } else {
        header.classList.remove("wrapper2");
        fb.classList.remove("fb2");
        vk.classList.remove("vk2");
      }
      
    });


      var button = $('#button');
      var modal = $('#modal');
      var close = $('#close');
    
      button.on('click', function(){
        modal.addClass('modal_active');
        document.body.classList.add('notOverflow');
      });
    
      close.on('click', function(){
        modal.removeClass('modal_active');
        document.body.classList.remove('notOverflow');
      });
    

      $('.select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации 
    
        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);
    
        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);
    
        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }
    
        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                selectList.slideDown(duration);
    
                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');
    
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );
    
                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });
    
            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });

});