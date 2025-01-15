(function ($) {
    "use strict";
  
    // Window On Events
    var windowOn = $(window);
  
    // Preloader
    windowOn.on('load', function () {
        $("#loading").fadeOut(500);
        wowAnimation();  // Initialize WOW animations
  
      
    });
  
    // Back-to-Top Button
    var btn = $('#back-to-top');
    windowOn.scroll(function () {
        if (windowOn.scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
  
    btn.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
  
    // Sticky Header
    windowOn.on('scroll', function () {
        var scroll = windowOn.scrollTop();
        if (scroll < 100) {
            $("#tp-header-sticky").removeClass("header-sticky");
        } else {
            $("#tp-header-sticky").addClass("header-sticky");
        }
    });
  
    // Initialize Swiper
    var swiper = new Swiper(".feature-slider-active", {
        slidesPerView: 5, // Number of slides visible at once
        spaceBetween: 30,  // Space between slides
        autoplay: {
            delay: 2500,    // Slide transition delay
            disableOnInteraction: false, // Keeps autoplay running after interaction
        },
      
        breakpoints: {
            // Responsive settings
            1024: {
                slidesPerView: 4,  // For screens >= 1024px, show 4 slides
            },
            768: {
                slidesPerView: 3,  // For screens >= 768px, show 3 slides
            },
            480: {
                slidesPerView: 2,  // For screens >= 480px, show 2 slides
            },
            320: {
                slidesPerView: 1,  // For small screens, show 1 slide
            }
        }
    });
    
  
    // Data Attributes for Background Image, Color, and Text Color
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });
  
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });
  
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"));
    });
  
    // Magnific Popup for Image and Video
    $('.popup-image').magnificPopup({ type: 'image' });
    $('.popup-video').magnificPopup({ type: 'iframe' });
  
    // Isotope Grid Filtering
    if ($('.grid').length != 0) {
        var $grid = $('.grid').imagesLoaded(function () {
            $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: { columnWidth: 1 }
            });
  
            // Filter items on button click
            $('.tp-portfolio-filter').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });
  
            // Menu Active Class Toggle
            $('.tp-portfolio-filter button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        });
    }
  
    // WOW Animations
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }
  
    // Jarallax Effect (Parallax Scrolling)
    if ($('.jarallax').length) {
        $('.jarallax').jarallax({ speed: 0.2 });
    }
  
  })(jQuery);
  

// Mobile Menu Toggle
function toggleMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const body = document.body;

  if (body.classList.contains("menu-open")) {
      mobileMenu.style.right = "-100%";  // Close the menu
      body.classList.remove("menu-open");
  } else {
      mobileMenu.style.right = "0";  // Open the menu
      body.classList.add("menu-open");
  }
}

// Close Menu on Clicking Outside
document.addEventListener("click", function (event) {
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuOpenIcon = document.querySelector(".mobile-menu-open-icon");
  const menuCloseIcon = document.querySelector(".mobile-menu-close-icon");
  const body = document.body;

  if (
      !mobileMenu.contains(event.target) &&  // Click outside the menu
      !menuOpenIcon?.contains(event.target) &&  // Not the open icon
      !menuCloseIcon?.contains(event.target) &&  // Not the close icon
      body.classList.contains("menu-open")  // Only if the menu is open
  ) {
      mobileMenu.style.right = "-100%";  // Close the menu
      body.classList.remove("menu-open");  // Remove the open state
  }
});

// Close Menu on Clicking a Menu Item
const menuItems = document.querySelectorAll(".mobile-menu-nav li a");
menuItems.forEach(item => {
  item.addEventListener("click", function () {
      const mobileMenu = document.querySelector(".mobile-menu");
      const body = document.body;
 
      mobileMenu.style.right = "-100%";  // Close the menu
      body.classList.remove("menu-open");  // Remove the open state
  });
});
