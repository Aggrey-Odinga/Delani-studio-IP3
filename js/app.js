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

$("#btn-submit").on("click", function (event){
console.log("modal")
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;
// reset input form
$('#name').val('');
$('#email').val('');
$('#message').val('');

if (name == ""){
  alert("please enter name")
  return
}
if (email == ""){
  alert("please enter email")
  return
}
if (message == ""){
  alert("please enter message")
  return
}

$("#myModal .modal-body").text(name + ' we have received your message. Thank you for reaching out to us.');
var modal = document.getElementById("myModal");
 modal.style.display = "block";
});

$(".close").on("click", function (event){
var modal = document.getElementById("myModal");
 modal.style.display = "none";
});

