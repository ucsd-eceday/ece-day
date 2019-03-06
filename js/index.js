$('.triangle').click(function(){
  $("body").animate({ scrollTop: window.pageYOffset + $(window).height()}, 600);
  return false;
});
