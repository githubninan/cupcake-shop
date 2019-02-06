
/*  $("h1").click(function() {
    alert("This is header.");
  });
  $("p").click(function(){
    alert ("This is a paragraph");
  });
  $ ("img").click(function(){
    alert("This is an image :)");

});*/
$(document).ready(function () {
  $(".clickable").click(function() {
    $("#cupcake-showing").toggle();
    $("#cupcake-hidden").toggle();
  });
});
