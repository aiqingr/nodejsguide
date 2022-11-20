/*
 * @Author: Tongyang Ni ntyaiqingr@gmail.com
 * @Date: 2022-10-28 22:57:09
 * @LastEditors: Tongyang Ni ntyaiqingr@gmail.com
 * @LastEditTime: 2022-11-05 10:35:54
 * @FilePath: /nodejsguide/nodejsKnowledge/express/index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Tongyang Ni ntyaiqingr@gmail.com, All Rights Reserved. 
 */
// 引入express
const express = require("express")

//获取服务器的实例对象

const app = express()

/* 
    如果希望服务器正常使用，则需要为服务器设置路由
        路由可以根据不同的请求方式和地址来处理用户的请求
        app.METHOD(...)
        例如 app.get(/)

    中间件 middleware
        在express中我们使用app.use()来定义一个中间件
        中间件的作用和路由很像
*/
    /* 
        在路由中应该做两件事
            1）读取用户的请求 request 
            2）根据用户的请求返回响应 response
        res.sendStatus() 向客户端发送响应状态
        res.status() 用来设置响应状态 但不发送
        res.send() 设置并发送响应题
    */

// "/" => http://localhost:3000
// app.get("/", (req, res) => {
//     console.log("VISITED")
//     console.log(req)
//     console.log(res)
//     res.status(404)
//     res.send("I don't want to show you message")
// })

/* 
    和路由的区别
        会匹配所有的请求
        路径设置父目录
*/
// next 是回调函数第三个参数 它是一个函数 调用函数后 可以触发后续的中间件
app.use("/", (req, res, next) => {
    console.log("RUNNING MIDDLEWARE")
    // res.send("respons from middleware")
    next()
})

app.use("/", (req, res) => {
    console.log("111")
    res.send("<h1>222</h1>")
})


// 启动服务器
// app.listen(端口号)用来启动服务器
// 服务器启动以后我们就可以通过3000端口来访问了
// 协议名：//IP地址：端口号/路径
// http://localhost:3000/
// http://127.0.0.1:3000/
app.listen(3000, () => {
    console.log("RUNNING")
})
