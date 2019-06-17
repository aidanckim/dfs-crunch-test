$('.center').slick({
  centerMode: true,
  centerPadding: '75px',
  slidesToShow: 1,
  arrows: false,
  dots: true,
  infinite: false,
});


// SPORTS

// const icon = document.querySelector('.one');
//
// box.addEventListener('click', function() {
//   $('.card-one').hide();
// });

$('.nfl').hide();
$('.nba').hide();

$('.one').click(function(e) {
  $('.nfl').show();
  $('.mlb').hide();
  $('.nba').hide();
  e.preventDefault();
});

$('.two').click(function(e) {
  $('.nba').show();
  $('.mlb').hide();
  $('.nfl').hide();
  e.preventDefault();
});

$('.three').click(function(e) {
  $('.mlb').show();
  $('.nfl').hide();
  $('.nba').hide();
  e.preventDefault();
});
