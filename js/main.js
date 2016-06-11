

$(window).scroll(function() {
  if ($(this).scrollTop() < 1){
    $('header').removeClass("sticky");
    $('nav').hide();
  }
  else if ($(this).scrollTop() > 1){

    $('header').addClass("sticky");
    $('nav').show();
  }
  else{
    $('header').removeClass("sticky");
  }
});

$(function () {
    $('#homeCarousel').carousel({
        interval:3000,
        pause: "false"
    });
    $('#playButton').click(function () {
        $('#homeCarousel').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#homeCarousel').carousel('pause');
    });
});



function initMap() {

  var myLatLng = {lat: 1.30049, lng: 103.83826};

  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 17,
  center: myLatLng
  });


  var contentString = '<div id="content">'+
      '<h1 id="firstHeading" class="firstHeading">Alchemy</h1>'+
      '<div id="bodyContent">'+
      '</div>';
  //     marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  // });

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });


  var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: 'Hello World!',
  icon: 'images/icon3.png'
  });

  draggable: true,
  marker.addListener('click', toggleBounce);

  infowindow.open(map, marker);


  function toggleBounce() {
  if (marker.getAnimation() !== null)
  {marker.setAnimation(null);}
  else
  {marker.setAnimation(google.maps.Animation.BOUNCE);}
  }

}// google map


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});






window.sr = ScrollReveal({ duration: 2000 });
sr.reveal('.menu', 50);
// $('#yourElement').animateCss('bounce');
