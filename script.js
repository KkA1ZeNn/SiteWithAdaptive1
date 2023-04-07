$(document).ready(function() {
   $('.menu_burger').click(function() {
       $('.header_nav_elements').addClass('open-menu');
       $('body').addClass('open-menu');
       $('html').addClass('open-menu');
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

   $('.main__top__button').click(function() {
      $('body').addClass('open-menu');
      $('html').addClass('open-menu');
      $('.popapquest').addClass('open-menu');
   });

   $('.closepopap').click(function() {
      $('.standartwindow').removeClass('inactive');
      $('.question1').addClass('inactive');
      $('body').removeClass('open-menu');
      $('html').removeClass('open-menu');
      $('.popapquest').removeClass('open-menu');
   });

   $('.popapbut').click(function() {
      $('.standartwindow').addClass('inactive');
      $('.question1').removeClass('inactive');
   });

});