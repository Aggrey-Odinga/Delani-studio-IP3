$(document).ready(function(){
 $("#design-text").hide();
});
$(".design").on('click', function(event){
$("#design-text").show();
});
$(document).ready(function(){
 $("#dev-text").hide();
});
$(".develop").on('click', function(event){
console.log("designclick")
$("#dev-text").show();
});
$(document).ready(function(){
 $("#product-text").hide();
});
$(".product").on('click', function(event){
console.log("designclick")
$("#product-text").show();
});