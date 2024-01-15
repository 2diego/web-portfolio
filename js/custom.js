(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: (target.offset().top)
              }, 1000, "easeInOutExpo");
              return false;
          }
      }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
      $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
      target: '#sideNav'
  });

  // Typed Initiate
  if ($('.typed-text-output').length == 1) {
      var typed_strings = $('.typed-text').text();
      var typed = new Typed('.typed-text-output', {
          strings: typed_strings.split('+'),
          typeSpeed: 30,
          backSpeed: 10,
          smartBackspace: false,
          loop: true
      });
  }

  // Set badge heights dynamically
  function setBadgeHeights() {
      // Reset heights to auto for responsiveness
      $('.skill-badge').css('height', 'auto');

      // Get the max height including margins
      var maxHeight = Math.max.apply(null, $('.skill-badge').map(function () {
          return $(this).outerHeight(true);
      }).get());

      // Set the height for all badges
      $('.skill-badge').css('height', maxHeight + 'px');
  }

  // Set initial heights
  setBadgeHeights();

  // Update heights on window resize
  $(window).resize(function () {
      setBadgeHeights();
  });

  // This script closes the modal when clicking outside of it
  $(document).mouseup(function (e) {
      var container = $(".modal-content");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.closest(".modal").modal("hide");
      }
  });

})(jQuery); // End of use strict