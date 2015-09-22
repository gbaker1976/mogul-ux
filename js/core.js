function addClass( el, cls ){
    if ( !el || !cls ) return;

	var currCls = (el.getAttribute( 'class' ) || '').split(' ');
    var idx = currCls.indexOf( cls );

    if ( idx < 0 ) {
        currCls.push( cls );
    }

    el.setAttribute( 'class', currCls.join(' ') );
}

function removeClass( el, cls ){
    if ( !el || !cls ) return;

	var currCls = (el.getAttribute( 'class' ) || '').split(' ');
    var idx = currCls.indexOf( cls );

    if ( idx > -1 ) {
        currCls.splice( idx, 1 );
    }

    el.setAttribute( 'class', currCls.join(' ') );
}
