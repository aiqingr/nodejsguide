/* 
    早期的网页中，是没有一个实质的模块化规范的
    我们实现模块化的方式，就是最原始的通过script标签来引入多个js文件
    问题：
        1）无法选择要引入模块的那些内容
        2）在复杂的场景中非常容易出错
    于是，我们就继续在JS中引入一个模块化的解决方案

    在node中，默认支持的模块化规范就是CommonJS
    在CommonJS中，一个文件就是一个模块

    CommonJS规范
        - 引入模块
            - 使用require(“模块的路径”)函数来引入模块
            - 引入自定义模块时
                - 模块要以./ 或者../开头(扩展名可以不写)
                - 扩展名不写的时候
                    node会自动为文件补全扩展名
                    .js --> .json --> .node
            - 引入核心模块
                - 直接写核心模块就可以了
                - 或者在核心模块前加node：增快寻找速度
*/

/* 
    在定义模块时，模块中的内容默认是不能被外部看到的
        可以通过exports来设置向外面暴露的内容

    访问exports有两种方式
        1）exports
        2）module.exports
        - 当我们在其他模块中引入当前模块的时候，require函数的返回就是exports
        - 可以将希望暴露给外部模块的内容设置为exports的属性

*/
import "../ES/m1.mjs"
const m1 = require("./01_m1")
const m2 = require("./02_原理")
const path = require("node:path")
console.log(a)

console.log('m1', m1)

console.log(m1.a)

console.log(m2)