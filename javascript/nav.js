// $(document).ready(function() {
//     //desktop - scroll down then hide top nav
//     //mobile - scroll down then hide top nav EXCEPT if top nav is open, then leave top nav open
//
//     $(window).scroll(
//         {
//             previousTop: 0
//         },
//
//         function () {
//         var currentTop = $(window).scrollTop();
//         if (currentTop <= this.previousTop) {
//             $(".topnav").show();
//         } else {
//             $(".topnav").hide();
//             $(".topnav.open").show();
//         }
//         this.previousTop = currentTop;
//     });
// })

$(document).ready(function() {
	// get nav
  $Nav = $('.topnav');
  // set initial scroll for comparison
	var scroll = 0;
  // how far you want to scroll before nav dissappears
  var scrollOffset = 50;
  // when window scrolls
  $(window).scroll(function(event){
  	// on scroll retrieve new scroll position
		var newScrollPos = $(this).scrollTop();
		if (newScrollPos > scrollOffset){
       // if the new position is > offset
			// user scrolling down hide nav
     if( $('.topnav-is-hidden').length == 0 ) {
			$Nav.addClass('topnav-is-hidden');
     }
		}
		if(newScrollPos < scroll )  {
       // if new scroll pos is < than the last position
			// user is scrolling up show nav
			$Nav.removeClass('topnav-is-hidden');
      $Nav.addClass('topnav.open');
		}
		scroll = newScrollPos;
	});
});
