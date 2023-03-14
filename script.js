$(document).ready(function() {
   $('.menu_burger').click(function() {
       $('.header_nav_elements').toggleClass('open-menu');
       $('body').toggleClass('open-menu');
       $('html').toggleClass('open-menu');
   });

   $('.closesign').click(function() {
      $('.header_nav_elements').removeClass('open-menu');
      $('body').removeClass('open-menu');
      $('html').removeClass('open-menu');
  });

  $('.mobile-way_wrapper').click(function() {
   const $form = document.getElementById('last__point');
   $form.scrollIntoView({inline: "start", behavior: "smooth"});
  });
});