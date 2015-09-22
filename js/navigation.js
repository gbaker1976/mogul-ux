window.addEventListener( 'scroll', function(e){
    if ( window.pageYOffset > 0 ) {
    	addClass( document.querySelectorAll( 'nav' )[0], 'locked' );
    } else {
        removeClass( document.querySelectorAll( 'nav' )[0], 'locked' );
    }
});
