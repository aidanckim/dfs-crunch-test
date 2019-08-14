$('.center').slick({
  variableWidth: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  dots: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '40px',
        arrows: false,
        dots: true,
        infinite: false,
        focusOnSelect: true,
        variableWidth: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// $('.center').slick({
//   centerMode: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   centerPadding: '40px',
//   arrows: false,
//   dots: true,
//   infinite: false,
//   variableWidth: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         variableWidth: false,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });








// SPORTS

// const icon = document.querySelector('.one');
//
// box.addEventListener('click', function() {
//   $('.card-one').hide();
// });

// $('.nfl').hide();
// $('.nba').hide();

// $('.one').click(function(e) {
//   $('.nfl').show();
//   $('.mlb').hide();
//   $('.nba').hide();
//   e.preventDefault();
// });

// $('.two').click(function(e) {
//   $('.nba').show();
//   $('.mlb').hide();
//   $('.nfl').hide();
//   e.preventDefault();
// });
//
// $('.three').click(function(e) {
//   $('.mlb').show();
//   $('.nfl').hide();
//   $('.nba').hide();
//   e.preventDefault();
// });


// SPORTS ICON HOVER

// $(function() {
//   $("#football").on({
//     mouseenter: function() {
//       $(this).attr('src', 'img/football-hover.png');
//     },
//     mouseleave: function(){
//       $(this).attr('src', 'img/football.png');
//     }
//   });
// });
//
// $(function() {
//   $("#basketball").on({
//     mouseenter: function() {
//       $(this).attr('src', 'img/basketball-hover.png');
//     },
//     mouseleave: function(){
//       $(this).attr('src', 'img/basketball.png');
//     }
//   });
// });
//
// $(function() {
//   $("#baseball").on({
//     mouseenter: function() {
//       $(this).attr('src', 'img/baseball-hover.png');
//     },
//     mouseleave: function(){
//       $(this).attr('src', 'img/baseball.png');
//     }
//   });
// });
//
//
//
// function changeImage() {
//   var image = document.getElementById('football');
//   if (image.src.match("img/football.png")) {
//     image.src = "img/football-hover.png";
//   }
// }
