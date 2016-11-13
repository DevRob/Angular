var app = angular.module("portfolio", []);

function swapCss() {
  $('#css').attr( 'href', "css/alternative.css" );
}

$(document).ready(function(){

  $("li").hover(function(){
    $(this).css("background-color", "var(--main-color)");
    }, function(){
      if ($(this).attr("class") !== "active") {
        $(this).css("background-color", "inherit");
      }
    }
  );

  $("li").click(function() {
    $(".menu-container").children().attr("class", "tab-btn ng-binding ng-scope").css("background-color", "inherit");
    $(this).attr("class", "active").css("background-color", "var(--main-color)");
  });

});
