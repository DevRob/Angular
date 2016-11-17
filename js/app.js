var app = angular.module("portfolio", []);

function swapCss() {
  $('#css').attr( 'href', "css/alternative.css" );
}

$(document).ready(function(){

  $("li").hover(function(){
    $(this).css("background", "darkblue");
    }, function(){
      if ($(this).attr("class") !== "active") {
        $(this).css("background-color", "blue");
      }
    }
  );

  $("li").click(function() {
    $("#carousel").children().attr("class", "tab-btn ng-binding ng-scope").css("background-color", "blue");
    $(this).attr("class", "active").css("background-color", "darkblue");
  });

});
