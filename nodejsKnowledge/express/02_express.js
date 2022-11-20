const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.resolve(__dirname, "./public")))

app.get("/", (req, res)=>{
    res.send("This is a server!!!")
})

app.get("/login", (req, res)=>{
    // 获取到用户输入的用户名和密码
    // req.query 表示查询字符串中的请求参数
    console.log(req.query)
    console.log("login page")
    if(req.query.username === "sunwukong" && req.query.password === "123123") {
        res.send("<h1>Login Successful</h1>")
    } else {
        res.send("<h1>Login Failed</h1>")
    }

})

app.listen(3000, ()=> {
    console.log("server start")
})