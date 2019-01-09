let xss = require('./xss');
let parseResource = require('./resource');
let trim = require('./trim');

class Parser {

    constructor(globalOptions) {
        this.globalOptions = globalOptions || {
            trim: true,
            xss: true,
            parseResource: true
        };
    }

    parse(textStr, options) {
        let resultText = textStr;
        let resource = {};
        let mergedOptions = Object.assign(this.globalOptions, options || {});
        if (mergedOptions.parseResource) {
            resource = parseResource(textStr);
        }
        
        if (mergedOptions.trim) {
            resultText = trim(resultText);
        }

        if (mergedOptions.xss) {
            resultText = xss(resultText);
        }
        return {
            resource: resource,
            parsedText: resultText
        };
    }
}

module.exports = Parser;