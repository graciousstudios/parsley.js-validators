/*
 * parsley.js - time validator | Zowie van Geest | http://parsleyjs.org/ | http://www.graciousstudios.nl/
 * Check if the time is HH:MM
 * Formatted time: hh-mm
 * Example: data-parsley-time
*/

// Inputfield Time Validation
window.ParsleyValidator.addValidator('time', function (value, requirement) {

        var time = value;
        var regex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

        if(time.match(regex)){
            return true;
        } else {
            return false;
        }
    }, 303)
    .setLocale('nl')
    .addMessage('en', 'time', 'This value should be a valid time.')
    .addMessage('nl', 'time', 'Deze waarde moet een tijd zijn.');