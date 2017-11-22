$(document).ready(function () {
  var trigger = $('.header__toggle');

  trigger.on('click', function () {

    $(this).next().toggleClass('header__menu--active');
  })

});