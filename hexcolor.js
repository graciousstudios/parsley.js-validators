/*
 * parsley.js - hexcolor validator | Maarten Paauw | http://parsleyjs.org/ | http://www.graciousstudios.nl/
 * Check if value is a valid hex color.
 * Formatted hex color: #FFFFFF 
 * Example hexcolor: data-parsley-hexcolor
 */

window.ParsleyConfig = {
    validators: {
        hexcolor: {
            fn: function (value) {
                var hexcolor = value,
                    regex    = /^(#){1}([a-fA-F0-9]){6}$/;

                return hexcolor.match(regex) ? true : false;
            },
            priority: 32
        }
    },
    i18n: {
        en: {
            hexcolor: 'This value should be a valid hex color code.'
        },
        nl: {
            hexcolor: 'Deze waarde moet een geldige hex kleur code zijn.'
        }
    }
};