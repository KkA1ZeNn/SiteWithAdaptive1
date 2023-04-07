$(document).ready(function() {

   var numberofcorrect = 0;

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

   $('.menu__item').click(function() {
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
      $('body').removeClass('open-menu');
      $('html').removeClass('open-menu');
      $('.popapquest').removeClass('open-menu');
      $('.standartwindow').removeClass('inactive');
      $('.question1').addClass('inactive');
      $('.question1-answer').addClass('inactive');
      $('.answer-header2').addClass('inactive');
      $('.answer-header1').removeClass('inactive');
      $('.result-of-test').addClass('inactive');
      if (document.querySelector('input[name="question1"]:checked'))
      {
         document.querySelector('input[name="question1"]:checked').checked = false;
      }
      numberofcorrect = 0
   });

   $('.result__button').click(function() {
      $('body').removeClass('open-menu');
      $('html').removeClass('open-menu');
      $('.popapquest').removeClass('open-menu');
      $('.standartwindow').removeClass('inactive');
      $('.question1').addClass('inactive');
      $('.question1-answer').addClass('inactive');
      $('.answer-header2').addClass('inactive');
      $('.answer-header1').removeClass('inactive');
      $('.result-of-test').addClass('inactive');
      if (document.querySelector('input[name="question1"]:checked'))
      {
         document.querySelector('input[name="question1"]:checked').checked = false;
      }
      numberofcorrect = 0
   });

   $('.popapbut').click(function() {
      $('.standartwindow').addClass('inactive');
      $('.question1').removeClass('inactive');
   });

   $('.question1__button').click(function() {
      let checked = document.querySelector('input[name="question1"]:checked');
      if (checked)
      {
         $('.question1').addClass('inactive');
         $('.question1-answer').removeClass('inactive');
         if (checked.value != "correct")
         {
            $('.answer-header1').addClass('inactive');
            $('.answer-header2').removeClass('inactive');
         }
         else
         {
            ++numberofcorrect;
         }
      }
      else
      {
         alert('Вы не выбрали вариант ответа');
      }
   });

   $('.answer1__button').click(function() {
      var str = numberofcorrect.toString();
      $('.question1-answer').addClass('inactive');
      $('.result-of-test').removeClass('inactive');
      $('.my__result').text(str);
   });
});