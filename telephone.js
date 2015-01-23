/*
 * parsley.js - international phone number validator | Zowie van Geest | http://parsleyjs.org/ | http://www.graciousstudios.nl/
 * Check if the phone number contains an international country code like (+310)
 * Formatted international phone number
 * Example: data-parsley-tel
*/

// Inputfield Telephone Validation
window.ParsleyValidator.addValidator('tel', function (value) {

        var tel = value;
        var regex = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;

        if(tel.match(regex)){
            return true;
        } else {
            return false;
        }
    }, 304)
    .setLocale('nl')
    .addMessage('en', 'tel', 'This value should be a valid phone number')
    .addMessage('nl', 'tel', 'Deze waarde moet een geldig telefoon nummer bevatten');