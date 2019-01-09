## 富文本解析器
用于解析富文本内容，提取富文本里面的资源等各种信息

## 用法示例
``` javascript
import Parser from 'rich-text-parser';
let parser = new Parser();
let result = parser.parse(textStr, options);
console.log(result); // 解析后的对象
```

## API
- **Parser** 构造函数
    - 初始化参数 **object**
        - xss : 默认 true 是否进行xss过滤
        - trim : 默认 true 是否去掉多余的空格
        - parseResource : 默认 true 是否解析文本中的资源
- **实例方法**
    - **parse(textStr, options)**
        - 返回值：**object** ```{resource, parsedText}```
            - resource **object**
                - 文本里面的所有资源对象
                - 数据结构如下：
                ```javascript
                    {   
                        iframe: ['http://sample/sample.html'], /* iframe 链接 */
                        img: ['http://sample/sample.png'], /* 图片链接 */
                        link: ['http://sample/sample.css'], /* css链接 */
                        script: ['http://sample/sample.js'] /* js 链接 */
                    } 
                ```
            - parsedText **string** 
                - 解析处理后的文本
                
        - 参数：
            - textStr **string**
                - 被解析的字符串
                - 必须：是
                - 默认值：''
            - options **object**
                - 本次解析的参数
                - 必须：否
                - 取值参考初始化参数
