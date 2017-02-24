var wrap = $(window);
var border =  $('.typesregsection').offset().top;
border= border-500;

wrap.on("scroll", function(e) {

  if (e.currentTarget.scrollY> border) {
   $('#serviceid').css('position','absolute');
  }else{
  $('#serviceid').css('position','fixed');
  }
 
});