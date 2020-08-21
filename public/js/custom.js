//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 32) {
        $(".header").addClass("fixed-top");
    } else {
        $(".header").removeClass("fixed-top");
    }
});
//jQuery to collapse the navbar on scroll

// Wait for load

setTimeout(function() {
    $('.se-pre-con').fadeOut('slow');
}, 3000); // <-- time in milliseconds

// Animate loader counter
$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});


//textanimations
$('.tlt').textillate({
    loop: true
});



//jQuery for page scrolling feature - requires jQuery Easing plugin
$('body').scrollspy({ target: '#navbarSupportedContent' })
$(function() {
    $('a.nav-link').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 10
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
//jQuery animated
var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

//form map
 $(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );


//jQuery map

function initMap() {
    var uluru = { lat: -25.363, lng: 305.044 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: uluru,
        scrollwheel: false,
        styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ]

    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

// <!-- demo jQuery-->
(function(b, i, t, C, O, I, N) {
    window.addEventListener('load', function() {
        if (b.getElementById(C)) return;
        I = b.createElement(i), N = b.getElementsByTagName(i)[0];
        I.src = t;
        I.id = C;
        N.parentNode.insertBefore(I, N);
    }, false)
})(document, 'script', 'https://widgets.bitcoin.com/widget.js', 'btcwdgt');

// <!-- End demo jQuery-->