/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';
  $('.nav__link').click(function () {
    $('.nav__link').removeClass('active');
    $(this).addClass('active');
    if($(window).width()<=1024){
      $('.nav__list').hide();
      $('.burger-menu').toggleClass('is-active');
      $('body, html').toggleClass('ovh');
    }
  });



  $('.burger-menu').click(function() {
      $(this).toggleClass('is-active');
      $('body, html').toggleClass('ovh');
      if($(this).hasClass('is-active')){
        $('.nav__list').show();
      }
      else{
        $('.nav__list').hide();
      }
  });



  $(window).on('load',function(){
           if($(window).width() <= 1024){
             $('.nav__list').mCustomScrollbar();
     }

  });

})(jQuery, window, document);
