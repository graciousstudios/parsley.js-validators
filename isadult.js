/*
 * parsley.js - isadult validator | Suraj Sanchit | http://parsleyjs.org/ | http://www.graciousstudios.nl/
 * Check if the date of birth entered >= value
 * Formatted date: dd-mm-jjjj
 * Example: data-parsley-isadult="18"
*/

window.ParsleyValidator.addValidator('isadult', function(value, requirement){
	var birthday = value,
		validDate = value.match(/(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[012])-((19|20)\d\d)/g),
		datePattern = /(\d{2})-(\d{2})-(\d{4})/, 
		validBirthday = new Date();
	
	validBirthday = validBirthday.setYear(validBirthday.getYear() - requirement);
	
	if(validDate !== null) {						
		birthday = new Date(birthday.replace(datePattern,'$3-$2-$1'));
		
		if(birthday < validBirthday) {
			return true;
		}
	}
	
		return false;
	
}, 40)
.addMessage('en', 'isadult', 'To participate you need to be at least %s years old')
.addMessage('nl', 'isadult', 'Om mee te doen dient u minimal %s jaar oud te zijn');