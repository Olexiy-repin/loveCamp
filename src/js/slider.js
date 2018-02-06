(() => {
  $(".response-slider").owlCarousel({
    // Наиболее важные особенности owl
   items : 1,
   itemsCustom : true,

   loop: true,

    autoHeight : false,

    margin : 100
  });
})();

// (() => {
//   $(".sec-08__slider").owlCarousel({
//     // Наиболее важные особенности owl
//    items : 1,
//    itemsCustom : true,
//
//    // Навигация
//
//     // Пагинация
//    pagination : true,
//
//    loop: true,
//
//    // Авто-высота
//     autoHeight : false,
//
//     margin : 100,
//
//     itemsDesktop : [1199,1],
//     itemsDesktopSmall : [768,1],
//     itemsTablet: [768,1],
//     itemsMobile : [320,1]
//   });
// })();

(() => {
  $(".sec-09__slider").owlCarousel({
    // Наиболее важные особенности owl
   items : 1,

    // Пагинация
   pagination : true,

   loop: true,

   // Авто-высота
    autoHeight : false,

    margin : 100,

    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            autoplay:true,
            autoplayTimeout:3000,
            // autoplayHoverPause:true
        },
        768:{
            items:2,
            nav:false,
            margin: 10,
            autoplay:true,
            autoplayTimeout:3000,
            // autoplayHoverPause:true
        },
        1024:{
            items:4,
            nav:false,
            margin: 5,
            autoplay:true,
            autoplayTimeout:3000,
            // autoplayHoverPause:true
        }
    }
  });
})();

(() => {
  $(".sec-10__slider").owlCarousel({
    // Наиболее важные особенности owl
   items : 1,
   itemsCustom : true,

    // Пагинация
   // pagination : true,

   loop: true,

   // Авто-высота
    autoHeight : true,

    margin : 100,

  });
})();

// (() => {
//   $(".sec-11__slider").owlCarousel({
//    items : 1,
//    itemsCustom : true,
//
//    loop: true,
//
//    autoHeight : false,
//
//    margin : 100,
//   });
// })();

// (() => {
//   $(".sec-11__middle-slider").owlCarousel({
//    items : 1,
//    itemsCustom : true,
//
//    loop: true,
//
//    autoHeight : false,
//
//    margin : 100,
//   });
// })();

// (() => {
//   $(".sec-12__slider").owlCarousel({
//    items : 1,
//    itemsCustom : true,
//
//    loop: true,
//
//    autoHeight : false,
//
//    margin : 100,
//   });
// })();

(() => {
  $(".sec-13__slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,

   autoHeight : false,

   margin : 100,

   responsiveClass:true,
   responsive:{
       0:{
           items:1,
           nav:false
       },
       768:{
           items:1,
           nav:false,
           margin: 10
       },
       1024:{
           items:2,
           nav:false,
           margin: 5
       }
   }
  });
})();
