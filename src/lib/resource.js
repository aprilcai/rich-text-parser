/**
 * 资源解析
 * 将字符串里面的各种资源都解析出来
 */
// 规则解释： (标签类型) | class,id,data-xx等属性 | src,href | (对应的链接)
let reg = /(iframe|img|link|script)+[^>]*[src|href]+\=["|']+(\w+:\/\/[^/:"']*[:\d]*[^#"' ]*)/ig;

function parseResource(str) {

    // 目前支持的类型
    let resource = {
        iframe: [], // iframe
        img: [],    // 图片
        link: [],   // 样式
        script: []  // js
    };

    // 通过replace方法来实现提取类型和链接
    str.replace(reg, function () {
        let type = (arguments[1] || '').toLowerCase();
        let url = arguments[2] || '';
        if (/^[a-z]+$/.test(type) && type in resource) {
            resource[type].push(url);
        }
        return arguments[0];
    });

    return resource;
}

module.exports = parseResource;