(function( $ ) {
    $(function() {
        $( "#stop" ).click(function() {
            $( "#animated" ).addClass( "off" );
        });
        $( "#start" ).click(function() {
            $( "#animated" ).removeClass( "off" );
        });
    });

})( jQuery );