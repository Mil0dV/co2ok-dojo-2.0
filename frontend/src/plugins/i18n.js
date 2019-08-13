import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

// Loads all the js files from the lang/nl_ folder into variable.
var nl = require('glob').sync('../lang/nl_/**/*.js').forEach(
    function(file) {
        require(require('path').resolve(file));
    }
);

var en = require('glob').sync('../lang/en_/**/*.js').forEach(
    function(file) {
        require(require('path').resolve(file));
    }
);

// Object holding all the key-value pairs of translations.
const messages = {
    'nl': nl,
    'en': en
};

const i18n = new VueI18n({
    locale: 'nl',
    fallbackLocale: 'en',
    messages
});