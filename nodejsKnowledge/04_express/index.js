/*
 * @Author: Tongyang Ni ntyaiqingr@gmail.com
 * @Date: 2022-11-06 22:59:48
 * @LastEditors: Tongyang Ni ntyaiqingr@gmail.com
 * @LastEditTime: 2022-11-06 23:06:30
 * @FilePath: /nodejsguide/nodejsKnowledge/04_express/index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Tongyang Ni ntyaiqingr@gmail.com, All Rights Reserved. 
 */
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")

const app = express()
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))
app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.urlencoded())

app.use(cookieParser())

app.get("/set", (req, res) => {
    /* 
        cookie是有效期的
            默认情况下 cookie的有效期就是一次session会话
            会话就是下一次打开浏览器
    */
    res.cookie("name", "sunwukong", {
        expires: new Date()
    })
    res.send("config cookies")
})

app.get("/get", (req, res) => {
    const name = req.cookies.name
    console.log(name);
    res.send("get cookies")
})


app.listen(3000, () => {
    console.log("running")
})