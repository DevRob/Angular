Number.prototype.mod = function(n) { return ((this%n)+n)%n; };
var app = angular.module("portfolio", []);

function swapCss() {
  $('#css').attr( 'href', "css/alternative.css" );
}

$(document).ready(function(){
  var panelCount = $("#carousel li").length,
      halfway = parseInt(panelCount / 2),
      transformProp = Modernizr.prefixed('transform'),
      theta = 0;
  $.each($("#carousel li"), function(index) {
    $(this).attr("data-increment", (index + halfway).mod(panelCount) - halfway);
  });

  $("li").hover(function(){
    $(this).css("background", "darkblue");
    }, function(){
      if ($(this).attr("data-increment") !== "0") {
        $(this).css("background", "hsla( 240, 100%, 50%, 0.8 )");
      }
    }
  );

  $("li").click(function() {
    var clickedIndex = $("#carousel li").index( this );
    var card = document.getElementById('card');
    if ($(this).attr("data-increment") != 0) {
      card.toggleClassName('flipped');
      setTimeout(function(){ card.toggleClassName('flipped'); }, 800);
    }

    theta += ( 360 / panelCount ) * $(this).attr("data-increment") * -1;
    carousel.style[ transformProp ] = 'translateZ( -288px ) rotateY(' + theta + 'deg)';

    $("#carousel").children().attr("class", "tab-btn ng-binding ng-scope").css("background", "hsla( 240, 100%, 50%, 0.8 )");
    $(this).css("background-color", "darkblue");

    $.each($("#carousel li"), function(index) {
      $(this).attr("data-increment", (index - clickedIndex + halfway).mod(panelCount) - halfway);
    });
  });

  // $("li").mousedown(function() {
  //   $(this).css("transform", "translateZ( 280px )");
  // });
  //
  // $("li").mouseup(function() {
  //   $(this).css("transform", "translateZ( 288px )");
  // });
});
