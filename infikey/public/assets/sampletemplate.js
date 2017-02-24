/*$(document).ready(function(){
	var wrap = $("#serviceid");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop() > 4505) {
    wrap.addClass("absolute");
  } else {
    wrap.removeClass("absolute");
  }
  
}); 
});*/


 var windw = this;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);
    
    $window.scroll(function(e){
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};

$('#serviceid').followTo(50);






    
