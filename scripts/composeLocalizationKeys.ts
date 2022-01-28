import fs = require('fs');

const standardIndent = '   ';
const commentPrefix = '_';
const getLocalizationNodeString = (parentObject: object, prefix: string = '', indent: string = standardIndent): string => {

    const keys = [ ...Object.keys(parentObject).filter(s => s.substr(0, 1) !== commentPrefix)];
    keys.sort();

    const entries = keys.map(key => {

        const childEntry = parentObject[key];
        if (typeof(childEntry) === 'string') {
            return prefix === '' ?
                `${indent}public static ${key} = '${key}';\r\n` :
                `${indent}${key} : '${prefix}${key}',\r\n`;
        } else {
            const contents = getLocalizationNodeString(childEntry, prefix + key + '.', indent + standardIndent);
            return prefix === '' ?
                `${indent}public static ${key} = {\r\n${contents}${indent}};\r\n` :
                `${indent}${key} : {\r\n${contents}${indent}},\r\n`;
        }
    });

    return entries.join('');
};

try {
    const localeFileLocation = './src/localization/locales/en.json';
    const keyDefinitionFile = './src/localization/resourceKeys.ts';
    const localeFileContents =  fs.readFileSync(localeFileLocation, 'utf-8');
    const localeFileObject = JSON.parse(localeFileContents);

    const nodes = getLocalizationNodeString(localeFileObject);
    const keyDefinitionFileContents =  `export class ResourceKeys {\r\n ${nodes}}\r\n`;

    fs.writeFileSync(keyDefinitionFile, keyDefinitionFileContents);
    // tslint:disable-next-line:no-console
    console.log('Localization keys transcribed to ResourceKeys.ts');
} catch (exception) {
    // tslint:disable-next-line:no-console
    console.log(`Failed to generate localization keys ${exception}`);
}
