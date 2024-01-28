//carousel
$('.ct-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //header

  const head = document.querySelector(".ct-header");
  if (scroll) {
    window.addEventListener("scroll", () => {
        if (scrollY > 100) {
            head.classList.add("fixed");
        } else {
            head.classList.remove("fixed");
        }
    })
}
          