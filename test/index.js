let Parser = require('../src/index');
let parser = new Parser();

let str = `
    <div id="dialog">
        盼望着，盼望着，冬天来了，春天的脚步进了，一切都像刚睡醒的样子。
        <script src="https://hacker.com/a.js?t=1"></script>
        <link rel="stylesheet" type="text/css" href="http://hacker.com:8110/xxx.css?t=ss"/>
        <img class="xxx" id="???" data-ip="jjj" src="http://hacker.com/pic/">
        <iframe src="http://hacker.com/iframe/"></iframe>
        <script>alert('hhh');</script>
    </div>
`;

let result = parser.parse(str);

console.log(result);