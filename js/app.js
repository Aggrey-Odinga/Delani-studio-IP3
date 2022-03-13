$(document).ready(function () {
  $("#design-text").hide();
  $("#dev-text").hide();
  $("#product-text").hide();
});

$(".design").on("click", function (event) {
  $("#design-text").show();
  $('.design').hide();
  
});
$("#design-text").on("click", function (event){
   $("#design-text").hide();
   $('.design').show();
});

$(".develop").on("click", function (event) {
  $("#dev-text").show();
  $('.develop').hide();
});
$("#dev-text").on("click", function (event){
   $("#dev-text").hide();
   $('.develop').show();
});

$(".product").on("click", function (event) {
  $("#product-text").show();
   $('.product').hide();
});
$("#product-text").on("click", function (event){
   $("#product-text").hide();
   $('.product').show();
});

