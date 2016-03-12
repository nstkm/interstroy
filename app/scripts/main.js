



$(document).ready(function(){


jQuery("#slider").slider({
  min: 0,
  max: 1000,
  values: [50,1000],
  range: true,
  stop: function(event, ui) {
    jQuery("input#minArea").val(jQuery("#slider").slider("values",0));
    jQuery("input#maxArea").val(jQuery("#slider").slider("values",1));
    },
    slide: function(event, ui){
    jQuery("input#minArea").val(jQuery("#slider").slider("values",0));
    jQuery("input#maxArea").val(jQuery("#slider").slider("values",1));
    }
});
jQuery("input#minArea").change(function(){
  var value1=jQuery("input#minArea").val();
  var value2=jQuery("input#maxArea").val();

    if(parseInt(value1) > parseInt(value2)){
    value1 = value2;
    jQuery("input#minArea").val(value1);
  }
  jQuery("#slider").slider("values",0,value1);
});


jQuery("input#maxArea").change(function(){
  var value1=jQuery("input#minArea").val();
  var value2=jQuery("input#maxArea").val();

  if (value2 > 1000) { value2 = 1000; jQuery("input#maxArea").val(1000)}

  if(parseInt(value1) > parseInt(value2)){
    value2 = value1;
    jQuery("input#maxArea").val(value2);
  }
  jQuery("#slider").slider("values",1,value2);
});


jQuery("#slider_two").slider({
  min: 0,
  max: 1000000,
  values: [10000,100000],
  range: true,
  stop: function(event, ui) {
    jQuery("input#minCost").val(jQuery("#slider_two").slider("values",0));
    jQuery("input#maxCost").val(jQuery("#slider_two").slider("values",1));
    },
    slide: function(event, ui){
    jQuery("input#minCost").val(jQuery("#slider_two").slider("values",0));
    jQuery("input#maxCost").val(jQuery("#slider_two").slider("values",1));
    }
});
jQuery("input#minCost").change(function(){
  var value1=jQuery("input#minCost").val();
  var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
    value1 = value2;
    jQuery("input#minCost").val(value1);
  }
  jQuery("#slider_two").slider("values",0,value1);
});


jQuery("input#maxCost").change(function(){
  var value1=jQuery("input#minCost").val();
  var value2=jQuery("input#maxCost").val();

  if (value2 > 1000000) { value2 = 1000000; jQuery("input#maxCost").val(1000000)}

  if(parseInt(value1) > parseInt(value2)){
    value2 = value1;
    jQuery("input#maxCost").val(value2);
  }
  jQuery("#slider_two").slider("values",1,value2);
});

$('#reset').on('click', function(){
   var $slider = $("#slider");
  $slider.slider("values", 0, 50);
  $slider.slider("values", 1, 1000);

});
$('#reset').on('click', function(){
  var $sliderTwo = $("#slider_two");
  $sliderTwo.slider("values", 0, 10000);
  $sliderTwo.slider("values", 1, 100000);

});


	$('.fancybox').fancybox({
        padding: 0,
        autoCenter : false,
        beforeShow: function(){
        $("body").css({'overflow-y':'hidden'});
    },
    afterClose: function(){
        $("body").css({'overflow-y':'visible'});
    },
        afterLoad  : function () {
            $.extend(this, {
                aspectRatio : false,
                type    : 'html',
                width   : '70%',
                height  : '80%',
                content : '<div class="fancybox-image" style="background-image:url(' + this.href + '); background-size: cover; background-position:50% 50%;background-repeat:no-repeat;height:100%;width:100%;" /></div>'
            });
        },
    helpers: {
            overlay: {
                locked: false
            }
        }
	});

	$('.feedback__bxslider').bxSlider({
		pager: false,
		nextText: '>',
		prevText: '<'
	});
  $(".seotext__wrap").mCustomScrollbar({
              setHeight:200,
          theme:"dark"
            });
   $(".desc-left__complect-text").mCustomScrollbar({
          setHeight:282,
          theme:"dark"
            });




// TABS
	$('.nav-tabs__controls-link').on('click',function(e){
		// e.preventDefault();

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

    var myLatlng = new google.maps.LatLng(59.925753,30.3213168);

    var myOptions = {
        zoom: 17,
        center: myLatlng,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map5 = new google.maps.Map(document.getElementById("map"), myOptions);
    var marker = new google.maps.Marker({
    position: myLatlng,
    map: map5,
    title:"ИнвестСтройТрест",
    });

}

function initialize2() {
    var myLatlng2 = new google.maps.LatLng(59.939175, 30.327326);
    var myOptions2 = {
        zoom: 9,
        center: myLatlng2,
         scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    }
    var map= new google.maps.Map(document.getElementById("map_two"), myOptions2);
    // var pos1 = new google.maps.LatLng(59.939175, 30.327326);
    // var pos2 = new google.maps.LatLng(59.938830, 30.339343);
//     var pos3 = new google.maps.LatLng(59.9053557,29.8095193);
//     var pos4 = new google.maps.LatLng(59.7849494,30.783763);
//   //   var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
//   // var marker2 = new google.maps.Marker({
//   //     position: pos1,
//   //     map: map2,
//   //     icon: image,
//   //     title: 'Нaбережная канала Грибоедова д.7(внутри двора)'
//   // });
//   // var image1 = 'http://skybatteries.in/images/locateUs.png';
//   // var marker2 = new google.maps.Marker({
//   //     position: pos2,
//   //     map: map2,
//   //     icon: image1,
//   //     title: 'Кленовая Улица д.2'
//   // });

//   var marker2 = new google.maps.Marker({
//       position: pos3,
//       map: map2
//   });

//   var marker2 = new google.maps.Marker({
//       position: pos4,
//       map: map2
//   });






/*new*/
var Markers = {};
var infowindow;
var locations = [
  [ 'уч. Островки- Пороги',
    '<strong>Кадастровый номер: </strong> 47:07:0605005:537 <br> <strong>ЭТАП: </strong> Внутрення отделка ',
   59.7849494,30.783763,
    0
  ],
  [
    'город Ломоносов',
    '<strong>Кадастровый номер: </strong> 78:40:20435:71 <br> <strong>ЭТАП: </strong> Строительство фундамента ',
    59.9053557,29.8095193,
    1
  ]
];
  infowindow = new google.maps.InfoWindow();

    for(i=0; i<locations.length; i++) {
      var position = new google.maps.LatLng(locations[i][2], locations[i][3]);
    var marker = new google.maps.Marker({
      position: position,
      map: map,
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][1]);
        infowindow.open(map, marker);
      }
    }) (marker, i));
    Markers[locations[i][4]] = marker;
  }



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

