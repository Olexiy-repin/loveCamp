(() => {
  $(".owl-carousel").owlCarousel({
    // Наиболее важные особенности owl
   items : 1,
   itemsCustom : true,

   // Навигация
    nav : true,
    navText : ["<svg class=\"sec-10__svg-img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10 16\"><defs><style>.cls-1{fill:#737373;}</style></defs><title>bl10_left_arrow</title><g id=\"Слой_2\" data-name=\"Слой 2\"><g id=\"Слой_1-2\" data-name=\"Слой 1\"><path d=\"M8.87.17a.74.74,0,0,1,.93,0,.51.51,0,0,1,0,.8L1.59,8l8.21,7a.51.51,0,0,1,0,.8.74.74,0,0,1-.93,0L.19,8.4a.51.51,0,0,1,0-.8Z\"/></g></g></svg>", "<svg class=\"sec-10__svg-img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10 16\"><defs><style>.cls-1{fill:#737373;}</style></defs><title>Bl10_right_arrow</title><g id=\"Слой_2\" data-name=\"Слой 2\"><g id=\"Слой_1-2\" data-name=\"Слой 1\"><path d=\"M1.13,15.83A.7.7,0,0,1,.66,16a.7.7,0,0,1-.47-.17.51.51,0,0,1,0-.8L8.41,8,.19,1a.51.51,0,0,1,0-.8.74.74,0,0,1,.93,0L9.81,7.6a.51.51,0,0,1,0,.8Z\"/></g></g></svg>"],
    rewind : true,
    scrollPerPage : true,

    // Пагинация
   pagination : true,
   paginationNumbers: false,

   // Авто-высота
    autoHeight : true,

    margin : 100,

    itemsDesktop : [1199,1],
    itemsDesktopSmall : [768,1],
    itemsTablet: [768,1],
    itemsMobile : [320,1]
  });

})();
