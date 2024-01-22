document.addEventListener("DOMContentLoaded", function () {
	var productCarousel = new Slick('#productCarousel', {
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  prevArrow: '<button type="button" class="slick-prev"></button>',
	  nextArrow: '<button type="button" class="slick-next"></button>',
	  responsive: [
		{
		  breakpoint: 1240,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 800,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});
  
	var socialsCarousel = new Slick('#socialsCarousel', {
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  prevArrow: '<button type="button" class="slick-prev"></button>',
	  nextArrow: '<button type="button" class="slick-next"></button>',
	  responsive: [
		{
		  breakpoint: 1240,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 800,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});
  });
  