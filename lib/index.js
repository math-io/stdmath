'use strict';

// MODULES //

var setReadOnly = require( 'utils-define-read-only-property' );


// STDMATH //

var stdmath = {};
setReadOnly( stdmath, 'erf', require( 'math-erf' ) );
setReadOnly( stdmath, 'signum', require( 'math-signum' ) );
setReadOnly( stdmath, 'gamma', require( 'math-gamma' ) );
setReadOnly( stdmath, 'abs', require( 'math-abs' ) );
setReadOnly( stdmath, 'betaln', require( 'math-betaln' ) );
setReadOnly( stdmath, 'gammaln', require( 'math-gammaln' ) );
setReadOnly( stdmath, 'hypot', require( 'math-hypot' ) );
setReadOnly( stdmath, 'erfcinv', require( 'math-erfcinv' ) );
setReadOnly( stdmath, 'erfc', require( 'math-erfc' ) );
setReadOnly( stdmath, 'digamma', require( 'math-digamma' ) );
setReadOnly( stdmath, 'ln', require( 'math-ln' ) );
setReadOnly( stdmath, 'floor', require( 'math-floor' ) );
setReadOnly( stdmath, 'factorial', require( 'math-factorial' ) );
setReadOnly( stdmath, 'exp', require( 'math-exp' ) );
setReadOnly( stdmath, 'binomcoef', require( 'math-binomcoef' ) );
setReadOnly( stdmath, 'ceil', require( 'math-ceil' ) );
setReadOnly( stdmath, 'sin', require( 'math-sin' ) );
setReadOnly( stdmath, 'tan', require( 'math-tan' ) );
setReadOnly( stdmath, 'roundn', require( 'math-roundn' ) );
setReadOnly( stdmath, 'truncate', require( 'math-truncate' ) );
setReadOnly( stdmath, 'round', require( 'math-round' ) );
setReadOnly( stdmath, 'sqrt', require( 'math-sqrt' ) );
setReadOnly( stdmath, 'erfinv', require( 'math-erfinv' ) );
setReadOnly( stdmath, 'evalpoly', require( 'math-evalpoly' ) );
setReadOnly( stdmath, 'sinpi', require( 'math-sinpi' ) );
setReadOnly( stdmath, 'evalrational', require( 'math-evalrational' ) );
setReadOnly( stdmath, 'cos', require( 'math-cos' ) );
setReadOnly( stdmath, 'powm1', require( 'math-powm1' ) );
setReadOnly( stdmath, 'cospi', require( 'math-cospi' ) );
setReadOnly( stdmath, 'uint8Bits', require( 'math-uint8-bits' ) );
setReadOnly( stdmath, 'absoluteDifference', require( 'math-absolute-difference' ) );
setReadOnly( stdmath, 'uint16Bits', require( 'math-uint16-bits' ) );
setReadOnly( stdmath, 'zeta', require( 'math-riemann-zeta' ) );
setReadOnly( stdmath, 'float64ToFloat32', require( 'float64-to-float32' ) );
setReadOnly( stdmath, 'pow', require( 'math-power' ) );

stdmath.float32 = {};
setReadOnly( stdmath.float32, 'bits', require( 'math-float32-bits' ) );
setReadOnly( stdmath.float32, 'toWord', require( 'math-float32-to-word' ) );
setReadOnly( stdmath.float32, 'frexp', require( 'math-float32-frexp' ) );
setReadOnly( stdmath.float32, 'signbit', require( 'math-float32-signbit' ) );
setReadOnly( stdmath.float32, 'significand', require( 'math-float32-significand' ) );
setReadOnly( stdmath.float32, 'normalize', require( 'math-float32-normalize' ) );
setReadOnly( stdmath.float32, 'fromWord', require( 'math-float32-from-word' ) );
setReadOnly( stdmath.float32, 'exponent', require( 'math-float32-exponent' ) );
setReadOnly( stdmath.float32, 'fromBits', require( 'math-float32-from-bits' ) );
setReadOnly( stdmath.float32, 'nextafter', require( 'math-float32-nextafter' ) );

stdmath.float64 = {};
setReadOnly( stdmath.float64, 'flipsign', require( 'math-float64-flipsign' ) );
setReadOnly( stdmath.float64, 'bits', require( 'math-float64-bits' ) );
setReadOnly( stdmath.float64, 'signbit', require( 'math-float64-signbit' ) );
setReadOnly( stdmath.float64, 'frexp', require( 'math-float64-frexp' ) );
setReadOnly( stdmath.float64, 'normalize', require( 'math-float64-normalize' ) );
setReadOnly( stdmath.float64, 'ldexp', require( 'math-float64-ldexp' ) );
setReadOnly( stdmath.float64, 'getHighWord', require( 'math-float64-get-high-word' ) );
setReadOnly( stdmath.float64, 'toWords', require( 'math-float64-to-words' ) );
setReadOnly( stdmath.float64, 'fromWords', require( 'math-float64-from-words' ) );
setReadOnly( stdmath.float64, 'copysign', require( 'math-float64-copysign' ) );
setReadOnly( stdmath.float64, 'setLowWord', require( 'math-float64-set-low-word' ) );
setReadOnly( stdmath.float64, 'getLowWord', require( 'math-float64-get-low-word' ) );
setReadOnly( stdmath.float64, 'nextafter', require( 'math-float64-nextafter' ) );
setReadOnly( stdmath.float64, 'fromBits', require( 'math-float64-from-bits' ) );
setReadOnly( stdmath.float64, 'exponent', require( 'math-float64-exponent' ) );
setReadOnly( stdmath.float64, 'setHighWord', require( 'math-float64-set-high-word' ) );
setReadOnly( stdmath.float64, 'log1P', require( 'math-float64-log1p' ) );
setReadOnly( stdmath.float64, 'expm1', require( 'math-float64-expm1' ) );


// EXPORTS //

module.exports = stdmath;
