'use strict';

// MODULES //

var tape = require( 'tape' );
var stdmath = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.equal( typeof stdmath, 'object', 'main export is an object' );
	t.end();
});
