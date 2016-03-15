'use strict';

// STDMATH //

var stdmath = {};
stdmath.signum = require( 'math-signum' );
stdmath.erfc = require( 'math-erfc' );
stdmath.hypot = require( 'math-hypot' );
stdmath.erfcinv = require( 'math-erfcinv' );
stdmath.abs = require( 'math-abs' );
stdmath.gammaln = require( 'math-gammaln' );
stdmath.digamma = require( 'math-digamma' );
stdmath.erfinv = require( 'math-erfinv' );
stdmath.betaln = require( 'math-betaln' );
stdmath.sqrt = require( 'math-sqrt' );
stdmath.erf = require( 'math-erf' );
stdmath.factorial = require( 'math-factorial' );
stdmath.gamma = require( 'math-gamma' );
stdmath.ln = require( 'math-ln' );
stdmath.floor = require( 'math-floor' );
stdmath.binomcoef = require( 'math-binomcoef' );
stdmath.truncate = require( 'math-truncate' );
stdmath.ceil = require( 'math-ceil' );
stdmath.round = require( 'math-round' );
stdmath.roundn = require( 'math-roundn' );
stdmath.cos = require( 'math-cos' );
stdmath.exp = require( 'math-exp' );
stdmath.sin = require( 'math-sin' );
stdmath.evalpoly = require( 'math-evalpoly' );
stdmath.sinpi = require( 'math-sinpi' );
stdmath.evalrational = require( 'math-evalrational' );
stdmath.uint8Bits = require( 'math-uint8-bits' );
stdmath.powm1 = require( 'math-powm1' );
stdmath.cospi = require( 'math-cospi' );
stdmath.uint16Bits = require( 'math-uint16-bits' );
stdmath.absoluteDifference = require( 'math-absolute-difference' );
stdmath.zeta = require( 'math-riemann-zeta' );
stdmath.float64ToFloat32 = require( 'float64-to-float32' );
stdmath.pow = require( 'math-power' );

stdmath.float32 = {};
stdmath.float32.signbit = require( 'math-float32-signbit' );
stdmath.float32.bits = require( 'math-float32-bits' );
stdmath.float32.exponent = require( 'math-float32-exponent' );
stdmath.float32.normalize = require( 'math-float32-normalize' );
stdmath.float32.significand = require( 'math-float32-significand' );
stdmath.float32.fromWord = require( 'math-float32-from-word' );
stdmath.float32.toWord = require( 'math-float32-to-word' );
stdmath.float32.fromBits = require( 'math-float32-from-bits' );
stdmath.float32.frexp = require( 'math-float32-frexp' );
stdmath.float32.nextafter = require( 'math-float32-nextafter' );

stdmath.float64 = {};
stdmath.float64.signbit = require( 'math-float64-signbit' );
stdmath.float64.flipsign = require( 'math-float64-flipsign' );
stdmath.float64.bits = require( 'math-float64-bits' );
stdmath.float64.copysign = require( 'math-float64-copysign' );
stdmath.float64.toWords = require( 'math-float64-to-words' );
stdmath.float64.normalize = require( 'math-float64-normalize' );
stdmath.float64.frexp = require( 'math-float64-frexp' );
stdmath.float64.ldexp = require( 'math-float64-ldexp' );
stdmath.float64.fromWords = require( 'math-float64-from-words' );
stdmath.float64.getLowWord = require( 'math-float64-get-low-word' );
stdmath.float64.getHighWord = require( 'math-float64-get-high-word' );
stdmath.float64.setHighWord = require( 'math-float64-set-high-word' );
stdmath.float64.setLowWord = require( 'math-float64-set-low-word' );
stdmath.float64.fromBits = require( 'math-float64-from-bits' );
stdmath.float64.exponent = require( 'math-float64-exponent' );
stdmath.float64.nextafter = require( 'math-float64-nextafter' );
stdmath.float64.log1P = require( 'math-float64-log1p' );
stdmath.float64.expm1 = require( 'math-float64-expm1' );


// EXPORTS //

module.exports = stdmath;
