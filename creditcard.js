/*
 * parsley.js - credicard validator | Suraj Sanchit | http://parsleyjs.org/ | http://www.graciousstudios.nl/
 * Refactored from parsley v1.0
 *
 * Example CVV: data-parsley-cvv
 * Example Creditcard: data-parsley-creditcard
*/

// Creditcard validation
//---------------------------------------
window.ParsleyConfig.validators.creditcard = {
	fn: function (value) {
		var digit, n, _j, _len1, _ref2, 
			sum = 0;
		
		value = value.replace(/[ -]/g, '');
		_ref2 = value.split('').reverse();
		
		for (n = _j = 0, _len1 = _ref2.length; _j < _len1; n = ++_j) {
			digit = _ref2[n];
			digit = +digit;
		    
		    if (n % 2) {
				digit *= 2;
				
				if (digit < 10) {
					sum += digit;
				} else {
					sum += digit - 9;
				}
			} else {
				sum += digit;
			}
		}
		return sum % 10 === 0;
	},
	priority: 32
};

// CCV Verification
//---------------------------------------
window.ParsleyConfig.validators.cvv = {
	fn: function (value) {
		return /^[0-9]{3,4}$/.test(value);
	},
	priority: 32
};
