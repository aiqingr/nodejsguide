/* 
    所有CommonJS的模块都会包装到一个函数中
    (function(exports, require, module, __filename, __dirname){
    // 模块代码
})
*/

let a = 1
console.log(arguments)
console.log(__dirname)
console.log(__filename)