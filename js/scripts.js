$(document).ready(function () {
  $(".clickable").click(function() {
    $("#cupcake-showing").toggle();
    $("#cupcake-hidden").toggle();
  });

  $(".clickme").click(function() {
    $("#pastries-fadein").fadeIn();
    $("#pastries-fadein").fadeOut();
  });

  $(".clickme1").click(function() {
    $("#pastries-showing").fadeToggle();
    $("#pastries-hidden").fadeToggle();
  });

$("button#black-background").click (function() {
  $ ("body").addClass("black-background");
});
$("button#white-background").click (function() {
  $ ("body").addClass("white-background");
});
});
