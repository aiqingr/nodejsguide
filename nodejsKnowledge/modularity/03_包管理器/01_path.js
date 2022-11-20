/* 
    通过path可以用来获取各种路径
    要使用path 需要先对其进行引入
    方法：
    path.resolve([...paths])
        -用来生成一个绝对路径 ./xxx  ../xxx xxx
        -绝对路径
            1）在计算机本地
                c:\xxx(windows)
                Users/xxxx(linux like)
            2）在网络中
                http://www.xxxx
                https://www.xxxx

        - 如果直接调用resolve 则返回当前的工作目录
            /Users/tongyangni/git/nodejsguide
            注意：我们通过不同方式执行代码的时候他的工作目录是有可能发生变化的
        - 如果将一个相对路径作为参数（一般不会使用）
            则resolve会自动将其转换成绝对路径
            会根据工作目录的不同，产生的绝对路径也不同
        - 一般会将一个绝对路径作为第一个参数
            一个相对路径作为第二个参数
            这样他会算出最终的路径
*/

const path = require("node:path")

// const res = path.resolve(__dirname, "./test.mjs")

// console.log(res)

/* 
    fs (File system)
        - fs用来帮助node操作磁盘中的文件
        - 文件操作也就是一种I/O操作
        - 使用fs需要先引入
*/

// const fs = require("node:fs")
const fs = require("node:fs/promises")
// fs.readFileSync 同步的读取文件的方法，会阻塞后面代码的运行
// 当我们通过fs模块读取磁盘中的数据的时候，读到的数据总会以buffer对象的形式返回
// buffer就是一个临时用来存储数据的缓冲区
// 不常用
/* const buff = fs.readFileSync(path.resolve(__dirname, "./hello.txt"))
console.log(buff.toString()) */

// fs.readFile() 异步 回调地狱 不常用
/* const buff2 = fs.readFile(
    path.resolve(__dirname, "./hello.txt"),
    (err, buffer) => {
        if(err) {
            console.log("ERROR")
        } else {
            console.log(buffer.toString())
        }
    }) */

// promise的版本

// fs.readFile(path.resolve(__dirname, "hello.txt"))
//     .then(buffer => {
//         console.log(buffer.toString())
//     })
//     .catch(e => {
//         console.log(e)
//     })

;(async() => {
    try {
        const buffer = await fs.readFile(path.resolve(__dirname, "hello.txt"))
        console.log(buffer.toString())
    } catch(e) {
        console.log("error")
    }
})() 
