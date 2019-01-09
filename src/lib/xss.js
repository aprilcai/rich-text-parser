/**
 * xss 过滤器
 */
let replaceMap = {
    '<': '&lt',
    '>': '&gt'
};

function filterScriptTag(str) {
    return str.replace(/(<)(\/?script)(>)?/gi, function () {
        console.log(arguments)
        var leftArr = arguments[1];
        var rightArr = arguments[3];
        var middle = arguments[2];
        return (replaceMap[leftArr] || '') + middle + (replaceMap[rightArr] || '');
    });
}

function xssFilter(str) {
   let result = filterScriptTag(str);
   return result;
}

module.exports = xssFilter;