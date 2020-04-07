

// alert('script.js says "I\'m here"');

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
$(document).ready(function() {
  document.getElementById("navbar").style.top = "0";

});

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  // lets try this out so nav bar size is 50
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
$('.carousel').carousel({
    interval: false
});



$(document).ready(function () {
   changeElements();

    $(window).resize(function() {
        changeElements();
    });
});

function changeElements(){
     if ($(window).width() <= 640) {
       $('div.sidenav').hide();
       $('div.sidenavright').hide();
    }else if ( ($(window).height() > 450 )){
        $('div.sidenav').show();
        $('div.sidenavright').show();

    }

    if ($(window).height() <= 450 ) {
      $('div.sidenav').hide();
      $('div.sidenavright').hide();

    }else if($(window).width() > 640){
        $('div.sidenav').show();
        $('div.sidenavright').show();
    }

}
