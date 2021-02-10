import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/lang/en.json'
import nl from '@/lang/nl.json'
import de from '@/lang/de.json'

Vue.use(VueI18n);

// Object holding all the key-value pairs of translations.
const messages = {
    'nl': nl,
    'en': en,
    'de': de
};

export const currentLocale = navigator.language.split('-')[0];

export const i18n = new VueI18n({
    locale: navigator.language.split('-')[0],   // Get language code from browser and set as default.
    fallbackLocale: 'en',
    messages
});