/**
 * 去除多余的空格
 */

let reg = /[>\n\\n](\s+)<+/gi; // todo 需要优化一下
function trim(str) {
    str = str.trim();
    return str.replace(reg, function () {
        var match = arguments[0];
        var target = arguments[1];
        if (target) {
            return match.replace(target,'');
        }
        return match;
    });
}

module.exports = trim;