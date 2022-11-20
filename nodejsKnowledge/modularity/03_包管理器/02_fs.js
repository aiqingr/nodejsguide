const fs = require("node:fs/promises")
const path = require("node:path")
/*  
    fs.readFile 读取文件
    fs.appendFile 创建文件，或将数据添加到已有文件中
    fs.mkdir() 创建目录 可以接受一个配置对象作为第二个参数
    fs.rmdir() 删除目录
*/

/* fs.appendFile(
    path.resolve(__dirname, "hello.txt"),
    "nihaoyexiaoqing"
).then(r => {
    console.log(r)
    console.log("RUNNING")
}) */
//  fs.mkdir() 创建目录 可以接受一个配置对象作为第二个参数

// fs.mkdir(path.resolve(__dirname, "./hello/abc"),{recursive: true})
//     .then(r=> {
//         console.log("RUNNING")
//     })
//     .catch(err => {
//         console.log("ERROR")
//     })

fs.rmdir(path.resolve(__dirname, "./hello"), {recursive: true})
    .then(r => {
        console.log("SUCCESS")
    })
    .catch(r => {
        console.log("ERROR", r)
    })