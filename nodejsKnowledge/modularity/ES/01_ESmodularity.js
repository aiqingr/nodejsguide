/* 
    默认情况下node的模块化标准是CommonJS
    想要使用ES的模块化，可以采用以下方式
    1）使用mjs为扩展名
    2）修改package.js
        修改"type": "module"当前项目下所有的js文件都默认为ES module
        
*/

// 引入自定义模块，es模块不可以省略扩展名（官方标准）

// ES默认就是在严格模式下
//通过ES模块化，导入的内容都是常量

// ES模块化在浏览器中也同样支持， 通常我们都不会直接使用，考虑到兼容问题
// 通常都会结合打包工具使用
import { a } from "./m1.mjs"

console.log(a)
