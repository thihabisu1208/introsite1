// Scroll Reveal
window.sr = ScrollReveal({duration: 1500});
sr.reveal('.header');
sr.reveal('.port');
sr.reveal('.aboutheader');
sr.reveal('#about');
sr.reveal('.about');
sr.reveal('.hobby');
sr.reveal('.music');
sr.reveal('.musicdetails');
sr.reveal('.artists');
sr.reveal('.artistrank');
sr.reveal('.artistname');
sr.reveal('.movie');
sr.reveal('.movies');
sr.reveal('.movierank');
sr.reveal('.moviename');
sr.reveal('.takeru');
sr.reveal('.game');
sr.reveal('.gamedetails');
sr.reveal('.games');
sr.reveal('.gamerank');
sr.reveal('.gamename');
sr.reveal('.photography');
sr.reveal('.photodetails');
sr.reveal('.mainhobby');
sr.reveal('.hobbyhead');
sr.reveal('.mainfood');
sr.reveal('.firstfood');
sr.reveal('.foodhead');
sr.reveal('.yakiniku');
sr.reveal('.secondfood');
sr.reveal('.chinese');
sr.reveal('#life');
sr.reveal('.mainlife');
sr.reveal('.life');
sr.reveal('.year');
sr.reveal('.event');
sr.reveal('.hobby');
sr.reveal('#family');
sr.reveal('.mainfamily');
sr.reveal('.family');
sr.reveal('#footer');


//Return to Top
$(function($){
    $('.totop').pageTop();
    }
);


// Smooth Scroll Anchor Links
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Sticky Navigation with Scroll
(function($) {          
  $(document).ready(function(){                    
      $(window).scroll(function(){                          
          if ($(this).scrollTop() > 200) {
              $('#navigation').fadeIn(500);
          } else {
              $('#navigation').fadeOut(400);
          }
      });
  });
})(jQuery);