/*
 * parsley.js - ifnotempty validator | Suraj Sanchit | http://parsleyjs.org/ | http://www.graciousstudios.nl/
 * We use this to ignore validation for update info forms if fields are not filled or changed
 *
 * Example CVV: data-parsley-ifnotempty="#selector"
 * Example Creditcard: data-parsley-validatedifempty
*/

// Validate if not empty
//---------------------------------------
window.ParsleyConfig.validators.ifnotempty = {
	fn: function (value) {
		return $(value).length ? false : true;
	},
	priority: 256
};

// Validated if empty
//---------------------------------------
window.ParsleyConfig.validators.validatedifempty = {	
	fn: function (value) {
		return $(value).length ? true : false;
	},
	priority: 32
};