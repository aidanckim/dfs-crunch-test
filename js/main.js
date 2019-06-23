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


// SPORTS ICON HOVER

$(function() {
  $("#football").on({
    mouseenter: function() {
      $(this).attr('src', 'img/football-hover.png');
    },
    mouseleave: function(){
      $(this).attr('src', 'img/football.png');
    }
  });
});

$(function() {
  $("#basketball").on({
    mouseenter: function() {
      $(this).attr('src', 'img/basketball-hover.png');
    },
    mouseleave: function(){
      $(this).attr('src', 'img/basketball.png');
    }
  });
});

$(function() {
  $("#baseball").on({
    mouseenter: function() {
      $(this).attr('src', 'img/baseball-hover.png');
    },
    mouseleave: function(){
      $(this).attr('src', 'img/baseball.png');
    }
  });
});



function changeImage() {
  var image = document.getElementById('football');
  if (image.src.match("img/football.png")) {
    image.src = "img/football-hover.png";
  }
}
