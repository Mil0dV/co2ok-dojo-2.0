var fs = require('fs');


// import all language files
var nl_home = require('./nl_/nl_home2.js');
var en_home = require('./en_/en_home2.js');

console.log('execute compile.js');

// name of home language kit
// add more language kit files later
var home_language_kit = "src/lang/lang_home2.json";

// exmaple homepage language object
// add more language objects later
var home_language_kit_object = {
    lang_nl_home2: nl_home.lang_nl_home2,
    lang_en_home2: en_home.lang_en_home2
};

// create New Home Language Kit
createLanguageKit(home_language_kit, home_language_kit_object);

function createLanguageKit(fileName, output) {
    console.log('create HomeLanguageKit');
    // console.log('create HomeLanguageKit', output); //debug

    // try to remove old file
    try {
        fs.unlink(fileName, function () {
            console.log('reset file');
        });
    } catch (error) { console.log('error with reset file', error); }

    // try to create new file with new language object
    try {
        fs.appendFile(fileName, JSON.stringify(output), function (err) {
            if (err) throw err;
            console.log('HomeLanguageKit saved!');
        });
    } catch (error) { console.log('error creating file', error); }
}

