var fs = require('fs');


//NB: voor de steps/compensation/how pagina is het nl_compensation en en_how :X

// import all language files
// var nl_home = require('./nl_/nl_compensation.js');
// var en_home = require('./en_/en_how.js');

console.log('execute compile.js');

createLanguageJsonFile('nl')
createLanguageJsonFile('en')
createLanguageJsonFile('de')

function createLanguageJsonFile(languageCode) {

    var inputFileNames = fs.readdirSync('C:\\src\\co2ok-dojo-2.0\\frontend\\src\\lang\\' + languageCode + "_");

    var uberObject = {}

    for (var i=0; i<inputFileNames.length; i++) {

        var inputFileName = inputFileNames[i];

        var bareName = inputFileName.substring(
            inputFileName.indexOf('_') + 1,
            inputFileName.indexOf('.'));
        var objectName = 'lang_' + languageCode + '_' + bareName;

        var pageMessages = require('./' + languageCode + '_/' + inputFileName)[objectName]

        var renamedPageMessages = {}

        for (var key in pageMessages) {
            renamedPageMessages[key] = pageMessages[key]
        }

        uberObject[bareName] = renamedPageMessages
    }

    var outputFileName = "src/lang/" + languageCode + ".json";
    try {
        fs.appendFile(outputFileName, JSON.stringify(uberObject, null, 1), function (err) {
            if (err) throw err;
            console.log('HomeLanguageKit saved!');
        });
    } catch (error) { console.log('error creating file', error); }
}

// name of home language kit
// add more language kit files later
var home_language_kit = "src/lang/lang_compensation.json";

// exmaple homepage language object
// add more language objects later
var home_language_kit_object = {
    lang_nl_compensation: nl_home.lang_nl_compensation,
    lang_en_compensation: en_home.lang_en_how
};

// create New Home Language Kit
// createLanguageKit(home_language_kit, home_language_kit_object);

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
        fs.appendFile(fileName, JSON.stringify(output, null, 1), function (err) {
            if (err) throw err;
            console.log('HomeLanguageKit saved!');
        });
    } catch (error) { console.log('error creating file', error); }
}

