$(document).ready(function() {
   $('.menu_burger').click(function() {
       $('.header_nav_elements').toggleClass('open-menu');
       $('body').toggleClass('open-menu');
   });

   $('.closesign').click(function() {
      $('.header_nav_elements').removeClass('open-menu');
      $('body').removeClass('open-menu');
  });

  
});