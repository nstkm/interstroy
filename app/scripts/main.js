
$(document).ready(function(){
  var imgAdress;
  $(document).on('click', '.photo-right__link', function(event) {
  event.preventDefault();
  imgAdress = $(this).attr('href');
  $('.photo-left__big').attr('href', imgAdress);
  });

	$('a.fancybox').fancybox({
        scrollOutside  : true
	});

	$('.feedback__bxslider').bxSlider({
		pager: false,
		nextText: '>',
		prevText: '<'
	});
  $(".seotext__content").mCustomScrollbar({
              setHeight:200,
          theme:"dark"
            });
   $(".desc-left__complect-text").mCustomScrollbar({
          setHeight:282,
          theme:"dark"
            });




// TABS
	$('.nav-tabs__controls-link').on('click',function(e){
		e.preventDefault();

		var item = $(this).closest('.nav-tabs__controls-item'),
		contentItem = $('.nav-tabs__list-item'),
		itemPosition = item.data('class');

		contentItem.filter('.nav-tabs__list-item--' + itemPosition)
		.add(item)
		.addClass('active')
		.siblings()
		.removeClass('active');
	});
});

$('.technology-tabs__control-link').on('click',function(e){
		e.preventDefault();

		var item = $(this).closest('.technology-tabs__control-item'),
		contentItem = $('.technology-tabs__list-item'),
		itemPosition = item.data('class');

		contentItem.filter('.technology-tabs__list-item--' + itemPosition)
		.add(item)
		.addClass('active')
		.siblings()
		.removeClass('active');
	});



function initialize() {

    var myLatlng = new google.maps.LatLng(59.925215, 30.322216);
    var myOptions = {
        zoom: 17,
        center: myLatlng,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), myOptions);
    var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title:"ИнвестСтройТрест",
    });

}

function initialize2() {
    var myLatlng2 = new google.maps.LatLng(59.939175, 30.327326);
    var myOptions2 = {
        zoom: 12,
        center: myLatlng2,
         scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    }
    var map2 = new google.maps.Map(document.getElementById("map_two"), myOptions2);
    var pos1 = new google.maps.LatLng(59.939175, 30.327326);
    var pos2 = new google.maps.LatLng(59.938830, 30.339343);
    var pos3 = new google.maps.LatLng(59.944133, 30.227353);
    var pos4 = new google.maps.LatLng(59.956754, 30.354808);
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var marker2 = new google.maps.Marker({
      position: pos1,
      map: map2,
      icon: image,
      title: 'Нaбережная канала Грибоедова д.7(внутри двора)'
  });
  var image1 = 'http://skybatteries.in/images/locateUs.png';
  var marker2 = new google.maps.Marker({
      position: pos2,
      map: map2,
      icon: image1,
      title: 'Кленовая Улица д.2'
  });

  var marker2 = new google.maps.Marker({
      position: pos3,
      map: map2,
      title: 'Наличная улица д.32'
  });

  var marker2 = new google.maps.Marker({
      position: pos4,
      map: map2,
      title: 'ст. м. Площадь Ленинаб Финский пер. д.8а'
  });
   var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<p> <b> Строительство каркасного дома </b> </p>' +
      '<div id="bodyContent">'+
      '<p> 100 лет ' +
      ' 250км </p> '+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'load', initialize2);


// validation

var validation = (function () {


  var init = function () {
    _setUpListeners();
  };


  var _setUpListeners = function () {
    $('form').on('keydown', '.has-error',  _removeError);
  };


  var _removeError = function () {
    $(this).removeClass('has-error');
    $(this).addClass('has-success');
  };

  var validateForm = function (form) {


    var validElements = form.find('input, textarea , .upload-image' ),
      valid= true;
    //console.log(validationItems);

    $.each(validElements, function(index, val) {
      var element = $(val),
        val = element.val();

      if (val.length == 0) {
          element.addClass('has-error');
            validElements.addClass('has-error').removeClass('has-success');
            valid = false;
        }else{
            //validElements.removeClass('has-error').addClass('has-success');
        }
      });
      return valid;
  };

  return {
    init : init,
    validateForm : validateForm
  };
})();

validation.init();



var contactMe = (function(){


  var init = function () {
    _setUpListeners();
  };


  var _setUpListeners = function () {
    $('#record__form' ).on('submit', _formSubmit);
  };





  var _formSubmit = function (e) {

    e.preventDefault();

    var form = $(this),
        url = "record.php",
        defObj = _ajaxForm(form, url);
        //работа с ответом от сервера
  };


  var _ajaxForm = function (form, url) {
    //console.log('ajax запрос, но с проверкой!');
    if (!validation.validateForm(form)) {
      return false;
    }
    //работа php-файла "contact_me.php"
  };



  return {
    init : init
  };


}());

contactMe.init();


var contactMeMain = (function(){
  var init = function () {
    _setUpListeners();
  };
 var _setUpListeners = function () {
    $('#main__form' ).on('submit', _formSubmit);
  };
  var _formSubmit = function (e) {
    e.preventDefault();
    var form = $(this),
        url = "index.php",
        defObj = _ajaxForm(form, url);
  };
  var _ajaxForm = function (form, url) {
    if (!validation.validateForm(form)) {
      return false;
    }
  };
  return {
    init : init
  };
}());
contactMeMain.init();

var contactMeMap = (function(){
  var init = function () {
    _setUpListeners();
  };
 var _setUpListeners = function () {
    $('#maps-objects__form' ).on('submit', _formSubmit);
  };
  var _formSubmit = function (e) {
    e.preventDefault();
    var form = $(this),
        url = "maps_onjects.php",
        defObj = _ajaxForm(form, url);
  };
  var _ajaxForm = function (form, url) {
    if (!validation.validateForm(form)) {
      return false;
    }
  };
  return {
    init : init
  };
}());
contactMeMap.init();

var slideshowModule = (function(){
  $('.photo-right__link').on('click', function(e){
    e.preventDefault();

    var
      $this = $(this),
      container = $this.closest('.home__photo'),
      path = $this.find('img').attr('src'),
      item = $this.closest('li');

    if (!item.hasClass('active')) {

      item.addClass('active').siblings().removeClass('active');

      container.find('.photo-left__big img').fadeOut(function(){
        $(this).attr('src', path).fadeIn();
      });
    }
  });
}());

