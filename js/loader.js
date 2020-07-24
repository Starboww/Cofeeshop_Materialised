$(document).ready(function(){//call back function
  $('.parallax').parallax();
   $('.modal').modal();
   $('.sidenav').sidenav();
   //sliders
   $(".slider").slider({full_width:true});
   $(".myreviews").carousel({
     numVisible: 7,
     shift: 55,
     padding: 55,
   });


})
function toggleModal(){
  var instance =M.Modal.getInstance($('#modal3'))//using # for id (as model3 is target id) if you want to target class use .
  instance.open();}
