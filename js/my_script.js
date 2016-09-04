function initMenu() {
$('#accardion > ul > li > p').hide();
$('#accardion > ul > li > p:first').show();



$('#accardion ul li h5').on('click', function(){
  $(this).parent().toggleClass('active');
  $(this).toggleClass('active2');
  $(this).next('p').slideToggle('slow');
})


}
$(document).ready(function () {
initMenu();
});
//google map
   $(document).ready(function() {
            map();
        });	

//LightBox
 jQuery(function() {
            jQuery(".img_picture a").lightBox();
        });
//Slider
  $(document).ready(function() {
            $("#content-slider").lightSlider({
                auto: true,
                loop: true,
                keyPress: true

            });
        });
//Параллакс
  jQuery(document).ready(function() {
            $objWindow = $(window);
            $('div[data-type="background"]').each(function() {
                var $bgObj = $(this);
                $(window).scroll(function() {
                    var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));

                    var coords = '100% ' + yPos + 'px';

                    $bgObj.css({
                        backgroundPosition: coords
                    });

                });

            });
        });

// кнопка подняться вверх
  $(function() {
            $.fn.scrollToTop = function() {
                $(this).hide().removeAttr("href");
                if ($(window).scrollTop() >= "800") $(this).fadeIn("slow")
                var scrollDiv = $(this);
                $(window).scroll(function() {
                    if ($(window).scrollTop() <= "800") $(scrollDiv).fadeOut("slow")
                    else $(scrollDiv).fadeIn("slow")
                });
                $(this).click(function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, "slow")
                })
            }
        });

        $(function() {
            $("#Go_Top").scrollToTop();
            $(".right-icons ").scrollToTop();

        });
//гугл-карта		
function map(){
	 google.maps.event.addDomListener(window, 'load', init);

        function init() {

            var mapOptions = {

                zoom: 11,

                center: new google.maps.LatLng(40.6700, -73.9400), // New York

                styles: [{
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }]
            };

            var mapElement = document.getElementById('map');

            var map = new google.maps.Map(mapElement, mapOptions);

            var image = 'images/arrow.png';
            var beachMarker = new google.maps.Marker({
                position: {
                    lat: 40.6700,
                    lng: -73.9400
                },
                map: map,
                icon: image
            });
        }
}